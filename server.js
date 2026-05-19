require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { testConnection } = require('./src/config/database')

const app = express()
const PORT = process.env.PORT || 3001

// Middlewares
const allowedOrigins = (process.env.FRONTEND_URL || 'http://localhost:5173').split(',').map(s => s.trim())
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true)
    if (allowedOrigins.includes(origin)) return callback(null, true)
    if (origin.endsWith('.vercel.app')) return callback(null, true)
    callback(new Error('Not allowed by CORS'))
  },
  credentials: true,
}))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Rutas API
app.use('/api/articles', require('./src/routes/articles'))
app.use('/api/categories', require('./src/routes/categories'))

// Proxy de imágenes externas (necesario para html2canvas en tarjetas Instagram)
app.get('/api/proxy-image', (req, res) => {
  const { url } = req.query
  if (!url) return res.status(400).json({ message: 'Falta el parámetro url' })

  let parsedUrl
  try { parsedUrl = new URL(url) } catch { return res.status(400).json({ message: 'URL inválida' }) }

  // Solo permitir dominios de imagen conocidos
  const allowed = ['images.unsplash.com', 'unsplash.com', 'plus.unsplash.com', 'res.cloudinary.com']
  if (!allowed.some(d => parsedUrl.hostname.endsWith(d))) {
    return res.status(403).json({ message: 'Dominio no permitido' })
  }

  const protocol = parsedUrl.protocol === 'https:' ? require('https') : require('http')
  const request = protocol.get(url, (imgRes) => {
    res.setHeader('Content-Type', imgRes.headers['content-type'] || 'image/jpeg')
    res.setHeader('Cache-Control', 'public, max-age=86400')
    res.setHeader('Access-Control-Allow-Origin', '*')
    imgRes.pipe(res)
  })
  request.on('error', () => res.status(502).json({ message: 'Error al obtener la imagen' }))
})

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }))

// 404 API
app.use('/api/*', (req, res) => res.status(404).json({ message: 'Ruta no encontrada' }))

// Error handler
app.use((err, req, res, next) => {
  console.error(err)
  if (err.code === 'LIMIT_FILE_SIZE') return res.status(413).json({ message: 'El archivo es demasiado grande (máx. 5 MB)' })
  res.status(500).json({ message: err.message || 'Error interno del servidor' })
})

// Iniciar
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
  testConnection().catch(() => {})
})
