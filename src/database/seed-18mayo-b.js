const { pool } = require('../config/database')
require('dotenv').config({ path: require('path').join(__dirname, '../../../.env') })
const slugify = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-').replace(/-+/g,'-')

const articles = [
  {
    title: 'Dos cazas de la Marina de EE.UU. colisionan en pleno vuelo en Idaho; los cuatro tripulantes sobreviven',
    subtitle: 'Los aviadores lograron eyectarse con éxito antes del impacto durante un ejercicio aéreo sobre territorio de Idaho',
    summary: 'Dos aviones de combate de la Marina estadounidense colisionaron durante un ejercicio en Idaho. Los cuatro tripulantes se eyectaron y se encuentran en buen estado.',
    content: `<p>Dos aviones de combate de la <strong>Marina de los Estados Unidos</strong> colisionaron en pleno vuelo el pasado fin de semana durante un ejercicio aéreo sobre el estado de <strong>Idaho</strong>. Los cuatro aviadores a bordo de ambas aeronaves lograron eyectarse con éxito antes de que las naves impactaran, y fueron rescatados en buen estado de salud.</p>
<h2>Detalles del incidente</h2>
<p>El accidente se produjo a una altitud de aproximadamente 4.500 metros durante una maniobra de entrenamiento de combate aéreo. Según el comunicado inicial de la Marina, la causa exacta de la colisión se investiga, aunque fuentes internas apuntan a un fallo en la comunicación entre los equipos de los dos aparatos durante la fase de aproximación táctica.</p>
<p>Los restos de las aeronaves cayeron en una zona despoblada de monte, sin causar daños en tierra. El <strong>Naval Safety Center</strong> ha abierto una investigación formal que podría prolongarse varios meses. La Marina no ha identificado públicamente a los cuatro aviadores involucrados mientras dura el proceso de notificación a sus familias.</p>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['EE.UU.', 'Marina', 'accidente aéreo', 'Idaho', 'cazas'], featured: false,
  },
  {
    title: 'La OMS declara emergencia internacional por el brote de ébola Bundibugyo en el Congo',
    subtitle: 'El brote, concentrado en la región de Ituri, suma 246 casos y 80 muertos; el virus ha llegado ya a la capital y a Uganda, sin vacuna ni tratamiento aprobados',
    summary: 'La OMS declara emergencia sanitaria internacional por el brote de ébola Bundibugyo en el este del Congo: 246 casos, 80 muertos y expansión a Kinshasa y Uganda sin vacuna disponible.',
    content: `<p>La <strong>Organización Mundial de la Salud (OMS)</strong> declaró este domingo una <strong>Emergencia de Salud Pública de Importancia Internacional (ESPII)</strong> por el brote de <strong>ébola Bundibugyo</strong> en la <strong>República Democrática del Congo</strong>, la máxima alerta sanitaria que puede emitir el organismo. Es la octava ESPII declarada por la OMS en su historia.</p>
<h2>Cifras y extensión geográfica</h2>
<p>El brote se detectó inicialmente en la región de <strong>Ituri</strong>, en el este del país, pero se ha extendido desde entonces a otras provincias y ha alcanzado la capital, <strong>Kinshasa</strong>, así como el país vecino <strong>Uganda</strong>. El balance oficial asciende a <strong>246 casos sospechosos o confirmados</strong> y <strong>80 muertes</strong>, con una tasa de letalidad del 32,5%.</p>
<h2>El ébola Bundibugyo: la cepa más difícil</h2>
<p>A diferencia de las cepas Zaire y Sudán —para las que existen vacunas parcialmente efectivas—, el <strong>ébola Bundibugyo</strong> carece de vacunas o tratamientos antivirales aprobados. Fue identificado por primera vez en Uganda en 2007 y ha causado tres brotes documentados, todos en la región de los Grandes Lagos africanos. La OMS trabaja con laboratorios en Europa y Estados Unidos para acelerar ensayos clínicos de candidatos vacunales.</p>
<blockquote>«La llegada del virus a una megalópolis de 17 millones de habitantes como Kinshasa cambia completamente el perfil de riesgo», advirtió el director general de la OMS, Tedros Adhanom Ghebreyesus.</blockquote>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['ébola', 'OMS', 'Congo', 'epidemia', 'emergencia sanitaria', 'Uganda'], featured: true,
  },
  {
    title: 'Un exministro laborista británico propone reabrir el debate sobre el regreso del Reino Unido a la UE',
    subtitle: 'Wes Streeting, candidato a liderar el Partido Laborista, afirma que el Brexit dejó a Reino Unido más pobre y con menos poder que en cualquier momento desde la Revolución Industrial',
    summary: 'El exministro Wes Streeting, candidato a liderar el Laborismo, afirma que el Brexit empobreció al Reino Unido y abre la puerta a reanudar la relación con la Unión Europea.',
    content: `<p><strong>Wes Streeting</strong>, exministro de Sanidad del gobierno de Keir Starmer y candidato declarado a la dirección del <strong>Partido Laborista</strong> de cara al próximo congreso interno, ha lanzado una declaración que rompe con el consenso de silencio que los laboristas habían mantenido sobre el Brexit desde el referéndum de 2016.</p>
<p>En una entrevista con <em>The Guardian</em>, Streeting afirmó que el Brexit dejó al Reino Unido «<em>más pobre, con menos poder geopolítico y con menos control sobre su propio destino que en cualquier momento previo a la Revolución Industrial</em>», y que una nueva relación con la <strong>Unión Europea</strong> debería estar «sobre la mesa» en el próximo programa electoral laborista.</p>
<h2>Reacción política</h2>
<p>La declaración ha generado un terremoto político en Westminster. El Partido Conservador acusó a Streeting de «traicionar el mandato democrático» del referéndum, mientras que el ala más europeísta del Laborismo —representada por figuras como Yvette Cooper— ha recibido con cautela las palabras del candidato sin respaldarlo explícitamente. Las encuestas muestran que el 61% de los británicos considera que el Brexit fue un error, pero solo el 38% apoyaría una reincorporación formal a la UE.</p>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['Brexit', 'Reino Unido', 'UE', 'Partido Laborista', 'Wes Streeting'], featured: false,
  },
  {
    title: 'Letonia declara alerta en cinco regiones fronterizas tras la entrada de un dron ruso en su espacio aéreo',
    subtitle: 'Las autoridades letonas pidieron a la población refugiarse en el interior de los edificios mientras el dron sobrevolaba territorio nacional antes de retornar a Rusia',
    summary: 'Letonia activó alerta en cinco regiones fronterizas con Rusia tras la intrusión de un dron en su espacio aéreo, pidiendo a la ciudadanía refugiarse hasta que el artefacto salió del territorio.',
    content: `<p>Las autoridades de <strong>Letonia</strong> activaron el domingo por la noche una alerta de seguridad en cinco regiones limítrofes con <strong>Rusia</strong> tras detectar la entrada de un <strong>dron no identificado</strong> en su espacio aéreo. El sistema de defensa antiaérea letón rastreó el artefacto, que sobrevoló territorio nacional durante aproximadamente 18 minutos antes de retornar al espacio aéreo ruso.</p>
<p>El gobierno letón emitió una alerta a la población de las regiones afectadas —Alūksne, Balvi, Ludza, Rēzekne y Krāslava— pidiendo a los ciudadanos que se refugiaran en el interior de los edificios y que evitaran abrir ventanas. Los medios de comunicación locales informaron de gran angustia entre la población de las localidades más pequeñas cercanas a la frontera.</p>
<h2>Contexto y respuesta de la OTAN</h2>
<p>El incidente llega en un momento de máxima tensión en el flanco oriental de la OTAN, con el conflicto de Ucrania aún activo. El portavoz del Ministerio de Defensa letón indicó que el incidente ha sido comunicado formalmente al Cuartel General de la OTAN en Bruselas. Rusia no ha emitido ningún comentario oficial sobre el episodio.</p>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['Letonia', 'Rusia', 'dron', 'OTAN', 'espacio aéreo', 'tensión'], featured: false,
  },
  {
    title: 'EE.UU. y China alcanzan un acuerdo comercial: reducción mutua de aranceles y compra de aviones Boeing',
    subtitle: 'Tras el encuentro entre Trump y Xi Jinping, ambas potencias rebajan aranceles, China adquirirá aviones Boeing y abrirá su mercado a mariscos y lácteos estadounidenses',
    summary: 'EE.UU. y China pactan una reducción mutua de aranceles tras reunirse Trump y Xi. China comprará aviones Boeing y abrirá su mercado a lácteos y mariscos; EE.UU. permitirá carnes chinas.',
    content: `<p>Los presidentes <strong>Donald Trump</strong> y <strong>Xi Jinping</strong> alcanzaron este fin de semana un acuerdo comercial bilateral de amplio alcance que marca un giro significativo tras meses de escalada arancelaria entre las dos mayores economías del mundo. El pacto incluye reducciones de aranceles en ambas direcciones y compromisos concretos de compra y apertura de mercados.</p>
<h2>Los puntos del acuerdo</h2>
<p>Según el comunicado conjunto difundido por la Casa Blanca y el Ministerio de Comercio chino:</p>
<ul>
  <li>China reducirá los aranceles sobre productos industriales y agrícolas estadounidenses en un promedio del 24%.</li>
  <li>EE.UU. rebajará los aranceles sobre electrónica, textil y componentes chinos en un promedio del 20%.</li>
  <li>China confirmó la compra de <strong>150 aviones Boeing</strong> por un valor estimado de 20.000 millones de dólares.</li>
  <li>Pekín facilitará la entrada de <strong>mariscos y productos lácteos</strong> estadounidenses, levantando restricciones fitosanitarias en vigor desde 2021.</li>
  <li>Washington autorizará la importación de <strong>carnes bovinas y aves de corral chinas</strong> certificadas.</li>
</ul>
<h2>Reacción de los mercados</h2>
<p>Los futuros del S&P 500 repuntaron un 1,4% al conocerse el acuerdo el domingo por la tarde, aunque las ganancias se diluyeron en la apertura del lunes ante el escepticismo de los analistas sobre la capacidad de implementación real del pacto, recordando experiencias pasadas con acuerdos similares que no se materializaron plenamente.</p>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['EE.UU.', 'China', 'aranceles', 'acuerdo comercial', 'Trump', 'Xi Jinping', 'Boeing'], featured: true,
  },
  {
    title: 'Trump afirma que Taiwán no puede declarar la independencia; Taipéi responde que ya es independiente',
    subtitle: 'El presidente estadounidense volvió a cuestionar la soberanía taiwanesa en declaraciones que tensaron las relaciones con la isla democrática',
    summary: 'Trump declaró que Taiwán no puede proclamarse independiente. El gobierno taiwanés respondió que ya es un país democrático, soberano e independiente y que no necesita declarar lo que ya es.',
    content: `<p>El presidente de los Estados Unidos, <strong>Donald Trump</strong>, afirmó el domingo que <strong>Taiwán no puede declararse formalmente independiente</strong>, en declaraciones que reavivaron el debate sobre el compromiso estratégico de Washington con la isla. Trump realizó estos comentarios en el marco de una rueda de prensa posterior a su reunión con el presidente chino Xi Jinping, y añadió que «Taiwán tiene que ser razonable».</p>
<p>La respuesta del gobierno taiwanés no tardó en llegar. El Ministerio de Asuntos Exteriores de Taiwán emitió un comunicado en el que recordó que <strong>Taiwán ya es un estado democrático, soberano e independiente</strong> con sus propias instituciones, ejército, moneda, pasaporte y gobierno electo, y que «no necesita declarar lo que ya es desde hace décadas».</p>
<h2>Tensión en el estrecho</h2>
<p>China considera a Taiwán una provincia rebelde y no descarta el uso de la fuerza para reunificarlo con el continente. La política oficial de EE.UU. se basa en la <em>ambigüedad estratégica</em>: no reconocer formalmente la independencia taiwanesa pero tampoco oponerse a ella, y vender armas defensivas a la isla bajo la Ley de Relaciones con Taiwán. Las declaraciones de Trump suponen una desviación de ese equilibrio que ha generado alarma entre los aliados del Pacífico.</p>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['Taiwán', 'China', 'Trump', 'geopolítica', 'independencia', 'Indo-Pacífico'], featured: false,
  },
  {
    title: 'Un conductor arrolla a diez peatones en el centro de Módena y apuñala a quien intentó detenerle',
    subtitle: 'El balance es de siete heridos, cuatro graves; una de las víctimas perdió ambas piernas. El detenido es un italiano de 31 años sin antecedentes',
    summary: 'Un hombre atropelló a cerca de diez peatones en Módena (Italia) y apuñaló a un transeúnte que intentó intervenirle. Siete heridos, cuatro graves, una víctima pierde ambas piernas.',
    content: `<p>Un hombre arrolló el domingo por la tarde a cerca de <strong>diez peatones</strong> en una calle peatonal del centro histórico de <strong>Módena</strong>, en el norte de Italia, y a continuación abandonó el vehículo huyendo a pie. Al intentar escapar, <strong>apuñaló a un transeúnte</strong> que trató de retenerle, antes de ser reducido por otros ciudadanos y entregado a la policía.</p>
<h2>Víctimas</h2>
<p>El balance provisional de los servicios de emergencia italianos es de <strong>siete heridos</strong>, de los cuales cuatro se encuentran en estado <strong>grave</strong>. Una de las víctimas más críticas, una mujer de mediana edad, sufrió la amputación traumática de ambas piernas como consecuencia del atropello y fue trasladada de urgencia al hospital de Módena, donde fue intervenida quirúrgicamente.</p>
<h2>El detenido</h2>
<p>Las autoridades identificaron al presunto responsable como un varón <strong>italiano de 31 años</strong>, sin antecedentes penales previos. La policía investiga los móviles del ataque. Las primeras diligencias apuntan a un estado de alteración severa en el momento de los hechos, aunque no se descarta ninguna hipótesis. El fiscal de Módena ha abierto diligencias por tentativa de homicidio múltiple.</p>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['Italia', 'Módena', 'atropello', 'sucesos', 'crimen'], featured: false,
  },
  {
    title: 'Francia abre investigación judicial por el asesinato de Khashoggi apuntando al príncipe heredero saudí',
    subtitle: 'Un juez francés formaliza la investigación sobre el periodista asesinado en 2018 en el consulado de Arabia Saudí en Estambul, con Mohamed bin Salmán en el punto de mira',
    summary: 'Un juez francés ha abierto una investigación formal sobre el asesinato del periodista Jamal Khashoggi en 2018, apuntando al príncipe Mohamed bin Salmán como posible responsable.',
    content: `<p>Un juez de instrucción del <strong>Tribunal de París</strong> ha abierto formalmente una investigación judicial sobre el asesinato del periodista saudi <strong>Jamal Khashoggi</strong>, perpetrado el 2 de octubre de 2018 en el consulado del reino saudí en Estambul. La investigación francesa se centra en la cadena de mando que ordenó la operación, y los indicios reunidos hasta ahora apuntan al <strong>príncipe heredero Mohamed bin Salmán (MbS)</strong> como posible responsable de haber autorizado el crimen.</p>
<h2>Por qué Francia abre la investigación ahora</h2>
<p>La jurisdicción francesa sobre el caso se fundamenta en que varios ciudadanos franceses estuvieron presentes en la embajada saudí en París en reuniones posteriores al asesinato donde presuntamente se intentó encubrir la autoría. Además, uno de los colaboradores directos de MbS con pasaporte de residencia en Francia figura en la causa como persona de interés.</p>
<p>La apertura del caso en Francia supone la primera investigación penal formal en un tribunal occidental, ya que el proceso turco concluyó con condenas en ausencia y la indagación estadounidense fue archivada en 2023 por el Departamento de Justicia. Francia recuerda así que el principio de jurisdicción universal en crímenes contra periodistas sigue vivo en el derecho europeo.</p>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['Khashoggi', 'Francia', 'Arabia Saudí', 'MbS', 'periodismo', 'justicia'], featured: false,
  },
  {
    title: 'Muere la ballena Timy días después de ser rescatada con 1,5 millones de euros: los científicos ya lo advertían',
    subtitle: 'El cetáceo, trasladado al mar abierto en un costoso operativo financiado por dos empresarios privados, fue hallado muerto cerca de una isla danesa',
    summary: 'La ballena Timy, rescatada con un operativo de 1,5 millones de euros financiado por privados, ha sido hallada muerta cerca de Dinamarca. Los científicos advirtieron del pronóstico sombrío desde el inicio.',
    content: `<p>La ballena conocida popularmente como <strong>Timy</strong> ha sido hallada muerta en aguas cercanas a una isla danesa, apenas días después de ser trasladada al mar abierto mediante un costoso y mediático operativo de rescate que costó <strong>1,5 millones de euros</strong>, sufragados íntegramente por dos empresarios privados que asumieron la operación tras el fracaso de los intentos públicos.</p>
<h2>Un final anunciado</h2>
<p>Múltiples veterinarios marinos y biólogos habían advertido desde el principio que el pronóstico del animal era sombrío. Timy presentaba desorientación severa, comportamiento atípico que incluía permanecer en aguas poco profundas sin alimentarse, y signos de posibles lesiones internas. El equipo de rescate reconoció que la operación era «un último intento» antes de que el animal muriera de forma natural en aguas costeras.</p>
<p>La muerte de Timy reabrirá el debate sobre los límites de la intervención humana en el destino de animales salvajes heridos, y sobre la pertinencia de invertir recursos económicos cuantiosos en rescates de bajo pronóstico. Los científicos marinos subrayan que el bienestar del animal debe primar sobre el componente emocional y mediático que este tipo de casos genera inevitablemente.</p>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['ballena', 'rescate animal', 'Dinamarca', 'conservación marina'], featured: false,
  },
  {
    title: 'Muere un buzo de rescate en Maldivas mientras buscaba los cuerpos de cinco submarinistas italianos',
    subtitle: 'El socorrista fue encontrado inconsciente bajo el agua y no pudo ser reanimado; los cinco turistas italianos habían fallecido en un accidente previo',
    summary: 'Un buzo de rescate maldivo falleció intentando recuperar los cuerpos de cinco submarinistas italianos muertos en un accidente previo. Fue encontrado inconsciente y no sobrevivió.',
    content: `<p>Una tragedia se sumó a otra en las <strong>Maldivas</strong> este fin de semana cuando un <strong>buzo de rescate maldivo</strong> perdió la vida mientras participaba en la operación para recuperar los cuerpos de <strong>cinco turistas italianos</strong> fallecidos previamente en un accidente de buceo en aguas del archipiélago.</p>
<p>Según el comunicado de las autoridades maldivas, el rescatador fue encontrado <strong>inconsciente bajo el agua</strong> por otros miembros del equipo. A pesar de los intentos de reanimación en el lugar y del traslado urgente al hospital más cercano, el buzo no sobrevivió. La investigación inicial apunta a una posible embolia gaseosa, aunque las causas exactas están bajo investigación.</p>
<h2>El accidente original</h2>
<p>Los cinco submarinistas italianos habían desaparecido días antes durante una inmersión en un punto de buceo reconocido por sus fuertes corrientes. Sus cuerpos fueron localizados pero no recuperados inmediatamente debido a la profundidad y la complejidad de la zona. La tragedia ha impulsado un debate en el sector turístico maldivo sobre los protocolos de seguridad en zonas de buceo de alta dificultad.</p>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['Maldivas', 'accidente buceo', 'rescate', 'Italia', 'sucesos'], featured: false,
  },
  {
    title: 'Un informe apunta a que el vuelo MU5735 de China Eastern fue derribado deliberadamente por un piloto',
    subtitle: 'Las cajas negras del accidente del 21 de marzo de 2022, que mató a 132 personas, revelarían un forcejeo en la cabina antes de la caída vertical',
    summary: 'Un nuevo informe sostiene que el accidente del vuelo MU5735 en 2022, con 132 muertos, pudo ser provocado deliberadamente por uno de los pilotos tras un forcejeo en la cabina, según los datos de vuelo.',
    content: `<p>Cuatro años después del trágico accidente del <strong>vuelo MU5735 de China Eastern Airlines</strong>, que el 21 de marzo de 2022 se precipitó a tierra desde 8.000 metros de altitud en la provincia de Guangxi matando a las <strong>132 personas a bordo</strong>, un nuevo análisis forense publicado por investigadores independientes sostiene que la catástrofe pudo ser el resultado de un <strong>acto deliberado</strong> por parte de uno de los pilotos.</p>
<h2>Los datos de las cajas negras</h2>
<p>Según el informe, los registradores de vuelo muestran que los mandos del avión fueron <strong>empujados intencionalmente hacia delante</strong> para iniciar la caída vertical, y que el avión no presentaba ningún fallo mecánico en el momento del descenso. Los datos de la grabadora de voz de la cabina —cuyo contenido exacto China nunca ha hecho público en su totalidad— apuntarían a un <strong>forcejeo entre tripulantes</strong> en los segundos previos al inicio de la maniobra fatal.</p>
<h2>La investigación oficial</h2>
<p>La Administración de Aviación Civil China (CAAC) no ha emitido aún su informe final sobre el accidente, cuatro años después de los hechos. La demora es inusual según los estándares internacionales de investigación de accidentes. El organismo ha rechazado comentar el nuevo análisis independiente, lo que ha alimentado las especulaciones sobre los motivos de la dilación.</p>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['China Eastern', 'MU5735', 'accidente aéreo', 'China', 'aviación'], featured: false,
  },
  {
    title: 'Bulgaria gana Eurovisión 2026 con "Bangaranga"; Israel queda segunda y se baraja incluir a Canadá',
    subtitle: 'La representante búlgara Dara se convirtió en la gran sorpresa de la noche en Basilea, superando a una Israel que había llegado como favorita',
    summary: 'Bulgaria ganó Eurovisión 2026 en Basilea con Dara y su tema "Bangaranga". Israel quedó segunda. Se estudia la posibilidad de invitar a Canadá como nuevo país participante.',
    content: `<p><strong>Bulgaria</strong> se llevó el micrófono de cristal del <strong>Festival de Eurovisión 2026</strong> celebrado en Basilea (Suiza), con la representante <strong>Dara</strong> y su pegadizo tema <strong>«Bangaranga»</strong>. La victoria búlgara fue la gran sorpresa de la noche: ninguno de los principales portales de apuestas la situaba entre los cinco primeros clasificados a solo 48 horas del espectáculo.</p>
<h2>El resultado final</h2>
<p>El voto combinado del jurado profesional y del televoto popular colocó a Bulgaria en primera posición, seguida de <strong>Israel</strong> en segunda. El resultado de Israel generó controversia en redes sociales por la situación geopolítica en Gaza, con protestas fuera del Palacio de Congresos de Basilea durante la transmisión.</p>
<p>España tuvo una actuación discreta, quedando en el puesto 14 con una propuesta que mezcló flamenco y electrónica sin terminar de convencer ni al jurado ni al público europeo.</p>
<h2>Canadá en Eurovisión</h2>
<p>La Unión Europea de Radiodifusión (UER) confirmó que estudia activamente la incorporación de <strong>Canadá</strong> como país participante en ediciones futuras, siguiendo el modelo de Australia, que participa desde 2015. La posible inclusión generó debate entre los seguidores del festival sobre los límites geográficos y el espíritu original de la competición.</p>`,
    author: 'Redacción Cultura',
    cat: 6, tags: ['Eurovisión', 'Bulgaria', 'Dara', 'Bangaranga', 'festival', 'música'], featured: true,
  },
  {
    title: 'Once personas sobreviven a un amerizaje de emergencia en el Atlántico a 289 km de Miami tras una cadena de fallos técnicos',
    subtitle: 'El avión cubría una ruta entre dos islas de las Bahamas cuando sus sistemas fallaron en cascada; las once personas a bordo permanecieron cinco horas en el agua hasta ser rescatadas',
    summary: 'Un avión entre islas de las Bahamas amarizó de emergencia a 289 km de Miami tras múltiples fallos. Las 11 personas a bordo sobrevivieron tras cinco horas en el agua.',
    content: `<p>Las once personas a bordo de un avión de pequeño tamaño que cubría una ruta entre dos islas de las <strong>Bahamas</strong> sobrevivieron el sábado a un <strong>amerizaje de emergencia</strong> en el Atlántico, a aproximadamente <strong>289 kilómetros al este de Miami</strong>, después de que una cadena de fallos técnicos dejara a la aeronave sin posibilidad de continuar el vuelo.</p>
<h2>Los hechos</h2>
<p>Según el informe preliminar de la Junta Nacional de Seguridad en el Transporte de EE.UU. (NTSB), la aeronave —un turbohélice de pasajeros— experimentó primero un fallo en el motor izquierdo, seguido de una pérdida de presión hidráulica y, finalmente, el apagado del motor derecho, todo ello en un intervalo de aproximadamente 12 minutos. El piloto realizó un <strong>amerizaje controlado</strong> en mar en calma, lo que fue determinante para que no hubiera víctimas.</p>
<p>Los supervivientes permanecieron <strong>aproximadamente cinco horas en el agua</strong>, apoyados en balsas de emergencia, hasta que un helicóptero de la Guardia Costera de EE.UU. y un buque mercante que desvió su ruta los rescataron. Cuatro personas fueron hospitalizadas por hipotermia leve.</p>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['accidente aéreo', 'Bahamas', 'amerizaje', 'Atlántico', 'rescate'], featured: false,
  },
  // ── LATINOAMÉRICA ─────────────────────────────────────────────
  {
    title: 'EE.UU. prepara cargos penales contra Raúl Castro por el derribo de avionetas civiles en 1996',
    subtitle: 'El Departamento de Justicia avanza en un proceso que acusaría al expresidente cubano por ordenar la muerte de cuatro ciudadanos en vuelo sobre aguas internacionales',
    summary: 'El Departamento de Justicia de EE.UU. trabaja en cargos penales contra Raúl Castro por el derribo de dos avionetas civiles en 1996 que mató a cuatro personas en aguas internacionales.',
    content: `<p>El <strong>Departamento de Justicia de los Estados Unidos</strong> trabaja en la presentación formal de cargos penales contra el expresidente cubano <strong>Raúl Castro</strong> por su presunta responsabilidad en el derribo de dos avionetas civiles el 24 de febrero de 1996, operación que causó la muerte de cuatro ciudadanos estadounidenses de origen cubano que sobrevolaban aguas internacionales.</p>
<h2>El incidente de 1996</h2>
<p>Las avionetas pertenecían a la organización <em>Hermanos al Rescate</em> y realizaban labores humanitarias sobre el estrecho de Florida cuando dos cazas MiG-29 de la Fuerza Aérea cubana las derribaron. La investigación estadounidense siempre apuntó a que la orden vino de la cúpula del gobierno cubano. Raúl Castro era entonces ministro de las Fuerzas Armadas.</p>
<p>EE.UU. también señala que Cuba ha reforzado en los últimos meses su arsenal militar con <strong>drones proporcionados por Rusia e Irán</strong>, lo que añade urgencia al endurecimiento de la posición estadounidense hacia La Habana. La posibilidad de que Raúl Castro sea juzgado in absentia es la más probable, dada la imposibilidad de conseguir su extradición.</p>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['Cuba', 'Raúl Castro', 'EE.UU.', 'Departamento de Justicia', 'Hermanos al Rescate'], featured: false,
  },
  {
    title: 'La DEA traslada a Miami a Alex Saab, el principal testaferro del régimen de Maduro',
    subtitle: 'El empresario colombiano acusado de lavar dinero y corrupción para evadir sanciones internacionales comparecerá ante la justicia estadounidense',
    summary: 'La DEA trasladó a Alex Saab a Miami para enfrentar cargos de lavado de dinero y corrupción. Saab era el principal operador financiero de Nicolás Maduro para evadir sanciones internacionales.',
    content: `<p>La <strong>Agencia Antidrogas de EE.UU. (DEA)</strong> trasladó este fin de semana al empresario colombiano <strong>Alex Saab</strong> a <strong>Miami</strong>, donde comparecerá ante un tribunal federal acusado de lavado de dinero a gran escala y corrupción en beneficio del <strong>régimen de Nicolás Maduro</strong> en Venezuela.</p>
<p>Saab era considerado el principal operador financiero y testaferro del gobierno venezolano, responsable de diseñar e implementar redes de empresas pantalla en múltiples jurisdicciones para evadir las sanciones internacionales impuestas a Venezuela y para canalizar fondos de contratos públicos sobrevalorados hacia cuentas controladas por el entorno de Maduro.</p>
<h2>Un caso de alto valor político</h2>
<p>El traslado de Saab tiene una dimensión política que va más allá de lo judicial: fue capturado en Cabo Verde en 2020 cuando viajaba en misión diplomática para el gobierno venezolano, lo que generó una disputa legal sobre su inmunidad. Venezuela consideró su extradición a EE.UU. como un «acto de piratería». El proceso en Miami podría revelar detalles comprometedores sobre el funcionamiento interno del sistema financiero del chavismo.</p>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['Venezuela', 'Alex Saab', 'DEA', 'Maduro', 'lavado de dinero', 'sanciones'], featured: false,
  },
  // ── GUERRAS Y CONFLICTOS ──────────────────────────────────────
  {
    title: 'Trump advierte a Irán: «No le quedará nada» si no avanza en las negociaciones nucleares',
    subtitle: 'El presidente estadounidense mostró su impaciencia ante la falta de progresos en los contactos diplomáticos con Teherán y amenazó con consecuencias severas',
    summary: 'Trump amenazó públicamente a Irán con que «no le quedará nada» si no avanza rápidamente en las negociaciones sobre su programa nuclear, expresando impaciencia ante la falta de progresos.',
    content: `<p>El presidente de los Estados Unidos, <strong>Donald Trump</strong>, intensificó su presión diplomática sobre <strong>Irán</strong> con una advertencia pública de marcado tono bélico: «Si Irán no llega rápidamente a un acuerdo, no le va a quedar nada», declaró el domingo desde la Casa Blanca, en un contexto de negociaciones nucleares que no han producido avances concretos en las últimas semanas.</p>
<p>Las conversaciones entre Washington y Teherán, mediadas por Omán, llevan meses estancadas por las diferencias sobre el nivel de enriquecimiento de uranio que Irán acepta mantener y sobre el levantamiento de las sanciones económicas. Irán ha acumulado reservas de uranio enriquecido al 60%—un paso técnico antes del 90% necesario para uso en armamento—, lo que ha elevado la alarma en Israel y en los aliados occidentales.</p>
<h2>Reacción iraní</h2>
<p>El Ministerio de Asuntos Exteriores iraní calificó las palabras de Trump de «arrogantes e inaceptables» y afirmó que «Irán no negociará bajo amenazas». La Guardia Revolucionaria emitió un comunicado en el que recordó sus capacidades de «respuesta asimétrica» en todo el Golfo Pérsico.</p>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['Irán', 'Trump', 'nuclear', 'negociaciones', 'conflicto', 'Oriente Medio'], featured: false,
  },
  {
    title: 'Un dron alcanza instalaciones cercanas a una central nuclear en Emiratos Árabes; Dubái sospecha de Irán',
    subtitle: 'Dos de los tres proyectiles fueron interceptados, pero el tercero impactó y dañó un generador eléctrico; no hubo fugas radiactivas',
    summary: 'Un ataque con drones en Emiratos Árabes Unidos causó un incendio cerca de una central nuclear. Dos drones fueron interceptados, uno causó daños en un generador. Sin fugas radiactivas. Irán, sospechoso.',
    content: `<p>Tres drones atacaron el fin de semana instalaciones en las inmediaciones de la central nuclear <strong>Barakah</strong> en los <strong>Emiratos Árabes Unidos</strong>. Los sistemas de defensa antiaérea emiratíes interceptaron dos de los artefactos, pero el tercero logró impactar y provocó un incendio que dañó un <strong>generador eléctrico auxiliar</strong>. Las autoridades nucleares emiratíes confirmaron que no se registraron <strong>fugas radiactivas</strong> y que los reactores no resultaron afectados.</p>
<p>La central de Barakah, la primera planta de energía nuclear del mundo árabe, está operada por la empresa estatal <em>ENEC</em> y sus cuatro reactores de agua presurizada fueron construidos con tecnología de Corea del Sur. El ataque se produjo en las horas nocturnas y el incendio fue controlado en menos de dos horas.</p>
<h2>Emiratos acusa a Irán</h2>
<p>Las autoridades emiratíes indicaron que la tecnología y la trayectoria de los drones son «consistentes» con el arsenal de drones de largo alcance desarrollado por <strong>Irán</strong> y que ha sido utilizado en ataques anteriores en la región, incluyendo los de 2019 contra instalaciones petroleras de Aramco en Arabia Saudí. Irán no ha emitido ninguna declaración.</p>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['Emiratos Árabes', 'drones', 'Irán', 'central nuclear', 'Barakah', 'conflicto'], featured: false,
  },
  {
    title: 'EE.UU. y Nigeria eliminan al número dos del Estado Islámico en una operación conjunta',
    subtitle: 'Trump anunció personalmente la muerte de Abu Bilal al-Minuki, considerado el terrorista más activo del grupo yihadista en el mundo en los últimos dos años',
    summary: 'Trump anunció la eliminación conjunta con Nigeria de Abu Bilal al-Minuki, el número dos del Estado Islámico y su operador más activo a nivel global en los últimos años.',
    content: `<p>El presidente de los Estados Unidos, <strong>Donald Trump</strong>, anunció desde la Sala de Crisis de la Casa Blanca que una operación conjunta entre fuerzas especiales estadounidenses y el ejército de <strong>Nigeria</strong> resultó en la muerte de <strong>Abu Bilal al-Minuki</strong>, considerado por la inteligencia occidental el segundo al mando del <strong>Estado Islámico</strong> a nivel global y el más activo operacionalmente del grupo en los últimos dos años.</p>
<p>Al-Minuki era buscado por su responsabilidad en la organización de atentados en múltiples países africanos, particularmente en el Sahel, y por coordinar la financiación de células durmientes en Europa. Las fuerzas especiales del <strong>AFRICOM</strong> venían siguiéndole durante varios meses en colaboración con los servicios de inteligencia nigerianos, que aportaron información crucial sobre su ubicación en el noreste del país.</p>
<h2>Impacto en la organización</h2>
<p>Analistas del <em>Center for Strategic and International Studies</em> señalan que la muerte de al-Minuki supone un golpe significativo para la estructura de mando del Estado Islámico en África, aunque advierten de que la organización ha demostrado en el pasado una notable capacidad para reemplazar a sus líderes eliminados en relativamente poco tiempo.</p>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['Estado Islámico', 'Nigeria', 'EE.UU.', 'terrorismo', 'AFRICOM', 'Trump'], featured: false,
  },
  {
    title: 'Hezbolá lanza 200 proyectiles contra Israel; las negociaciones continúan de cara a junio',
    subtitle: 'Israel calificó el ataque del fin de semana como una violación de los acuerdos vigentes, aunque se espera que ambas partes retomen el diálogo mediado por Washington en los próximos días',
    summary: 'Hezbolá lanzó cerca de 200 proyectiles contra Israel en el último fin de semana. Israel lo considera una violación del acuerdo. Las negociaciones proseguirán el 2 y 3 de junio con mediación de EE.UU.',
    content: `<p>La frontera entre <strong>Líbano</strong> e <strong>Israel</strong> vivió el pasado fin de semana una escalada significativa cuando <strong>Hezbolá</strong> lanzó aproximadamente <strong>200 proyectiles</strong> —cohetes, morteros y drones explosivos— contra localidades del norte de Israel, en lo que el gobierno israelí calificó de «violación flagrante» de los acuerdos de cese el fuego mediados por Estados Unidos.</p>
<p>El Ejército israelí respondió con ataques de artillería y aéreos contra posiciones de Hezbolá en el sur del Líbano, sin que se reportaran víctimas civiles en ninguno de los dos bandos en las primeras horas. El balance de heridos leves en Israel fue de doce personas, principalmente por fragmentos de proyectiles interceptados.</p>
<h2>Las negociaciones no se detienen</h2>
<p>A pesar de la escalada, fuentes diplomáticas en Washington confirmaron que las conversaciones indirectas entre Israel y Hezbolá —mediadas por el enviado especial estadounidense— no se han interrumpido. Las próximas rondas de negociación están programadas para los días <strong>2 y 3 de junio</strong>, y se espera que aborden tanto el intercambio de detenidos como el repliegue de fuerzas en la zona de separación.</p>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['Israel', 'Líbano', 'Hezbolá', 'cohetes', 'conflicto', 'negociaciones'], featured: false,
  },
  {
    title: 'Ataques israelíes en Gaza matan a ocho palestinos, entre ellos tres trabajadores de una cocina humanitaria',
    subtitle: 'Hamás calificó el ataque contra la cocina comunitaria de "crimen de guerra deliberado"; Israel afirma que el objetivo era un operativo de Hamás en las inmediaciones',
    summary: 'Ocho palestinos murieron en ataques israelíes en Gaza, entre ellos tres voluntarios de una cocina comunitaria de ayuda alimentaria. Hamás lo calificó de crimen de guerra deliberado.',
    content: `<p>Al menos <strong>ocho palestinos</strong> perdieron la vida el domingo en Gaza como consecuencia de ataques aéreos israelíes en distintos puntos del enclave. Entre las víctimas figuran tres trabajadores de una <strong>cocina comunitaria</strong> que distribuía comida caliente a desplazados en el barrio de Nuseirat, en el centro de la Franja.</p>
<p><strong>Hamás</strong> emitió un comunicado calificando el ataque contra la cocina de «crimen de guerra deliberado» y exigiendo una investigación internacional. Organizaciones humanitarias como <em>World Central Kitchen</em> y <em>Oxfam</em> condenaron el incidente y recordaron que sus instalaciones figuran en las listas de coordenadas compartidas con el ejército israelí para evitar ataques.</p>
<h2>Versión israelí</h2>
<p>El portavoz del <strong>Ejército de Israel (IDF)</strong> afirmó que el objetivo del ataque era un operativo de Hamás que utilizaba las inmediaciones de la cocina como punto de preparación de un ataque inminente, y que se tomaron precauciones para minimizar daños colaterales. El IDF anunció la apertura de una revisión interna del procedimiento.</p>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['Gaza', 'Israel', 'Hamás', 'conflicto', 'ayuda humanitaria', 'guerra'], featured: false,
  },
  {
    title: 'Ucrania lanza un ataque masivo con drones contra la región de Moscú; Rusia afirma interceptar más de 1.000',
    subtitle: 'El ataque es uno de los más ambiciosos de la guerra. Medios rusos informan de una investigación anticorrupción que podría afectar a Olena Zelenska',
    summary: 'Ucrania lanzó un ataque masivo con drones sobre la región de Moscú. Rusia dice haber interceptado más de 1.000 artefactos. Medios rusos reportan investigación anticorrupción vinculada a Zelenska.',
    content: `<p><strong>Ucrania</strong> lanzó en la madrugada del domingo al lunes uno de los ataques con drones más masivos desde el inicio de la guerra contra la <strong>región de Moscú</strong>, enviando simultáneamente oleadas de artefactos para saturar los sistemas de defensa antiaérea rusos. El <strong>Ministerio de Defensa de Rusia</strong> afirmó haber interceptado más de <strong>1.000 drones</strong> en diferentes fases del ataque, aunque esta cifra no ha podido ser verificada de forma independiente.</p>
<p>Videos en redes sociales mostraron explosiones y columnas de humo en zonas periféricas de la capital rusa, así como el sonido de sistemas de defensa Pantsir-S y S-400 actuando durante varias horas de la noche. El aeropuerto internacional de Moscú-Vnúkovo suspendió operaciones temporalmente como medida preventiva.</p>
<h2>La información sobre Zelenska</h2>
<p>Medios rusos afines al Kremlin publicaron el lunes informaciones sobre una supuesta <strong>investigación anticorrupción en Ucrania</strong> que podría involucrar a <strong>Olena Zelenska</strong>, esposa del presidente Zelenski, vinculada a contratos de ayuda humanitaria. El gobierno ucraniano calificó las informaciones de «operación de desinformación rusa» sin base factual, y varios analistas occidentales advirtieron sobre la fuente y el momento de publicación.</p>`,
    author: 'Redacción Internacional',
    cat: 2, tags: ['Ucrania', 'Rusia', 'drones', 'Moscú', 'guerra', 'Zelenski'], featured: false,
  },
]

async function seed() {
  let created = 0, skipped = 0
  for (const art of articles) {
    const slug = slugify(art.title)
    const wordCount = art.content.replace(/<[^>]+>/g, '').split(/\s+/).length
    const readingTime = Math.max(1, Math.round(wordCount / 200))
    const [existing] = await pool.query('SELECT id FROM articles WHERE slug = ?', [slug])
    if (existing.length) { console.log(`⏭️  ${art.title}`); skipped++; continue }
    const [result] = await pool.query(
      `INSERT INTO articles (title,subtitle,slug,summary,content,author,category_id,is_featured,reading_time,published_at)
       VALUES (?,?,?,?,?,?,?,?,?, '2026-05-18 09:00:00')`,
      [art.title, art.subtitle, slug, art.summary, art.content, art.author, art.cat, art.featured ? 1 : 0, readingTime]
    )
    for (const tagName of art.tags) {
      await pool.query('INSERT IGNORE INTO tags (name) VALUES (?)', [tagName])
      const [t] = await pool.query('SELECT id FROM tags WHERE name = ?', [tagName])
      if (t.length) await pool.query('INSERT IGNORE INTO article_tags VALUES (?,?)', [result.insertId, t[0].id])
    }
    console.log(`✅ [cat:${art.cat}] ${art.title}`)
    created++
  }
  console.log(`\n🎉 ${created} creados, ${skipped} omitidos`)
  process.exit(0)
}
seed().catch(e => { console.error(e.message); process.exit(1) })
