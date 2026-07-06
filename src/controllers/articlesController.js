const { pool } = require('../config/database')
const { uploadImage } = require('../config/cloudinary')
const slugify = require('slugify')

const ARTICLE_FIELDS = `
  a.id, a.title, a.subtitle, a.slug, a.summary, a.content,
  a.image_url, a.image_caption, a.author, a.category_id,
  a.is_featured, a.reading_time, a.views, a.published_at, a.updated_at,
  c.id AS cat_id, c.name AS cat_name, c.slug AS cat_slug, c.color AS cat_color
`

function mapArticle(row, tags = []) {
  return {
    id: row.id,
    title: row.title,
    subtitle: row.subtitle,
    slug: row.slug,
    summary: row.summary,
    content: row.content,
    image_url: row.image_url,
    image_caption: row.image_caption,
    author: row.author,
    category_id: row.category_id,
    is_featured: Boolean(row.is_featured),
    reading_time: row.reading_time,
    views: row.views,
    published_at: row.published_at,
    updated_at: row.updated_at,
    category: row.cat_id ? { id: row.cat_id, name: row.cat_name, slug: row.cat_slug, color: row.cat_color } : null,
    tags,
  }
}

async function getTagsForArticle(articleId) {
  const [rows] = await pool.query(
    'SELECT t.name FROM tags t JOIN article_tags at ON t.id = at.tag_id WHERE at.article_id = ?',
    [articleId]
  )
  return rows.map(r => r.name)
}

async function expireOldFeatured(req, res, next) {
  try {
    await pool.query(
      `UPDATE articles SET is_featured = 0
       WHERE is_featured = 1 AND published_at < NOW() - INTERVAL 4 DAY`
    )
  } catch (err) {
    // No bloqueamos la petición por un fallo en esta tarea de mantenimiento
  }
  next()
}

// Selecciona artículos con las destacadas primero y, para el resto,
// intercalando categorías (round-robin) para evitar que una sola
// categoría con muchas publicaciones domine el listado.
async function getDiverse(limit) {
  const [rows] = await pool.query(
    `WITH ranked AS (
       SELECT a.*, ROW_NUMBER() OVER (PARTITION BY a.category_id ORDER BY a.published_at DESC, a.id DESC) AS cat_rank
       FROM articles a
     )
     SELECT ${ARTICLE_FIELDS} FROM ranked a LEFT JOIN categories c ON a.category_id = c.id
     ORDER BY a.is_featured DESC, a.published_at DESC, a.cat_rank ASC, a.id DESC
     LIMIT ?`,
    [limit]
  )
  return rows
}

