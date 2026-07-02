require('dotenv').config()
const { pool } = require('../config/database')

// Assign staggered timestamps to today's articles so the feed shows varied categories.
// We fetch articles ordered by category, then interleave them across time slots
// so consecutive time slots alternate between sections.
async function fix() {
  const conn = await pool.getConnection()

  // Get all articles from today with the seeded timestamp
  const [rows] = await conn.execute(
    `SELECT id, category_id FROM articles
     WHERE DATE(published_at) = '2026-05-21'
     ORDER BY id ASC`
  )
  console.log(`Artículos encontrados: ${rows.length}`)

  // Group by category
  const byCat = {}
  for (const r of rows) {
    if (!byCat[r.category_id]) byCat[r.category_id] = []
    byCat[r.category_id].push(r.id)
  }
  console.log('Por categoría:', Object.entries(byCat).map(([k,v]) => `cat${k}:${v.length}`).join(' '))

  // Interleave categories round-robin so the feed has variety
  const catQueues = Object.values(byCat)
  const interleaved = []
  let safety = 0
  while (interleaved.length < rows.length && safety < 1000) {
    safety++
    for (const q of catQueues) {
      if (q.length > 0) interleaved.push(q.shift())
    }
  }

  // Assign timestamps: spread from 08:00 to ~20:00
  // Most recent slot = last in array = highest time
  // We want the TOP of the feed (most recent) to be varied, which it will be
  // since interleaved means consecutive slots have different categories.
  const baseMs = new Date('2026-05-21T08:00:00').getTime()
  const totalSlots = interleaved.length
  const stepMs = (12 * 60 * 60 * 1000) / totalSlots // spread over 12 hours

  for (let i = 0; i < interleaved.length; i++) {
    const ts = new Date(baseMs + i * stepMs)
    const pad = n => String(n).padStart(2, '0')
    const formatted = `${ts.getFullYear()}-${pad(ts.getMonth()+1)}-${pad(ts.getDate())} ${pad(ts.getHours())}:${pad(ts.getMinutes())}:${pad(ts.getSeconds())}`
    await conn.execute(
      'UPDATE articles SET published_at = ? WHERE id = ?',
      [formatted, interleaved[i]]
    )
  }

  console.log(`✅ ${interleaved.length} artículos con horarios escalonados (08:00–20:00)`)
  conn.release()
  process.exit(0)
}

fix().catch(e => { console.error(e); process.exit(1) })
