/**
 * Asigna imágenes de portada (Unsplash) a todos los artículos sin imagen.
 * Usa LIKE sobre el título para emparejar de forma robusta.
 */
const { pool } = require('../config/database')
require('dotenv').config({ path: require('path').join(__dirname, '../../../.env') })

const img = (id, w = 1200, h = 700) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`

// [title_fragment, unsplash_url]
const mappings = [
  // ── SEMANA 1 – Tecnología IA ────────────────────────────────────────────
  ['Toyota', img('1485827404703-89b55fcc595e')],                          // robot humanoide
  ['Anthropic lanza Claude Design', img('1558655902-8f1908a49b8c')],     // diseño/Figma
  ['robot chino completa un medio maratón', img('1563986768609-322da13575f3')],  // robot corriendo/tech
  ['bocetos toscos en fotografías', img('1561736778-23d0b1d87e33')],     // fotografía producto
  ['LingBot-Map', img('1512941937669-90a1b58e7e9c')],                   // smartphone 3D
  ['Claude Code Desktop', img('1620712943543-bcc4688e7485')],           // AI agentes código
  ['OpenClaw', img('1580893246395-52aead81960b')],                      // piscina jardín
  ['OpenAI Codex ya puede manejar tu Mac', img('1517694712202-14dd9538aa97')],  // Mac coding
  ['Chrome Skills', img('1573804633927-bfcbcd909acd')],                 // Chrome/navegador

  // ── SEMANA 2 – IA noviembre ─────────────────────────────────────────────
  ['Claude ya puede convertir cualquier imagen en un mundo 3D', img('1633356122544-f134324a6cee')],
  ['biología en PDF', img('1532187863486-abf9dbad1b69')],
  ['Figure AI transmite', img('1565814329452-e1efa11c5b89')],
  ['Humano contra máquina', img('1529156069898-49953e39b3ac')],
  ['China crea un transformer real', img('1485827404703-89b55fcc595e')],
  ['Anthropic lanza soluciones para abogados', img('1589829545856-d10d557cf95f')],
  ['ChatGPT llega a tu móvil como agente de código', img('1512941937669-90a1b58e7e9c')],
  ['teléfono de Google empieza a hacer tus tareas', img('1598300042247-d088f8ab3a91')],
  ['ChatGPT ahora puede ver tu cuenta bancaria', img('1601597111158-2fceff292cdc')],
  ['Demis Hassabis recauda', img('1576086213369-97a306d36557')],
  ['Google rediseña el cursor del ratón', img('1527864550417-7fd91fc51a46')],

  // ── 18 MAYO – Tecnología ───────────────────────────────────────────────
  ['primer horno europeo que recupera metales', img('1558618666-fcd25c85cd64')],
  ['SpaceX lanza esta madrugada el vuelo 12', img('1517976487492-5750f3195933')],
  ['huelga de Samsung dispara el precio de la RAM', img('1518770660439-4636190af475')],
  ['OpenAI critica la integración de ChatGPT en iOS', img('1611532736597-de2d4265fba3')],
  ['Google trabaja para que su traducción en tiempo real', img('1607082348824-0a96f2a4b9da')],
  ['inversor recupera 5 bitcoins', img('1640340434-25e68d7f3c28')],
  ['Meta amplía las gafas Ray-Ban Display', img('1559757148-5c350d0d3c56')],
  ['app de verificación de edad de la UE es hackeada', img('1563986768609-322da13575f3')],

  // ── 18 MAYO – Ciencia ─────────────────────────────────────────────────
  ['tres huellas gigantes de dinosaurio en el techo', img('1565008447742-97f6f38c985c')],
  ['mayor dinosaurio hallado en el sudeste asiático', img('1521322800607-c1cf21a11218')],
  ['película inspirada en tardígrados', img('1532094349884-543290130f6d')],
  ['alcohol causa directamente 62 enfermedades', img('1485795959911-ea5ebf41b6ae')],

  // ── 18 MAYO – Economía ────────────────────────────────────────────────
  ['mercados abren la semana en rojo', img('1611974789855-9c2a0a7236a3')],

  // ── 18 MAYO – Cultura / Videojuegos ──────────────────────────────────
  ['Subnautica 2', img('1511512578047-dfb367046420')],
  ['Los Troncos', img('1579952363873-27f3bade9f55')],

  // ── 18 MAYO – Internacional ───────────────────────────────────────────
  ['Dos cazas de la Marina de EE.UU. colisionan', img('1540575467063-178a50c2df87')],
  ['OMS declara emergencia internacional por el brote de ébola', img('1584744982491-665216d95f8b')],
  ['exministro laborista británico propone reabrir', img('1529455426043-dfed2be39a8b')],
  ['Letonia declara alerta en cinco regiones', img('1473968512647-3e447244af8f')],
  ['EE.UU. y China alcanzan un acuerdo comercial', img('1466611653911-0628c0c5f929')],
  ['Trump afirma que Taiwán no puede declarar', img('1606553660613-6a42a27c62e6')],
  ['conductor arrolla a diez peatones en el centro de Módena', img('1543051932-6ef9fecfbe28')],
  ['Francia abre investigación judicial por el asesinato de Khashoggi', img('1589829545856-d10d557cf95f')],
  ['Muere la ballena Timy', img('1568430462989-44163eb1752f')],
  ['buzo de rescate en Maldivas', img('1540979388789-6cee28a1cdc9')],
  ['vuelo MU5735', img('1436491865332-7a61a109cc05')],
  ['Bulgaria gana Eurovisión', img('1501386761578-eac5c94b800a')],
  ['amerizaje de emergencia en el Atlántico', img('1436491865332-7a61a109cc05')],
  ['EE.UU. prepara cargos penales contra Raúl Castro', img('1558618666-fcd25c85cd64')],
  ['DEA traslada a Miami a Alex Saab', img('1506905925346-21bda4d32df4')],
  ['Trump advierte a Irán', img('1565017228695-e8fa05b86c0c')],
  ['dron alcanza instalaciones cercanas a una central nuclear', img('1567427017947-545c5f8d16ad')],
  ['EE.UU. y Nigeria eliminan al número dos del Estado Islámico', img('1527604134282-2e4d16082462')],
  ['Hezbolá lanza 200 proyectiles', img('1580196969807-cc6de06c05be')],
  ['Ataques israelíes en Gaza', img('1580196969807-cc6de06c05be')],
  ['Ucrania lanza un ataque masivo con drones contra la región de Moscú', img('1578662996442-48f60103fc96')],

  // ── 18 MAYO – España ─────────────────────────────────────────────────
  ['PP gana las elecciones andaluzas', img('1555993539-1732b0258235')],
  ['médicos retoman la cuarta huelga general', img('1551190822-a9333d879b1f')],
  ['Triple crimen en un cuartel de la Guardia Civil', img('1584820927498-cfe5211fd8bf')],
  ['Teresa Rodríguez revela que padece cáncer', img('1576671081837-49000212a370')],
  ['Roban las joyas de la Virgen del Rosario', img('1555993539-1732b0258235')],
  ['Detenida "Anita la Fantástica"', img('1589829545856-d10d557cf95f')],
  ['Miles de personas marchan en Santiago de Compostela', img('1591696205602-2f950c417cb9')],

  // ── 18 MAYO – Deportes ────────────────────────────────────────────────
  ['Racing de Santander asciende', img('1508098682722-e99c643e7f0b')],
  ['Álex Márquez, operado de clavícula', img('1568605117036-5fe5e7bab0b7')],
  ['Sinner conquista Roma', img('1554068865-24ceec5e6f35')],
  ['Xabi Alonso ficha oficialmente como nuevo entrenador del Chelsea', img('1574629810360-7efbbe195018')],
  ['Inglaterra logra su octavo Seis Naciones femenino', img('1589487391730-58f20eb2c308')],
  ['Griezmann se despide del Atlético de Madrid', img('1551958219-acbc595d9db9')],
  ['Álex Palou logra su segunda pole', img('1547036967-23d912368125')],
]

async function run() {
  let updated = 0, notFound = 0
  for (const [fragment, url] of mappings) {
    const [rows] = await pool.query(
      'SELECT id FROM articles WHERE title LIKE ? AND (image_url IS NULL OR image_url = "") LIMIT 1',
      [`%${fragment}%`]
    )
    if (!rows.length) {
      // try without the image_url filter in case it already has one
      const [rows2] = await pool.query('SELECT id FROM articles WHERE title LIKE ? LIMIT 1', [`%${fragment}%`])
      if (!rows2.length) { console.log(`⚠️  No encontrado: ${fragment}`); notFound++; continue }
      await pool.query('UPDATE articles SET image_url = ? WHERE id = ?', [url, rows2[0].id])
      console.log(`✅ (actualizado) ${fragment}`)
    } else {
      await pool.query('UPDATE articles SET image_url = ? WHERE id = ?', [url, rows[0].id])
      console.log(`✅ ${fragment}`)
    }
    updated++
  }
  console.log(`\n🎉 ${updated} actualizados, ${notFound} no encontrados`)
  process.exit(0)
}
run().catch(e => { console.error(e.message); process.exit(1) })
