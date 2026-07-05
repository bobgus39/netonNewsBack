require('dotenv').config()
const { pool } = require('../config/database')
const slugify = require('slugify')

const CAT = { tec: 5, int: 2, eco: 3, dep: 4, cul: 6, cien: 7, esp: 1 }
const DATE = '2026-07-04 10:00:00'

const articles = [

  // ─── INTERNACIONAL ────────────────────────────────────────────
  {
    title: 'Miles de iraníes despiden al ayatolá Ali Jamenei en un funeral multitudinario en Teherán',
    summary: 'Las calles de la capital iraní se llenaron de lágrimas, poemas y llamados a la venganza durante las exequias del líder supremo, en un clima de máxima tensión regional.',
    content: `<p>Miles de iraníes se congregaron en las calles de Teherán para el funeral del ayatolá Ali Jamenei, el líder supremo de la República Islámica, en una ceremonia multitudinaria marcada por las muestras de dolor de los asistentes.</p>
<p>Las exequias transcurrieron en un clima de lágrimas, poemas y llamados a la venganza, reflejo del momento de máxima tensión que atraviesa el país tras la muerte de quien ha sido su máxima autoridad política y religiosa durante décadas.</p>
<p>El funeral se celebra en plena escalada del conflicto con Estados Unidos, con ataques cruzados, conversaciones de paz estancadas y una creciente tensión en el estrecho de Ormuz, uno de los puntos más sensibles para el tráfico mundial de petróleo.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'La guerra entre Estados Unidos e Irán mantiene en vilo al estrecho de Ormuz',
    summary: 'El conflicto continúa con ataques cruzados y conversaciones de paz sin avances, mientras crece la tensión en uno de los pasos marítimos más estratégicos del planeta.',
    content: `<p>El conflicto entre Estados Unidos e Irán continúa su curso con ataques cruzados entre ambas partes y conversaciones de paz que no logran avanzar, en un escenario de creciente inestabilidad para todo Oriente Próximo.</p>
<p>La tensión se concentra especialmente en el estrecho de Ormuz, el paso marítimo por el que circula una parte fundamental del petróleo mundial y cuyo eventual bloqueo tendría consecuencias inmediatas sobre los precios de la energía y la economía global.</p>
<p>La muerte del líder supremo iraní, Ali Jamenei, añade una capa adicional de incertidumbre al conflicto, ya que la sucesión al frente de la República Islámica podría condicionar tanto la estrategia militar como la disposición negociadora de Teherán.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Las bajas rusas en Ucrania alcanzan los dos millones y superan las cifras de Stalingrado',
    summary: 'El balance de muertos, heridos y desaparecidos del ejército ruso rebasa uno de los hitos más sangrientos de su historia militar, mientras el último ataque contra Kiev resulta excepcionalmente letal.',
    content: `<p>Las bajas rusas en la guerra de Ucrania habrían alcanzado ya los dos millones, entre muertos, heridos y desaparecidos, una cifra que supera las registradas por el ejército soviético en la batalla de Stalingrado, uno de los episodios más sangrientos de su historia militar.</p>
<p>El dato ilustra la magnitud del desgaste que el conflicto está suponiendo para Rusia, que encuentra crecientes dificultades para reclutar soldados al mismo ritmo al que los pierde en el frente.</p>
<p>Mientras tanto, el último ataque ruso contra Kiev ha resultado excepcionalmente letal, confirmando la escalada de la ofensiva sobre la capital ucraniana de las últimas semanas y el elevado coste humano que la guerra sigue teniendo para ambos bandos.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'La OTAN celebrará su cumbre anual en Ankara los días 7 y 8 de julio',
    summary: 'La capital turca acogerá la próxima semana una cita marcada por la guerra de Ucrania, la crisis de Oriente Próximo y el debate sobre el gasto en defensa de los aliados.',
    content: `<p>La próxima cumbre de la OTAN se celebrará en Ankara los días 7 y 8 de julio, con lo que este fin de semana se convierte en la antesala diplomática de una de las citas más importantes del año para la Alianza Atlántica.</p>
<p>La reunión llega en un momento especialmente delicado del panorama internacional, con la guerra de Ucrania en plena escalada, la crisis abierta en Oriente Próximo tras la muerte del líder supremo iraní y el debate recurrente sobre el reparto del gasto en defensa entre los aliados.</p>
<p>La elección de la capital turca como sede añade interés a la cumbre, dado el papel singular que Turquía desempeña dentro de la Alianza por sus relaciones tanto con Rusia como con los actores clave de Oriente Próximo.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'La ultraderechista AfD celebra su congreso federal en Erfurt entre protestas masivas',
    summary: 'Alice Weidel y Tino Chrupalla buscan la reelección al frente del partido alemán en su 17º congreso, mientras miles de manifestantes se concentran en la ciudad en señal de rechazo.',
    content: `<p>El partido ultraderechista alemán Alternativa para Alemania (AfD) celebra hoy en Erfurt su 17º congreso federal, una cita en la que sus colíderes, Alice Weidel y Tino Chrupalla, buscan la reelección al frente de la formación.</p>
<p>El congreso se desarrolla en un clima de fuerte contestación social: se esperan miles de manifestantes en las calles de la ciudad para protestar contra la celebración del cónclave y contra el avance del partido en el panorama político alemán.</p>
<p>La AfD ha consolidado en los últimos años su posición como una de las principales fuerzas políticas de Alemania, especialmente en los estados del este del país, lo que ha intensificado el debate sobre el cordón sanitario que el resto de partidos mantiene a su alrededor.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Venezuela sigue en emergencia con miles de hospitalizados y vecinos desesperados por la lentitud de la ayuda',
    summary: 'Con cerca de 2.000 muertos confirmados y más de 10.000 hospitalizados tras los terremotos, crece la frustración de los damnificados por la lenta respuesta gubernamental.',
    content: `<p>Venezuela continúa en situación de emergencia tras los devastadores terremotos, con cerca de 2.000 muertos confirmados oficialmente y más de 10.000 personas hospitalizadas, mientras las labores de rescate y atención a los damnificados siguen en marcha.</p>
<p>Entre los vecinos de las zonas más afectadas crece la frustración por la lentitud de la respuesta gubernamental, con quejas por la falta de agua potable, alimentos y atención médica en los refugios que acogen a los miles de personas que han perdido sus hogares.</p>
<p>La magnitud de la catástrofe ha desbordado la capacidad de las autoridades venezolanas, que dependen en gran medida de la ayuda internacional desplegada en el país para hacer frente a una crisis humanitaria que amenaza con prolongarse durante meses.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Lula aventaja a Flávio Bolsonaro en los sondeos a tres meses de las elecciones en Brasil',
    summary: 'El presidente brasileño llega con ventaja en las encuestas al tramo final de la campaña electoral que decidirá el futuro político del país.',
    content: `<p>Brasil entra en la recta final hacia sus elecciones presidenciales, que se celebrarán dentro de tres meses, con el presidente Luiz Inácio Lula da Silva aventajando a Flávio Bolsonaro en los sondeos de intención de voto.</p>
<p>El duelo entre el actual mandatario y el hijo del expresidente Jair Bolsonaro concentra la atención de la política brasileña, en una campaña que se anticipa polarizada y que medirá la fortaleza de los dos grandes bloques que dominan el país desde hace años.</p>
<p>Los analistas advierten, no obstante, de que tres meses son un plazo largo en política y que la ventaja actual de Lula podría estrecharse a medida que se acerque la cita con las urnas.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Keiko Fujimori es proclamada presidenta electa de Perú',
    summary: 'La líder de Fuerza Popular alcanza finalmente la presidencia tras varios intentos fallidos, en un momento de fuerte inestabilidad política en el país andino.',
    content: `<p>Keiko Fujimori ha sido proclamada presidenta electa de Perú, con lo que la líder de Fuerza Popular alcanza finalmente la jefatura del Estado tras varios intentos fallidos en elecciones anteriores.</p>
<p>La hija del expresidente Alberto Fujimori se convertirá así en la máxima autoridad de un país marcado en los últimos años por una profunda inestabilidad política, con sucesivos cambios de gobierno, crisis institucionales y una fuerte polarización social.</p>
<p>Su llegada al poder abre una nueva etapa para Perú, en la que deberá afrontar los retos de la seguridad, la economía y la reconciliación política en un contexto regional también convulso.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Estados Unidos celebra su 250 aniversario bajo una ola de calor extremo',
    summary: 'El país conmemora un cuarto de milenio de independencia con pronósticos de temperaturas récord en el noreste; Filadelfia ha modificado sus eventos del 4 de julio y del Mundial por el calor.',
    content: `<p>Estados Unidos celebra hoy su 250 aniversario como nación independiente en plena ola de calor extremo, con pronósticos de temperaturas récord en el noreste del país que condicionan los actos conmemorativos del 4 de julio.</p>
<p>En Filadelfia, la ciudad donde se firmó la Declaración de Independencia, las autoridades han tenido que modificar tanto los eventos del Día de la Independencia como los relacionados con el Mundial de fútbol debido al calor extremo, para proteger la salud de los asistentes.</p>
<p>La coincidencia del cuarto de milenio del país con un episodio meteorológico tan severo ha reavivado el debate sobre los efectos del cambio climático y la capacidad de las grandes ciudades estadounidenses para adaptarse a veranos cada vez más calurosos.</p>`,
    image_url: null, category_id: CAT.int,
  },

  // ─── ESPAÑA ────────────────────────────────────────────────────
  {
    title: 'Hacienda abre una inspección fiscal a Zapatero y su familia por los ejercicios 2021-2025',
    summary: 'La inspección se centra en el caso de las joyas de origen no justificado; el sindicato GESTHA denuncia que la AEAT abrió y suspendió de inmediato las inspecciones para blindar la prescripción tributaria.',
    content: `<p>Hacienda ha abierto una inspección fiscal a Zapatero y su familia por los ejercicios comprendidos entre 2021 y 2025, en relación con el caso de las joyas de origen no justificado tasadas en más de 1,3 millones de euros.</p>
<p>La actuación de la Agencia Tributaria no ha estado exenta de polémica: el sindicato de técnicos de Hacienda GESTHA denuncia que la AEAT abrió las inspecciones y las suspendió de inmediato, una maniobra que, a su juicio, serviría para blindar la prescripción tributaria de los ejercicios investigados.</p>
<p>La inspección se suma a la causa judicial ya abierta por presunto contrabando y fraude fiscal, en la que la propia Agencia Tributaria se ha personado a través de la Abogacía del Estado, y mantiene el caso de las joyas en el centro de la actualidad política.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'El juez del caso Koldo imputa a Jésica, expareja de Ábalos, por sus contratos en dos empresas públicas',
    summary: 'La expareja del exministro está citada a declarar el 20 de julio por los presuntos enchufes que le habrían facilitado empleo en el sector público.',
    content: `<p>El juez que instruye el caso Koldo ha imputado a Jésica, expareja del exministro José Luis Ábalos, por sus presuntos enchufes en dos empresas públicas, en las que habría obtenido empleo gracias a su relación con el entonces ministro.</p>
<p>La imputada está citada a declarar el próximo 20 de julio, en una nueva derivada de la investigación que rodea al exministro de Transportes y a su antiguo asesor Koldo García.</p>
<p>El caso Koldo se ha convertido en una de las causas judiciales más sensibles para el Gobierno, al afectar a un antiguo miembro del Ejecutivo y extenderse por distintas ramificaciones que incluyen contratos públicos y colocaciones presuntamente irregulares.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Un sondeo sitúa a PP y Vox por encima de los 200 escaños con debacle de la izquierda del PSOE',
    summary: 'La encuesta dibuja una mayoría holgada para el bloque de la derecha y un hundimiento de los partidos situados a la izquierda de los socialistas.',
    content: `<p>Un nuevo sondeo electoral sitúa a PP y Vox por encima de los 200 escaños en unas hipotéticas elecciones generales, una cifra que otorgaría al bloque de la derecha una mayoría muy holgada en el Congreso de los Diputados.</p>
<p>La encuesta refleja además una debacle de los partidos situados a la izquierda del PSOE, que sufrirían un fuerte retroceso respecto a sus resultados anteriores, en un contexto de crisis internas y fragmentación en ese espacio político.</p>
<p>El sondeo llega en un momento de especial debilidad para el Gobierno, acosado por los casos judiciales que afectan a su entorno, y alimenta el debate sobre un posible adelanto electoral.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Aragón celebra hoy sus elecciones autonómicas con el escrutinio previsto para esta noche',
    summary: 'Los aragoneses acuden a las urnas en una jornada electoral cuyo resultado se conocerá al cierre del recuento esta misma noche.',
    content: `<p>Aragón celebra hoy sus elecciones autonómicas, una cita con las urnas que medirá la temperatura política de la comunidad y cuyo escrutinio está previsto para esta misma noche.</p>
<p>Los colegios electorales permanecerán abiertos durante toda la jornada, y el recuento de votos permitirá conocer al final del día la composición del nuevo parlamento autonómico y las posibles combinaciones de gobierno.</p>
<p>El resultado aragonés se seguirá con atención también en clave nacional, como termómetro del momento político general y de la fortaleza de los distintos partidos de cara a futuras citas electorales.</p>`,
    image_url: null, category_id: CAT.esp,
  },

  // ─── DEPORTES ─────────────────────────────────────────────────
  {
    title: 'Arrancan los octavos del Mundial 2026: España se medirá a Portugal tras ganar a Uruguay',
    summary: 'La jornada se abre con el Canadá-Marruecos (19:00) y el Paraguay-Francia (23:00), mientras la selección española prepara el gran duelo ibérico de octavos.',
    content: `<p>Hoy arrancan los octavos de final del Mundial 2026 con dos partidos: el Canadá-Marruecos que se disputa en Houston a las 19:00, hora española, y el Paraguay-Francia de Filadelfia, que se jugará a las 23:00, hora peninsular.</p>
<p>El plato fuerte para el aficionado español llegará con el duelo ibérico: España se enfrentará a Portugal en esta ronda de octavos, después de cerrar la fase de grupos con una victoria ante Uruguay que confirmó el buen momento del equipo.</p>
<p>El cruce entre las dos selecciones de la península, ambas entre las favoritas al título, se perfila como uno de los partidos más atractivos de la eliminatoria y una final anticipada para muchos aficionados.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'Argentina sufre ante Cabo Verde pero se mete en octavos con un gol de Messi (3-2)',
    summary: 'La albiceleste superó un duelo infartante que se decidió con un tanto de Leo Messi, y sigue viva en el Mundial 2026.',
    content: `<p>Argentina logró ayer su clasificación para los octavos de final del Mundial 2026 tras superar a Cabo Verde por 3-2 en un partido infartante que mantuvo en vilo a los aficionados albicelestes hasta el final.</p>
<p>El encuentro se decidió con un gol de Leo Messi, que volvió a ejercer de salvador de su selección en un momento decisivo del torneo y ante un rival que puso contra las cuerdas a la campeona sudamericana.</p>
<p>La sufrida victoria permite a Argentina seguir viva en el Mundial, aunque el nivel mostrado ante un rival teóricamente inferior enciende las alarmas de cara a los cruces más exigentes que llegan a partir de ahora.</p>`,
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
