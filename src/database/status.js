// Muestra un resumen del estado de la BD (fechas, totales, destacadas).
require('dotenv').config()
const { pool } = require('../config/database')

;(async () => {
  const [dates] = await pool.query(
    "SELECT DATE_FORMAT(published_at, '%Y-%m-%d') d, COUNT(*) n FROM articles GROUP BY d ORDER BY d DESC LIMIT 10"
  )
  console.log('Artículos por fecha:')
  dates.forEach(r => console.log(' ', r.d, '→', r.n))
  const [[{ total }]] = await pool.query('SELECT COUNT(*) total FROM articles')
  const [[{ feat }]] = await pool.query('SELECT COUNT(*) feat FROM articles WHERE is_featured = 1')
  console.log(`Total: ${total} artículos · Destacadas: ${feat}`)
  process.exit(0)
})().catch(e => { console.error(e.message); process.exit(1) })
