require('dotenv').config()
const { pool } = require('../config/database')
const slugify = require('slugify')

const CAT = { tec: 5, int: 2, eco: 3, dep: 4, cul: 6, cien: 7, esp: 1 }
const DATE = '2026-07-05 10:00:00'

const articles = [

  // ─── INTERNACIONAL ────────────────────────────────────────────
  {
    title: 'Putin llama a Trump por el 250 aniversario de EE. UU. y le advierte de que Rusia tomará todo el Donbás',
    summary: 'En su cuarta conversación telefónica del año, el presidente ruso defendió que Kiev y la UE "parten de una percepción falsa" del frente y que apuestan por alargar el conflicto, justo antes de la cumbre de la OTAN en Turquía.',
    content: `<p>Vladímir Putin mantuvo una conversación telefónica con Donald Trump con motivo del 250 aniversario de la independencia de Estados Unidos, la cuarta en lo que va de año entre ambos mandatarios. Durante la llamada, el presidente ruso recalcó que Rusia tomará todo el Donbás pese a los esfuerzos de Ucrania por impedirlo.</p>
<p>Según la versión del Kremlin, Putin defendió que Kiev y la Unión Europea "parten de una percepción falsa" de la situación en el frente y que apuestan por alargar el conflicto, en lugar de aceptar la realidad militar que Moscú considera ya irreversible.</p>
<p>La conversación se produce justo antes de la cumbre de la OTAN que se celebrará en Turquía los días 7 y 8 de julio, en la que participará el propio Trump, y en la que la guerra de Ucrania y la relación con Rusia ocuparán un lugar central de la agenda.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Teherán despide a Jamenei en un funeral de Estado con presencia de Hezbolá y Hamás',
    summary: 'Miles de fieles convirtieron las exequias del antiguo líder supremo en una demostración de fuerza tras la guerra contra Israel y EE. UU.; los representantes de ambas milicias se reunieron con el ministro de Exteriores iraní.',
    content: `<p>Teherán acogió ayer el funeral de Estado del antiguo líder supremo de Irán, el ayatolá Alí Jamenei, con la asistencia de miles de fieles en una ceremonia concebida como una demostración de fuerza tras la guerra contra Israel y Estados Unidos.</p>
<p>Al funeral asistieron representantes de Hezbolá y Hamás, que aprovecharon su presencia en la capital iraní para reunirse con el ministro de Exteriores, Abás Araqchi, en un gesto que subraya la continuidad del eje que Irán lidera en la región.</p>
<p>La ceremonia cierra la semana de luto decretada por las autoridades iraníes y abre oficialmente la etapa de la sucesión, con la incógnita de quién asumirá el liderazgo supremo de la República Islámica en uno de los momentos más delicados de su historia.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Trump celebra el 4 de Julio hablando de "amenaza comunista" y Mamdani responde con un alegato a favor de la inmigración',
    summary: 'El presidente estadounidense marcó el 250 aniversario con un discurso de confrontación, mientras el alcalde de Nueva York aprovechó la fecha para criticar sus políticas migratorias.',
    content: `<p>Donald Trump celebró el 4 de Julio, en pleno 250 aniversario de la independencia de Estados Unidos, con un discurso en el que habló de la existencia de una "amenaza comunista" para el país, en un tono de confrontación política que marcó la efeméride.</p>
<p>En el polo opuesto, el alcalde de Nueva York, Zohran Mamdani, aprovechó la fecha para pronunciar un discurso a favor de la inmigración, en el que criticó abiertamente las políticas migratorias de la administración Trump.</p>
<p>El contraste entre ambos discursos refleja la profunda polarización política que atraviesa Estados Unidos en el año de su cuarto de milenio, con la inmigración como uno de los principales campos de batalla entre demócratas y republicanos.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Lula recupera ventaja sobre Flávio Bolsonaro a tres meses de las presidenciales de Brasil',
    summary: 'Los sondeos vuelven a situar al actual presidente por delante de cara a las elecciones del 4 de octubre, cambiando el escenario que predominaba hace pocas semanas.',
    content: `<p>A tres meses de las elecciones presidenciales de Brasil, que se celebrarán el 4 de octubre, Luiz Inácio Lula da Silva recupera ventaja en los sondeos frente a Flávio Bolsonaro, modificando el escenario que predominaba hace pocas semanas.</p>
<p>El cambio de tendencia devuelve al actual presidente una posición de favorito que había llegado a verse amenazada, en una campaña que se anticipa larga, polarizada y con un electorado muy dividido entre los dos grandes bloques políticos del país.</p>
<p>Los analistas advierten de que la volatilidad de los sondeos en los últimos meses aconseja prudencia, y de que el resultado final dependerá en buena medida de la evolución económica y de los acontecimientos de la recta final de la campaña.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'La crisis post-terremotos se agrava en Venezuela con la respuesta del Gobierno cada vez más cuestionada',
    summary: 'Mientras continúan las labores de emergencia, crecen las críticas por la gestión gubernamental y la diáspora venezolana busca desesperadamente información sobre sus familiares.',
    content: `<p>Venezuela continúa inmersa en la crisis provocada por los terremotos, con una respuesta gubernamental cada vez más cuestionada por los damnificados, las organizaciones humanitarias y la comunidad internacional.</p>
<p>A las carencias en los refugios y la lentitud en la distribución de la ayuda se suma el drama de la diáspora venezolana, con millones de personas en el extranjero buscando desesperadamente información sobre el estado de sus familiares en las zonas afectadas.</p>
<p>La magnitud de la catástrofe y las dificultades de comunicación en las áreas más golpeadas complican tanto las labores de rescate como el recuento oficial de víctimas, en una emergencia que se prolongará previsiblemente durante meses.</p>`,
    image_url: null, category_id: CAT.int,
  },

  // ─── CIENCIA ──────────────────────────────────────────────────
  {
    title: 'La NASA lanza una misión robótica para evitar que uno de sus telescopios obsoletos se desintegre',
    summary: 'La operación, considerada peligrosa y con una duración de varios meses, busca controlar la caída del veterano observatorio espacial.',
    content: `<p>La NASA ha lanzado una misión robótica para evitar que uno de sus telescopios espaciales obsoletos se desintegre de forma descontrolada, en una operación considerada peligrosa y que se prolongará durante varios meses.</p>
<p>La misión enviará un vehículo robótico hasta el veterano observatorio para estabilizarlo y controlar su destino final, evitando tanto una reentrada descontrolada en la atmósfera como la generación de nuevos fragmentos de basura espacial en órbita.</p>
<p>Este tipo de operaciones de mantenimiento y retirada de satélites al final de su vida útil se consideran cada vez más necesarias ante la saturación de la órbita terrestre, y suponen un banco de pruebas para las tecnologías de servicio en el espacio.</p>`,
    image_url: null, category_id: CAT.cien,
  },

  // ─── ESPAÑA ────────────────────────────────────────────────────
  {
    title: 'Igualdad eleva a diez las mujeres asesinadas por violencia de género en lo que va de 2026',
    summary: 'El Ministerio actualiza la estadística oficial de víctimas mortales de la violencia machista en España en el primer semestre del año.',
    content: `<p>El Ministerio de Igualdad ha elevado a diez el número de mujeres asesinadas por violencia de género en España en lo que va de 2026, tras confirmar los últimos casos investigados.</p>
<p>La actualización de la estadística oficial vuelve a poner el foco sobre la violencia machista como uno de los problemas sociales más graves del país, y sobre la importancia de los mecanismos de detección, protección y denuncia disponibles para las víctimas.</p>
<p>Las autoridades recuerdan que el teléfono 016 de atención a las víctimas funciona las 24 horas del día, no deja rastro en la factura y ofrece atención en múltiples idiomas, además de los canales de emergencia habituales como el 112.</p>`,
    image_url: null, category_id: CAT.esp,
  },

  // ─── DEPORTES ─────────────────────────────────────────────────
  {
    title: 'Marruecos golea 3-0 a Canadá, elimina al anfitrión y es el primer clasificado para cuartos',
    summary: 'Un doblete de Ounahi y un gol de Rahimi meten a los marroquíes en cuartos de final, donde repetirán ante Francia la semifinal de Qatar 2022 el jueves 9 en Boston.',
    content: `<p>Marruecos goleó 3-0 a Canadá y eliminó al anfitrión del Mundial 2026, convirtiéndose en el primer clasificado para los cuartos de final del torneo. Un doblete de Azzedine Ounahi y un gol de Soufiane Rahimi sentenciaron la eliminatoria.</p>
<p>La selección marroquí confirma así su condición de potencia emergente del fútbol internacional, tras el histórico cuarto puesto logrado en Qatar 2022, y vuelve a meterse entre los ocho mejores del mundo.</p>
<p>En cuartos de final, Marruecos se enfrentará a Francia el jueves 9 de julio en Boston, en una reedición de la semifinal de Qatar 2022 que entonces cayó del lado francés y que se presenta como uno de los platos fuertes de la eliminatoria.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'Francia sufre ante el muro de Paraguay pero avanza a cuartos con un penalti de Mbappé (1-0)',
    summary: 'Los galos superaron a los guaraníes, verdugos de Alemania, gracias a una pena máxima señalada por el VAR en el minuto 68; Paraguay se despide del Mundial "con la frente en alto".',
    content: `<p>Francia sufrió muchísimo ante el muro defensivo de Paraguay, pero logró avanzar a los cuartos de final del Mundial 2026 con una victoria por 1-0, gracias a un penalti transformado por Kylian Mbappé y señalado por el VAR en el minuto 68.</p>
<p>Los guaraníes, que venían de eliminar a Alemania en la ronda anterior, plantearon un partido de enorme solidez defensiva que estuvo a punto de llevar la eliminatoria más allá, y se despiden del torneo "con la frente en alto" tras una actuación histórica.</p>
<p>Francia, por su parte, confirma su pase a una eliminatoria de cuartos en la que se medirá a Marruecos el jueves 9 en Boston, reeditando la semifinal de Qatar 2022.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'Brasil-Noruega y el platazo México-Inglaterra en el Azteca cierran hoy los octavos del Mundial',
    summary: 'Brasil, con su peor racha mundialista desde 2002, juega a las 22:00 en Nueva York, y México, que no alcanza unos cuartos desde 1986, recibe a Inglaterra a las 02:00 de la madrugada.',
    content: `<p>La jornada de hoy en el Mundial 2026 ofrece dos duelos de octavos de final de máximo nivel: el Brasil-Noruega que se disputa en Nueva York a las 22:00, hora peninsular española, y el esperado México-Inglaterra del mítico Estadio Azteca, a las 02:00 de la madrugada del lunes en España.</p>
<p>Brasil llega a la cita con su peor racha mundialista desde 2002, lo que ha disparado las críticas sobre el equipo y convierte el cruce ante la sorprendente Noruega en una prueba de fuego para la canarinha.</p>
<p>México, por su parte, busca ante Inglaterra romper una sequía histórica: la selección azteca no alcanza unos cuartos de final desde el Mundial de 1986, precisamente la última vez que ejerció de anfitriona.</p>`,
    image_url: null, category_id: CAT.dep,
  },
]

async function main() {
  const conn = await pool.getConnection()
  console.log(`Insertando ${articles.length} artículos...`)
  let ok = 0
  for (const a of articles) {
    const slug = slugify(a.title, { lower: true, strict: true })
      + '-' + Date.now() + '-' + Math.floor(Math.random() * 1000)
    try {
      await conn.execute(
        `INSERT INTO articles
           (title, slug, summary, content, image_url, category_id,
            author, is_featured, published_at, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
        [a.title, slug, a.summary || null, a.content,
         a.image_url || null, a.category_id,
         'Redacción NetonNews', 0, DATE]
      )
      console.log(`  ✅ ${a.title}`)
      ok++
    } catch (e) {
      console.error(`  ❌ ${a.title}: ${e.message}`)
    }
  }
  conn.release()
  console.log(`\nListo: ${ok}/${articles.length} artículos insertados.`)
  process.exit(0)
}

main().catch(e => { console.error(e); process.exit(1) })
