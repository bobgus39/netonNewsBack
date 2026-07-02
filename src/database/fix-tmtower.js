require('dotenv').config()
const { pool } = require('../config/database')

async function fix() {
  const conn = await pool.getConnection()

  const newTitle = 'Vendido el ático de la futura TM Tower de Benidorm por 3,4 millones de euros a un empresario español'
  const newContent = `<p>El ático de la futura <strong>TM Tower</strong> de Benidorm ha sido adquirido por <strong>3,4 millones de euros</strong> por un empresario español, convirtiéndose en la transacción residencial de mayor notoriedad de las realizadas hasta la fecha en el complejo. El piso cuenta con <strong>350 metros cuadrados</strong>, cuatro dormitorios, cuatro baños, vestidor y una amplia terraza, lo que sitúa el precio unitario en <strong>10.000 euros por metro cuadrado</strong>.</p>
<p>La TM Tower, cuya construcción avanza en Benidorm, será cuando se complete en <strong>2028</strong> el edificio residencial de mayor altura de toda la Unión Europea con sus <strong>230 metros y 63 plantas</strong>. El proyecto, impulsado por la promotora TM Grupo Inmobiliario, ha concitado un notable interés internacional desde el inicio de su comercialización.</p>
<p>El perfil de los compradores es mayoritariamente extranjero: el <strong>70%</strong> de las unidades vendidas hasta la fecha han sido adquiridas por ciudadanos de otros países, con una presencia destacada de compradores de <strong>Polonia y Ucrania</strong>, países cuyas clases altas han mostrado en los últimos años un interés creciente por la inversión inmobiliaria en la costa española ante el contexto de inestabilidad en la Europa del Este.</p>
<p>Benidorm, ciudad conocida por su perfil urbanístico vertical y su concentración de rascacielos en primera línea de playa, acogerá así el edificio residencial más alto de Europa, consolidando su imagen como destino de turismo y residencia de primer nivel internacional.</p>`

  const [rows] = await conn.execute(
    "SELECT id, title FROM articles WHERE title LIKE '%TM Tower%' ORDER BY id DESC LIMIT 5"
  )
  console.log('Artículos encontrados:', rows)

  if (rows.length === 0) {
    console.log('No se encontró el artículo.')
    conn.release()
    process.exit(1)
  }

  const id = rows[0].id
  await conn.execute(
    'UPDATE articles SET title = ?, content = ?, updated_at = NOW() WHERE id = ?',
    [newTitle, newContent, id]
  )
  console.log(`✅ Artículo ${id} actualizado: Benidorm`)
  conn.release()
  process.exit(0)
}

fix().catch(e => { console.error(e); process.exit(1) })
