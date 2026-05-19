const { pool } = require('../config/database')
const slugify = require('slugify')

async function getAll(req, res) {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM categories ORDER BY name ASC'
    )
    res.json(rows)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

async function getBySlug(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM categories WHERE slug = ?', [req.params.slug])
    if (!rows.length) return res.status(404).json({ message: 'Categoría no encontrada' })
    res.json(rows[0])
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

async function create(req, res) {
  const { name, description, color } = req.body
  if (!name) return res.status(400).json({ message: 'El nombre es obligatorio' })
  const slug = slugify(name, { lower: true, strict: true, locale: 'es' })
  try {
    const [result] = await pool.query(
      'INSERT INTO categories (name, slug, description, color) VALUES (?, ?, ?, ?)',
      [name, slug, description || null, color || 'gray']
    )
    const [rows] = await pool.query('SELECT * FROM categories WHERE id = ?', [result.insertId])
    res.status(201).json(rows[0])
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') return res.status(409).json({ message: 'Ya existe una categoría con ese nombre' })
    res.status(500).json({ message: err.message })
  }
}

async function update(req, res) {
  const { name, description, color } = req.body
  const slug = name ? slugify(name, { lower: true, strict: true, locale: 'es' }) : undefined
  try {
    const fields = []
    const values = []
    if (name) { fields.push('name = ?'); values.push(name) }
    if (slug) { fields.push('slug = ?'); values.push(slug) }
    if (description !== undefined) { fields.push('description = ?'); values.push(description) }
    if (color) { fields.push('color = ?'); values.push(color) }
    if (!fields.length) return res.status(400).json({ message: 'Nada que actualizar' })
    values.push(req.params.id)
    await pool.query(`UPDATE categories SET ${fields.join(', ')} WHERE id = ?`, values)
    const [rows] = await pool.query('SELECT * FROM categories WHERE id = ?', [req.params.id])
    res.json(rows[0])
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

async function remove(req, res) {
  try {
    await pool.query('DELETE FROM categories WHERE id = ?', [req.params.id])
    res.json({ message: 'Categoría eliminada' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = { getAll, getBySlug, create, update, remove }
