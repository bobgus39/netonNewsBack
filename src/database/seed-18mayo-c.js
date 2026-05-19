const { pool } = require('../config/database')
require('dotenv').config({ path: require('path').join(__dirname, '../../../.env') })
const slugify = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-').replace(/-+/g,'-')

const articles = [
  // ── ESPAÑA ────────────────────────────────────────────────────
  {
    title: 'El PP gana las elecciones andaluzas con 53 escaños pero necesitará a Vox para gobernar',
    subtitle: 'Juanma Moreno logra una victoria amplia pero se queda a dos escaños de la mayoría absoluta; el PSOE registra su peor resultado histórico con solo 28 diputados',
    summary: 'El PP de Juanma Moreno gana las elecciones andaluzas con 53 escaños, dos por debajo de la mayoría absoluta. El PSOE sufre su peor resultado histórico con 28 escaños. Vox será clave para gobernar.',
    content: `<p>El <strong>Partido Popular</strong>, encabezado por <strong>Juanma Moreno</strong>, ha ganado las elecciones autonómicas de Andalucía con <strong>53 escaños</strong> en el Parlamento regional, dos por debajo de los 55 necesarios para alcanzar la mayoría absoluta. Moreno, que repetirá como presidente de la Junta de Andalucía, deberá negociar con <strong>Vox</strong> para asegurarse el apoyo suficiente para la investidura.</p>
<h2>El hundimiento del PSOE</h2>
<p>La gran noticia negativa de la noche fue el desplome del <strong>Partido Socialista</strong>, que con <strong>28 escaños</strong> registra su <strong>peor resultado histórico</strong> en Andalucía, una comunidad que gobernó ininterrumpidamente durante casi cuatro décadas hasta 2018. La secretaria general del PSOE andaluz compareció ante sus seguidores para reconocer la derrota y anunciar un proceso interno de reflexión.</p>
<h2>El ascenso de Adelante Andalucía</h2>
<p>La coalición de izquierdas <strong>Adelante Andalucía</strong>, liderada por <strong>Teresa Rodríguez</strong>, experimentó un notable crecimiento pasando de <strong>2 a 8 escaños</strong>, consolidándose como la tercera fuerza de la izquierda andaluza. El PP venció en las ocho provincias andaluzas, algo que no ocurría desde las elecciones de 1990.</p>`,
    author: 'Redacción España',
    cat: 1, tags: ['PP', 'Andalucía', 'elecciones', 'Juanma Moreno', 'PSOE', 'Vox'], featured: true,
  },
  {
    title: 'Los médicos retoman la cuarta huelga general del año ante la falta de respuesta del Gobierno',
    subtitle: 'La Organización Médica Colegial convoca paros esta semana con manifestaciones en múltiples ciudades españolas el miércoles',
    summary: 'Los médicos españoles inician esta semana su cuarta huelga general del año, con manifestaciones el miércoles en varias ciudades, ante el bloqueo de las negociaciones con el Ministerio de Sanidad.',
    content: `<p>La <strong>Organización Médica Colegial (OMC)</strong> y los principales sindicatos médicos han convocado la cuarta huelga general del año para esta semana, después de que las negociaciones con el <strong>Ministerio de Sanidad</strong> hayan concluido sin acuerdo por cuarta vez consecutiva. Los convocantes señalan que el Gobierno no ha cumplido ninguno de los compromisos adquiridos en las rondas anteriores de diálogo.</p>
<h2>Las reivindicaciones</h2>
<p>Las principales demandas del colectivo médico incluyen la implantación de una <strong>carrera profesional homologada</strong> en todas las comunidades autónomas, la reducción de la ratio de pacientes por médico de atención primaria, el fin de las guardias de 24 horas y una actualización salarial acorde con el coste de la vida. Los sindicatos también exigen la reversión de los recortes en formación de residentes aplicados durante la pandemia.</p>
<h2>Manifestaciones del miércoles</h2>
<p>Para el próximo miércoles están convocadas concentraciones y manifestaciones en <strong>Madrid, Barcelona, Sevilla, Valencia, Bilbao y Zaragoza</strong>. La huelga afectará a los servicios de atención primaria, especialidades ambulatorias y urgencias hospitalarias, con los servicios mínimos establecidos por cada comunidad autónoma.</p>`,
    author: 'Redacción España',
    cat: 1, tags: ['médicos', 'huelga', 'sanidad', 'España', 'Ministerio de Sanidad'], featured: false,
  },
  {
    title: 'Triple crimen en un cuartel de la Guardia Civil en Dolores (Alicante): un guardia civil, su mujer y su hijo',
    subtitle: 'Las tres víctimas presentaban heridas de arma de fuego; la hipótesis principal apunta a un crimen de violencia de género seguido de suicidio',
    summary: 'Tres personas halladas muertas con heridas de bala en una vivienda del cuartel de la Guardia Civil de Dolores (Alicante): un agente de 55 años, su mujer de 51 y su hijo de 24. Posible crimen machista.',
    content: `<p>Tres personas han sido halladas muertas en el interior de una <strong>vivienda del cuartel de la Guardia Civil de Dolores</strong>, municipio de la Vega Baja del Segura en la provincia de Alicante. Las víctimas son un <strong>guardia civil de 55 años</strong>, su <strong>mujer de 51</strong> y su <strong>hijo de 24</strong>, todos con <strong>heridas de arma de fuego</strong>.</p>
<p>El cuerpo fue alertado por una llamada al 112 procedente de un vecino del cuartel que escuchó disparos en las primeras horas de la madrugada. Al llegar al domicilio, los agentes encontraron los tres cuerpos sin vida. La vivienda se encontraba cerrada por dentro.</p>
<h2>Hipótesis de violencia de género</h2>
<p>La <strong>hipótesis principal</strong> que baraja la Comandancia de la Guardia Civil y la Fiscalía de Alicante es la de un <strong>crimen de violencia de género seguido de suicidio</strong>: el guardia civil habría disparado contra su mujer y su hijo antes de quitarse la vida. No constaban denuncias previas por violencia doméstica en el historial del matrimonio. La Delegación del Gobierno en la Comunitat Valenciana activó el protocolo de feminicidio y el número de víctimas mortales por violencia de género asciende a 27 en lo que va de año.</p>`,
    author: 'Redacción España',
    cat: 1, tags: ['Guardia Civil', 'violencia de género', 'Alicante', 'Dolores', 'sucesos', 'España'], featured: false,
  },
  {
    title: 'Teresa Rodríguez revela que padece cáncer y recibe quimioterapia tras las burlas en redes sociales',
    subtitle: 'La coportavoz de Adelante Andalucía hizo pública su enfermedad después de que usuarios en redes se mofaran de su apariencia física durante la campaña electoral',
    summary: 'La política Teresa Rodríguez reveló que tiene cáncer y está en tratamiento de quimioterapia, tras las burlas en redes sociales sobre su aspecto físico durante la campaña andaluza.',
    content: `<p><strong>Teresa Rodríguez</strong>, coportavoz de <strong>Adelante Andalucía</strong> y diputada en el Parlamento regional, ha revelado públicamente que padece <strong>cáncer</strong> y que se encuentra actualmente recibiendo <strong>tratamiento de quimioterapia</strong>. La dirigente política tomó esta decisión después de que durante la campaña electoral varios usuarios de redes sociales se burlaran de los cambios en su apariencia física, sin conocer la causa.</p>
<p>En un comunicado publicado en sus redes sociales, Rodríguez explicó que prefería mantener su enfermedad en el ámbito privado, pero que las burlas la llevaron a dar el paso de hacerlo público para cortar la especulación. «<em>Tengo cáncer y estoy en quimio. Era mi decisión cuándo y cómo contarlo. Vosotros me habéis quitado esa opción</em>», escribió.</p>
<h2>Respuesta política y social</h2>
<p>La revelación generó una oleada de apoyo transversal en el espectro político español, con mensajes de solidaridad de dirigentes del PP, PSOE, Podemos y Sumar, así como de ciudadanos que compartieron sus propias experiencias con la enfermedad. La jornada electoral del domingo estuvo marcada en parte por este telón de fondo humano que situó a Rodríguez en el centro de la conversación política.</p>`,
    author: 'Redacción España',
    cat: 1, tags: ['Teresa Rodríguez', 'Adelante Andalucía', 'cáncer', 'política', 'redes sociales'], featured: false,
  },
  {
    title: 'Roban las joyas de la Virgen del Rosario en una parroquia de El Palo (Málaga) durante la misa',
    subtitle: 'Dos personas sustrajeron las piezas donadas por familias del barrio durante décadas; las cámaras grabaron el robo y la hermandad pide su devolución por su valor sentimental',
    summary: 'Dos ladrones robaron joyas de la Virgen del Rosario y el Divino Infante en una parroquia de El Palo (Málaga) durante una misa el 11 de mayo. Las cámaras captaron el robo. La hermandad pide su devolución.',
    content: `<p>El pasado <strong>11 de mayo</strong>, dos personas entraron en la <strong>parroquia de Nuestra Señora de las Angustias</strong> del barrio malagueño de <strong>El Palo</strong> durante el transcurso de una misa y sustrajeron diversas joyas pertenecientes a la imagen de la <strong>Virgen del Rosario</strong> y al <strong>Divino Infante</strong>. Los objetos robados incluyen pendientes, anillos, broches y colgantes que habían sido donados por familias del barrio a lo largo de décadas y que tienen un profundo valor sentimental para la comunidad.</p>
<p>Las cámaras de seguridad del templo grabaron toda la secuencia: los dos individuos entraron mezclados entre los fieles, esperaron el momento de menor atención y sustrajeron las joyas expuestas junto a las imágenes. Posteriormente abandonaron el edificio con normalidad. La Policía Nacional está investigando el caso y solicita la colaboración ciudadana para identificar a los autores.</p>
<h2>El llamamiento de la hermandad</h2>
<p>La hermandad de la Virgen del Rosario emitió un comunicado solicitando la <strong>devolución voluntaria</strong> de las piezas, destacando que su valor económico es modesto pero que su significado para los feligreses del barrio es «<em>incalculable, porque cada pieza lleva detrás una historia familiar y una oración</em>». El obispado de Málaga condenó el robo y se puso a disposición de las fuerzas de seguridad.</p>`,
    author: 'Redacción España',
    cat: 1, tags: ['Málaga', 'robo', 'iglesia', 'El Palo', 'Virgen del Rosario', 'sucesos'], featured: false,
  },
  {
    title: 'Detenida "Anita la Fantástica" tras cuatro años evitando comparecer ante el tribunal por una estafa de 730.000 euros',
    subtitle: 'Ana María Vicente Oset, investigada por vender paquetes de viaje para el MotoGP que nunca se realizaron, acumula cerca de 7 millones de euros en estafas; la Fiscalía pide 9 años',
    summary: 'Ana María Vicente Oset, alias "Anita la Fantástica", fue detenida al no acudir a su cuarto juicio. La Fiscalía pide 9 años por estafar 730.000 € con paquetes de viaje falsos para el MotoGP.',
    content: `<p><strong>Ana María Vicente Oset</strong>, conocida públicamente como <strong>«Anita la Fantástica»</strong>, ha sido detenida en Madrid después de no comparecer por cuarta vez consecutiva ante la <strong>Audiencia Provincial</strong> donde se juzga el caso principal en su contra: la venta de paquetes de viaje para el <strong>MotoGP</strong> que nunca llegaron a realizarse, defraudando a numerosas víctimas por un importe total de <strong>730.000 euros</strong>.</p>
<p>Las víctimas del caso incluyen desde aficionados particulares al motociclismo hasta pequeñas empresas que contrataron paquetes corporativos para sus empleados. Muchos de ellos esperaban viajar a los Grandes Premios de Valencia, Jerez y Le Mans. Los billetes, el alojamiento y las entradas que Anita vendía eran en gran parte ficticios o revendidos de forma fraudulenta.</p>
<h2>Un historial de estafas millonario</h2>
<p>El caso del MotoGP es solo el más reciente en una trayectoria delictiva que los investigadores cifran en aproximadamente <strong>7 millones de euros</strong> acumulados a lo largo de los años mediante distintos esquemas de estafa. La <strong>Fiscalía</strong> solicita en el procedimiento principal <strong>9 años de prisión</strong> y la responsabilidad civil correspondiente a las víctimas. El juez ordenó el ingreso preventivo en prisión ante la reiterada fuga de la acusada.</p>`,
    author: 'Redacción España',
    cat: 1, tags: ['estafa', 'MotoGP', 'Anita la Fantástica', 'Madrid', 'sucesos', 'juicio'], featured: false,
  },
  {
    title: 'Miles de personas marchan en Santiago de Compostela por la supervivencia del gallego en el Día das Letras',
    subtitle: 'La plataforma Queremos Galego convocó la manifestación para denunciar la situación de emergencia lingüística y reclamar la presencia del gallego en todos los ámbitos públicos',
    summary: 'Miles de personas se manifestaron en Santiago de Compostela en el Día das Letras Gallegas para denunciar la emergencia lingüística del gallego y exigir su presencia plena en la vida pública.',
    content: `<p>Miles de personas llenaron las calles de <strong>Santiago de Compostela</strong> el domingo, coincidiendo con el <strong>Día das Letras Galegas</strong>, en una manifestación convocada por la plataforma cívica <strong>Queremos Galego</strong>. La marcha, que recorrió el casco histórico desde la Alameda hasta la Praza do Obradoiro, reunió a ciudadanos, intelectuales, artistas y representantes de colectivos lingüísticos para denunciar la situación de <strong>emergencia lingüística</strong> del gallego.</p>
<p>Los organizadores cifraron la asistencia en más de 50.000 personas; la Delegación del Gobierno contabilizó unas 22.000. Los manifestantes portaban pancartas con lemas como «<em>O galego é vida</em>» y «<em>Sen lingua non hai pobo</em>» y reclamaron la presencia del idioma en la administración, la educación, los medios de comunicación y el sistema judicial.</p>
<h2>La situación del gallego</h2>
<p>Los últimos datos del Instituto Galego de Estatística muestran un descenso continuado en el número de hablantes habituales de gallego entre los menores de 30 años, con un retroceso del 18% en la última década. La Xunta de Galicia y los colectivos lingüísticos mantienen un debate permanente sobre las medidas necesarias para revertir esta tendencia, con posiciones muy distantes sobre el papel de la inmersión lingüística en la educación.</p>`,
    author: 'Redacción España',
    cat: 1, tags: ['gallego', 'lengua', 'Galicia', 'Santiago de Compostela', 'manifestación', 'cultura'], featured: false,
  },
  // ── DEPORTES ─────────────────────────────────────────────────
  {
    title: 'El Racing de Santander asciende a Primera División tras 13 años en el fútbol modesto',
    subtitle: 'El histórico club cántabro regresa a la máxima categoría del fútbol español después de más de una década de travesía por las divisiones inferiores',
    summary: 'El Racing de Santander ha conseguido el ascenso a Primera División, poniendo fin a 13 años fuera de la élite del fútbol español y generando un estallido de euforia en Cantabria.',
    content: `<p>El <strong>Real Racing Club de Santander</strong> ha logrado el ascenso a <strong>Primera División</strong> del fútbol español, poniendo fin a un periodo de trece años fuera de la máxima categoría que incluyó etapas en Segunda División B e incluso en categorías regionales. Las calles de Santander vivieron escenas de euforia masiva tras confirmarse la permanencia matemática en el puesto de ascenso.</p>
<p>El Racing, fundado en 1913 y con una historia rica en la élite del fútbol español —participó en la Copa de la UEFA y fue semifinalista de la Copa del Rey—, había descendido a Segunda División en 2013 y posteriormente sufrió una grave crisis institucional y económica que lo llevó hasta la Tercera División. La reconstrucción del club ha sido un proceso lento pero constante.</p>
<h2>La situación del descenso</h2>
<p>Con una jornada por disputarse en la clasificación de Primera División, los puestos de descenso están ocupados por <strong>Girona, Mallorca y Oviedo</strong>, con diferencias mínimas que hacen que el último partido de la temporada sea decisivo para los tres equipos implicados.</p>`,
    author: 'Redacción Deportes',
    cat: 4, tags: ['Racing de Santander', 'ascenso', 'Primera División', 'fútbol', 'Cantabria'], featured: false,
  },
  {
    title: 'Álex Márquez, operado de clavícula tras un accidente grave en el Gran Premio de Cataluña de MotoGP',
    subtitle: 'El piloto español impactó con la moto de Pedro Acosta, bloqueada por un fallo electrónico, y sufrió fractura de la séptima vértebra y clavícula derecha; su evolución es favorable',
    summary: 'Álex Márquez sufrió un accidente grave en el GP de Cataluña al chocar con la moto bloqueada de Acosta. Fue operado de clavícula y tiene fractura vertebral marginal. Evolución favorable.',
    content: `<p><strong>Álex Márquez</strong> protagonizó uno de los incidentes más graves de la temporada de MotoGP durante el <strong>Gran Premio de Cataluña</strong>, celebrado en el Circuit de Barcelona-Catalunya. El piloto del equipo Gresini Racing impactó a alta velocidad contra la moto de <strong>Pedro Acosta</strong>, que se había quedado bloqueada en la trayectoria por un aparente fallo en el sistema electrónico de control de frenos.</p>
<p>Tras el impacto, Márquez fue trasladado de urgencia al <strong>Hospital General de Cataluña</strong>, donde las pruebas diagnósticas revelaron una <strong>fractura marginal de la séptima vértebra</strong> —catalogada como estable y sin afectación neurológica— y una <strong>fractura de clavícula derecha</strong> que requirió intervención quirúrgica el mismo domingo. La operación se desarrolló sin complicaciones.</p>
<h2>Pronóstico y regreso</h2>
<p>Los médicos responsables informaron de que la <strong>evolución del piloto es favorable</strong> y que, aunque es pronto para establecer un calendario de regreso a la competición, una baja de entre cuatro y seis semanas es el escenario más probable. Pedro Acosta, que no resultó herido, fue investigado por el comisariado de carrera, que concluyó que el fallo fue de origen técnico y no hubo sanción deportiva.</p>`,
    author: 'Redacción Deportes',
    cat: 4, tags: ['Álex Márquez', 'MotoGP', 'GP Cataluña', 'accidente', 'Pedro Acosta'], featured: false,
  },
  {
    title: 'Sinner conquista Roma y logra lo que ningún italiano había conseguido en medio siglo',
    subtitle: 'El número uno del mundo ganó su quinto Masters 1000 consecutivo de la temporada, derrotando a Ruud por 6-4, 6-4, y extiende su racha a 34 victorias seguidas en esta categoría',
    summary: 'Jannik Sinner ganó el Masters 1000 de Roma, algo que no lograba un italiano en 50 años. Venció a Ruud 6-4, 6-4 y acumula 34 victorias consecutivas en Masters 1000 esta temporada.',
    content: `<p><strong>Jannik Sinner</strong> escribió una nueva página en la historia del tenis italiano al conquistar el <strong>Masters 1000 de Roma</strong>, un título que ningún tenista transalpino había logrado en el Foro Itálico desde hace <strong>cincuenta años</strong>. El número uno del mundo derrotó en la final al noruego <strong>Casper Ruud</strong> con un doble <strong>6-4, 6-4</strong> en apenas 87 minutos de un partido de alto nivel en el que el transalpino apenas concedió opciones a su rival.</p>
<h2>La racha histórica</h2>
<p>La victoria en Roma es la quinta consecutiva de Sinner en torneos Masters 1000 esta temporada, lo que le otorga una racha de <strong>34 victorias seguidas</strong> en esta categoría —la máxima por debajo de los Grand Slams—, una cifra que no tiene precedentes en la era Open. El tenista de Alto Adigio ha ganado todos los Masters 1000 disputados en la presente temporada sin ceder ni un set.</p>
<h2>Preparación para Roland Garros</h2>
<p>La victoria llega en el momento más oportuno: Roland Garros se disputa dentro de diez días y Sinner llega a París en el mejor estado de forma de su carrera. Sus probabilidades de lograr el primer título de Roland Garros de su trayectoria —el único Grand Slam que le falta— son las más altas que ha tenido nunca según el consenso de los analistas del circuito.</p>`,
    author: 'Redacción Deportes',
    cat: 4, tags: ['Sinner', 'tenis', 'Roma', 'Masters 1000', 'Roland Garros', 'Ruud'], featured: true,
  },
  {
    title: 'Xabi Alonso ficha oficialmente como nuevo entrenador del Chelsea tras el despido de Roséñor',
    subtitle: 'El técnico vasco pone fin a su etapa en el Bayer Leverkusen y asume su primer gran reto en la Premier League al frente de uno de los clubes más poderosos de Europa',
    summary: 'Xabi Alonso es el nuevo entrenador del Chelsea tras ser destituido Liam Roséñor. El técnico español llega al club londinense desde el Bayer Leverkusen para su primer desafío en la Premier League.',
    content: `<p><strong>Xabi Alonso</strong> es ya oficialmente el nuevo entrenador del <strong>Chelsea Football Club</strong>, confirmando el movimiento más esperado del mercado de entrenadores esta temporada. El técnico de Tolosa (Gipuzkoa) pone fin a su extraordinaria etapa al frente del <strong>Bayer Leverkusen</strong> —con quien ganó la Bundesliga invicto en la temporada 2023-24— para afrontar su primer gran proyecto en la <strong>Premier League</strong>.</p>
<p>La llegada de Alonso se produce tras la destitución de <strong>Liam Roséñor</strong>, con quien el club londinense no consiguió los resultados esperados en la segunda mitad de la temporada. El Chelsea finaliza el campeonato en una posición discreta que no refleja la envergadura de la plantilla ni el presupuesto invertido en los últimos años.</p>
<h2>El proyecto</h2>
<p>La propiedad del Chelsea, liderada por Todd Boehly, ha apostado por un proyecto de largo recorrido con Alonso, con quien firmará un contrato de tres años y plenas garantías de control sobre la planificación deportiva. El técnico vasco ya habría comunicado sus prioridades al director deportivo: construir una identidad de juego definida antes de hacer grandes fichajes.</p>`,
    author: 'Redacción Deportes',
    cat: 4, tags: ['Xabi Alonso', 'Chelsea', 'Premier League', 'entrenador', 'fútbol'], featured: false,
  },
  {
    title: 'Inglaterra logra su octavo Seis Naciones femenino consecutivo y quinto Grand Slam seguido',
    subtitle: 'Las Rosas Rojas dominaron de principio a fin el torneo continental y consolidan una hegemonía sin precedentes en el rugby femenino europeo',
    summary: 'La selección femenina de rugby de Inglaterra conquistó su octavo Seis Naciones consecutivo y su quinto Grand Slam seguido, dominando sin fisuras el torneo europeo.',
    content: `<p>La selección femenina de rugby de <strong>Inglaterra</strong>, conocida como las <em>Red Roses</em>, conquistó el domingo su <strong>octavo Torneo de las Seis Naciones femenino consecutivo</strong> y su <strong>quinto Grand Slam seguido</strong>, una hazaña de dominancia deportiva sin precedentes en el rugby europeo de cualquier género.</p>
<p>Las inglesas completaron el torneo con cinco victorias en cinco partidos, sin perder ni un encuentro ni ceder ningún Grand Slam desde 2020. El equipo dirigido por Simon Middleton ha construido una máquina deportiva que combina una delantera poderosa con una línea de tres cuartos con velocidad y creatividad que ningún rival europeo ha sabido contrarrestar de forma sostenida.</p>
<h2>El rugby femenino en auge</h2>
<p>El dominio inglés no empaña el crecimiento general del rugby femenino en Europa: Francia ha mejorado notablemente su nivel, Irlanda ganó por primera vez a Escocia en condición de visitante y España consiguió su primera victoria sobre Italia en el torneo. La próxima Copa del Mundo Femenina de Rugby, prevista para 2025 en Australia, se antoja el escenario donde el dominio inglés puede encontrar su mayor desafío.</p>`,
    author: 'Redacción Deportes',
    cat: 4, tags: ['rugby', 'Inglaterra', 'Seis Naciones', 'Grand Slam', 'rugby femenino'], featured: false,
  },
  {
    title: 'Griezmann se despide del Atlético de Madrid con una ovación del Metropolitano y rumbo a Estados Unidos',
    subtitle: 'El francés cerró diez temporadas en el club rojiblanco como su máximo goleador histórico; se espera que continúe su carrera en la MLS la próxima temporada',
    summary: 'Antoine Griezmann se despidió emotivamente del Atlético de Madrid ante el Metropolitano lleno, cerrando diez temporadas en el club y dejando el récord de máximo goleador histórico. Jugará en la MLS.',
    content: `<p><strong>Antoine Griezmann</strong> se despidió ayer del <strong>Atlético de Madrid</strong> en una ceremonia emotiva celebrada antes del último partido de la temporada en el <strong>Estadio Metropolitano</strong>, ante más de 68.000 aficionados rojiblancos que despidieron al francés con una ovación cerrada de más de cinco minutos.</p>
<p>Griezmann concluye una etapa en el Atlético que, sumando sus dos etapas, alcanza las <strong>diez temporadas</strong> y le consolida como el <strong>máximo goleador histórico</strong> del club, superando las marcas de históricos como Luis Aragonés y Fernando Torres. Su cuenta oficial incluye 291 goles oficiales con la camiseta rojiblanca.</p>
<h2>El futuro en la MLS</h2>
<p>Todo apunta a que el internacional francés, de 34 años, continuará su carrera en la <strong>Major League Soccer (MLS)</strong> estadounidense la próxima temporada. Varios clubes de la liga norteamericana han mostrado interés, con el <strong>Los Angeles Galaxy</strong> y el <strong>Inter Miami</strong> como principales destinos señalados por la prensa deportiva especializada. Griezmann no confirmó ni desmintió su destino durante el acto de despedida, limitándose a agradecer al club, a los aficionados y a su familia.</p>`,
    author: 'Redacción Deportes',
    cat: 4, tags: ['Griezmann', 'Atlético de Madrid', 'MLS', 'despedida', 'fútbol', 'Metropolitano'], featured: true,
  },
  {
    title: 'Álex Palou logra su segunda pole en las 500 Millas de Indianápolis',
    subtitle: 'El piloto catalán del equipo Ganassi encabeza la parrilla por segundo año consecutivo en la carrera más famosa del automovilismo americano',
    summary: 'Álex Palou logró su segunda pole position en las 500 Millas de Indianápolis, confirmando su dominio en el óvalo de Indianápolis y partirá desde la primera posición en la carrera más icónica del IndyCar.',
    content: `<p><strong>Álex Palou</strong>, el piloto catalán del equipo <strong>Chip Ganassi Racing</strong>, logró este fin de semana su segunda <strong>pole position</strong> en las legendarias <strong>500 Millas de Indianápolis</strong>, la prueba reina del automovilismo americano. Con una vuelta de clasificación a una velocidad media superior a los 370 km/h, Palou encabezará la parrilla de salida del próximo domingo en el Indianapolis Motor Speedway.</p>
<p>La actuación de Palou en la clasificación fue dominante desde el primer intento. El piloto de Palau-solità i Plegamans (Barcelona) completó las cuatro vueltas del <em>Fast Nine Shootout</em> —la fase final de la clasificación que decide las primeras posiciones de la parrilla— con una consistencia sobresaliente que le situó claramente por encima de sus rivales más directos.</p>
<h2>Un candidato claro al título</h2>
<p>Campeón de IndyCar en 2021, 2023 y 2024, Palou llega al <em>Greatest Spectacle in Racing</em> como uno de los grandes favoritos. La primera pole de su carrera en Indianápolis la obtuvo el año pasado, aunque la victoria en carrera se le resistió. Este año el objetivo declarado del equipo Ganassi es convertir la posición privilegiada de salida en el triunfo definitivo.</p>`,
    author: 'Redacción Deportes',
    cat: 4, tags: ['Álex Palou', 'IndyCar', 'Indianápolis', '500 Millas', 'pole position', 'motor'], featured: false,
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
       VALUES (?,?,?,?,?,?,?,?,?, '2026-05-18 10:00:00')`,
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
