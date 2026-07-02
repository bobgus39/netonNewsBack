require('dotenv').config()
const { pool } = require('../config/database')

async function fixDay(conn, date) {
  const [rows] = await conn.execute(
    `SELECT id, category_id FROM articles WHERE DATE(published_at) = ? ORDER BY id ASC`,
    [date]
  )
  if (!rows.length) { console.log(`  ${date}: sin artículos`); return }

  const byCat = {}
  for (const r of rows) {
    if (!byCat[r.category_id]) byCat[r.category_id] = []
    byCat[r.category_id].push(r.id)
  }

  const catQueues = Object.values(byCat)
  const interleaved = []
  let safety = 0
  while (interleaved.length < rows.length && safety < 1000) {
    safety++
    for (const q of catQueues) {
      if (q.length > 0) interleaved.push(q.shift())
    }
  }

  const baseMs = new Date(`${date}T08:00:00`).getTime()
  const stepMs = (12 * 60 * 60 * 1000) / interleaved.length
  const pad = n => String(n).padStart(2, '0')

  for (let i = 0; i < interleaved.length; i++) {
    const ts = new Date(baseMs + i * stepMs)
    const formatted = `${ts.getFullYear()}-${pad(ts.getMonth()+1)}-${pad(ts.getDate())} ${pad(ts.getHours())}:${pad(ts.getMinutes())}:${pad(ts.getSeconds())}`
    await conn.execute('UPDATE articles SET published_at = ? WHERE id = ?', [formatted, interleaved[i]])
  }
  console.log(`  ✅ ${date}: ${interleaved.length} artículos escalonados`)
}

async function main() {
  const conn = await pool.getConnection()
  await fixDay(conn, '2026-05-19')
  await fixDay(conn, '2026-05-20')
  conn.release()
  process.exit(0)
}

main().catch(e => { console.error(e); process.exit(1) })
