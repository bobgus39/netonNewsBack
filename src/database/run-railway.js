// Ejecuta cualquier script de esta carpeta contra la BD de Railway.
// Uso:  node src/database/run-railway.js seed-06julio
// Las credenciales se leen de backend/.env.railway (fuera de git).
const fs = require('fs')
const path = require('path')

const envFile = path.join(__dirname, '..', '..', '.env.railway')
if (!fs.existsSync(envFile)) {
  console.error('Falta el archivo .env.railway con las credenciales de Railway')
  process.exit(1)
}
// Se cargan antes que dotenv: dotenv no sobreescribe variables ya definidas,
// así que el .env local no pisará estos valores.
for (const line of fs.readFileSync(envFile, 'utf8').split(/\r?\n/)) {
  const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/)
  if (m) process.env[m[1]] = m[2]
}

const script = process.argv[2]
if (!script) {
  console.error('Uso: node src/database/run-railway.js <nombre-del-script>  (ej: seed-06julio)')
  process.exit(1)
}

console.log(`▶ Ejecutando ${script} contra Railway (${process.env.DB_HOST})...`)
require(path.join(__dirname, script.replace(/\.js$/, '') + '.js'))