async function getAll(req, res) {
  const page = Math.max(1, parseInt(req.query.page) || 1)
  const limit = Math.min(50, parseInt(req.query.limit) || 10)
  const offset = (page - 1) * limit

  try {
    const [rows] = await pool.query(
      `SELECT ${ARTICLE_FIELDS} FROM articles a LEFT JOIN categories c ON a.category_id = c.id
       ORDER BY a.published_at DESC LIMIT ? OFFSET ?`,
      [limit, offset]
    )
    const [[{ total }]] = await pool.query('SELECT COUNT(*) AS total FROM articles')
    const articles = await Promise.all(rows.map(async r => mapArticle(r, await getTagsForArticle(r.id))))
    res.json({ articles, pagination: { page, limit, total, pages: Math.ceil(total / limit) } })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

async function getFeatured(req, res) {
  try {
    const [rows] = await pool.query(
      `SELECT ${ARTICLE_FIELDS} FROM articles a LEFT JOIN categories c ON a.category_id = c.id
       WHERE a.is_featured = 1 ORDER BY a.published_at DESC LIMIT 5`
    )
    if (!rows.length) {
      const latest = await getDiverse(5)
      return res.json(latest.map(r => mapArticle(r)))
    }
    res.json(rows.map(r => mapArticle(r)))
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

async function getLatest(req, res) {
  const limit = Math.min(20, parseInt(req.query.limit) || 10)
  try {
    const rows = await getDiverse(limit)
    const [[{ total }]] = await pool.query('SELECT COUNT(*) AS total FROM articles')
    const articles = rows.map(r => mapArticle(r))
    res.json({ articles, pagination: { total } })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

async function getMostRead(req, res) {
  const limit = Math.min(20, parseInt(req.query.limit) || 8)
  // Solo cuenta la última semana: sin este filtro, las noticias antiguas
  // (con visitas acumuladas) desplazan siempre a las recientes.
  const mostReadQuery = (recentOnly) => `
    WITH ranked AS (
      SELECT a.*, ROW_NUMBER() OVER (PARTITION BY a.category_id ORDER BY a.views DESC, a.published_at DESC, a.id DESC) AS cat_rank
      FROM articles a
      ${recentOnly ? 'WHERE a.published_at >= NOW() - INTERVAL 7 DAY' : ''}
    )
    SELECT ${ARTICLE_FIELDS} FROM ranked a LEFT JOIN categories c ON a.category_id = c.id
    ORDER BY a.cat_rank ASC, a.views DESC, a.id DESC
    LIMIT ?`
  try {
    let [rows] = await pool.query(mostReadQuery(true), [limit])
    if (rows.length < limit) {
      ;[rows] = await pool.query(mostReadQuery(false), [limit])
    }
    res.json(rows.map(r => mapArticle(r)))
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

async function getById(req, res) {
  try {
    const [rows] = await pool.query(
      `SELECT ${ARTICLE_FIELDS} FROM articles a LEFT JOIN categories c ON a.category_id = c.id WHERE a.id = ?`,
      [req.params.id]
    )
    if (!rows.length) return res.status(404).json({ message: 'Artículo no encontrado' })
    const tags = await getTagsForArticle(rows[0].id)
    res.json(mapArticle(rows[0], tags))
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

async function getBySlug(req, res) {
  try {
    const [rows] = await pool.query(
      `SELECT ${ARTICLE_FIELDS} FROM articles a LEFT JOIN categories c ON a.category_id = c.id WHERE a.slug = ?`,
      [req.params.slug]
    )
    if (!rows.length) return res.status(404).json({ message: 'Artículo no encontrado' })
    await pool.query('UPDATE articles SET views = views + 1 WHERE id = ?', [rows[0].id])
    const tags = await getTagsForArticle(rows[0].id)
    res.json(mapArticle(rows[0], tags))
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

async function getByCategory(req, res) {
  const page = Math.max(1, parseInt(req.query.page) || 1)
  const limit = Math.min(50, parseInt(req.query.limit) || 9)
  const offset = (page - 1) * limit
  try {
    const [rows] = await pool.query(
      `SELECT ${ARTICLE_FIELDS} FROM articles a
       LEFT JOIN categories c ON a.category_id = c.id
       WHERE c.slug = ? ORDER BY a.published_at DESC LIMIT ? OFFSET ?`,
      [req.params.categorySlug, limit, offset]
    )
    const [[{ total }]] = await pool.query(
      'SELECT COUNT(*) AS total FROM articles a LEFT JOIN categories c ON a.category_id = c.id WHERE c.slug = ?',
      [req.params.categorySlug]
    )
    const articles = rows.map(r => mapArticle(r))
    res.json({ articles, pagination: { page, limit, total, pages: Math.ceil(total / limit) } })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

async function search(req, res) {
  const q = req.query.q?.trim()
  if (!q) return res.json({ articles: [], pagination: { total: 0 } })
  const page = Math.max(1, parseInt(req.query.page) || 1)
  const limit = Math.min(50, parseInt(req.query.limit) || 9)
  const offset = (page - 1) * limit
  const like = `%${q}%`
  try {
    const [rows] = await pool.query(
      `SELECT ${ARTICLE_FIELDS} FROM articles a LEFT JOIN categories c ON a.category_id = c.id
       WHERE a.title LIKE ? OR a.subtitle LIKE ? OR a.summary LIKE ? OR a.content LIKE ?
       ORDER BY a.published_at DESC LIMIT ? OFFSET ?`,
      [like, like, like, like, limit, offset]
    )
    const [[{ total }]] = await pool.query(
      'SELECT COUNT(*) AS total FROM articles WHERE title LIKE ? OR subtitle LIKE ? OR summary LIKE ? OR content LIKE ?',
      [like, like, like, like]
    )
    const articles = rows.map(r => mapArticle(r))
    res.json({ articles, pagination: { page, limit, total, pages: Math.ceil(total / limit) } })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

async function create(req, res) {
  const { title, subtitle, summary, content, author, category_id, is_featured, image_caption } = req.body
  if (!title?.trim()) return res.status(400).json({ message: 'El título es obligatorio' })
  if (!content?.trim()) return res.status(400).json({ message: 'El contenido es obligatorio' })

  let slug = slugify(title, { lower: true, strict: true, locale: 'es' })
  const existing = await pool.query('SELECT id FROM articles WHERE slug LIKE ?', [`${slug}%`])
  if (existing[0].length) slug = `${slug}-${Date.now()}`

  const wordCount = content.replace(/<[^>]+>/g, '').split(/\s+/).length
  const readingTime = Math.max(1, Math.round(wordCount / 200))
  const image_url = req.file ? await uploadImage(req.file) : null
  const tags = (() => { try { return JSON.parse(req.body.tags || '[]') } catch { return [] } })()

  try {
    const [result] = await pool.query(
      `INSERT INTO articles (title, subtitle, slug, summary, content, image_url, image_caption, author, category_id, is_featured, reading_time)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, subtitle || null, slug, summary || null, content, image_url, image_caption || null,
       author || 'Redacción', category_id || null, is_featured === 'true' || is_featured === true ? 1 : 0, readingTime]
    )
    const articleId = result.insertId

    for (const tagName of tags) {
      const [tagResult] = await pool.query(
        'INSERT INTO tags (name) VALUES (?) ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id)', [tagName]
      )
      await pool.query('INSERT IGNORE INTO article_tags (article_id, tag_id) VALUES (?, ?)', [articleId, tagResult.insertId])
    }

    const [rows] = await pool.query(
      `SELECT ${ARTICLE_FIELDS} FROM articles a LEFT JOIN categories c ON a.category_id = c.id WHERE a.id = ?`,
      [articleId]
    )
    res.status(201).json(mapArticle(rows[0], tags))
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

async function update(req, res) {
  const { title, subtitle, summary, content, author, category_id, is_featured, image_caption } = req.body
  const tags = (() => { try { return JSON.parse(req.body.tags || null) } catch { return null } })()

  try {
    const fields = []
    const values = []

    if (title) {
      fields.push('title = ?'); values.push(title)
      const slug = slugify(title, { lower: true, strict: true, locale: 'es' })
      fields.push('slug = ?'); values.push(`${slug}-${req.params.id}`)
    }
    if (subtitle !== undefined) { fields.push('subtitle = ?'); values.push(subtitle || null) }
    if (summary !== undefined) { fields.push('summary = ?'); values.push(summary || null) }
    if (content) {
      fields.push('content = ?'); values.push(content)
      const wordCount = content.replace(/<[^>]+>/g, '').split(/\s+/).length
      fields.push('reading_time = ?'); values.push(Math.max(1, Math.round(wordCount / 200)))
    }
    if (author !== undefined) { fields.push('author = ?'); values.push(author || 'Redacción') }
    if (category_id !== undefined) { fields.push('category_id = ?'); values.push(category_id || null) }
    if (is_featured !== undefined) { fields.push('is_featured = ?'); values.push(is_featured === 'true' || is_featured === true ? 1 : 0) }
    if (image_caption !== undefined) { fields.push('image_caption = ?'); values.push(image_caption || null) }
    if (req.file) { fields.push('image_url = ?'); values.push(await uploadImage(req.file)) }

    if (fields.length) {
      values.push(req.params.id)
      await pool.query(`UPDATE articles SET ${fields.join(', ')} WHERE id = ?`, values)
    }

    if (tags !== null) {
      await pool.query('DELETE FROM article_tags WHERE article_id = ?', [req.params.id])
      for (const tagName of tags) {
        const [tagResult] = await pool.query(
          'INSERT INTO tags (name) VALUES (?) ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id)', [tagName]
        )
        await pool.query('INSERT IGNORE INTO article_tags (article_id, tag_id) VALUES (?, ?)', [req.params.id, tagResult.insertId])
      }
    }

    const [rows] = await pool.query(
      `SELECT ${ARTICLE_FIELDS} FROM articles a LEFT JOIN categories c ON a.category_id = c.id WHERE a.id = ?`,
      [req.params.id]
    )
    if (!rows.length) return res.status(404).json({ message: 'Artículo no encontrado' })
    const updatedTags = await getTagsForArticle(req.params.id)
    res.json(mapArticle(rows[0], updatedTags))
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

async function remove(req, res) {
  try {
    await pool.query('DELETE FROM articles WHERE id = ?', [req.params.id])
    res.json({ message: 'Artículo eliminado' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = { getAll, getFeatured, getLatest, getMostRead, getById, getBySlug, getByCategory, search, create, update, remove, expireOldFeatured }
