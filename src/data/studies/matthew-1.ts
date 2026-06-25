import type { FullStudy } from '../../types';

const REF_URLS: Record<number, string> = {
  1: "https://es.enduringword.com/comentario-biblico/mateo-1/",
  2: "https://www.bibleref.com/Matthew/1/Matthew-chapter-1.html",
  3: "https://enduringword.com/bible-commentary/matthew-1/",
  4: "https://www.workingpreacher.org/commentaries/narrative-lectionary/genealogy-of-jesus/commentary-on-matthew-11-17-2",
  5: "https://www.blueletterbible.org/Comm/mhc/Mat/Mat_001.cfm",
  6: "https://cepreaching.org/commentary/randy-blacketer/matthew-11-17/",
  7: "https://www.preceptaustin.org/matthew-1-commentary",
  8: "https://biblehub.com/commentaries/matthew/1-1.htm",
  9: "https://www.preceptaustin.org/matthew-1-commentary",
  10: "https://es.enduringword.com/comentario-biblico/mateo-1/",
  11: "https://enduringword.com/bible-commentary/matthew-1/",
  12: "https://enduringword.com/bible-commentary/matthew-1/",
  13: "https://www.newadvent.org/fathers/200101.htm",
  14: "https://margmowczko.com/women-matthew-genealogy-jesus-tamar-rahab-ruth-bathsheba/",
  15: "https://theheritagechurch.org/wp-content/uploads/2020/11/English-Tamar_-The-Seeker-of-Justice-Matthew-1_1-17-Genesis-38_1-30.pdf",
  16: "https://bam.sites.uiowa.edu/faq/why-are-there-four-women-listed-matthews-genealogy-jesus",
  17: "https://www.sistersofmercy.org/matthews-genealogy-inclusion-of-women/",
  18: "https://www.sistersofmercy.org/matthews-genealogy-inclusion-of-women/",
  19: "https://www.newadvent.org/fathers/200104.htm",
  20: "https://www.blueletterbible.org/Comm/mhc/Mat/Mat_001.cfm",
  21: "https://es.enduringword.com/comentario-biblico/mateo-1/",
  22: "https://enduringword.com/bible-commentary/matthew-1/",
  23: "https://enduringword.com/bible-commentary/matthew-1/",
  24: "https://www.bibleref.com/Matthew/1/Matthew-chapter-1.html",
  25: "https://www.blueletterbible.org/Comm/mhc/Mat/Mat_001.cfm",
  26: "https://oldbeliever.substack.com/p/st-john-chrysostom-4th-homily-on",
  27: "https://orthodoxchurchfathers.com/fathers/npnf110/npnf1106.html",
  28: "https://es.enduringword.com/comentario-biblico/mateo-1/",
  29: "https://www.bibleref.com/Matthew/1/Matthew-chapter-1.html",
  30: "https://www.workingpreacher.org/commentaries/narrative-lectionary/genealogy-of-jesus/commentary-on-matthew-11-17-2",
  31: "https://www.wycliffe.org/blog/posts/unlikely-heroes-the-women-of-matthew-1",
  32: "https://www.workingpreacher.org/commentaries/narrative-lectionary/genealogy-of-jesus/commentary-on-matthew-11-17-2",
  33: "https://cepreaching.org/commentary/randy-blacketer/matthew-11-17/",
  34: "https://es.enduringword.com/comentario-biblico/mateo-1/",
  35: "https://www.newadvent.org/fathers/200104.htm",
  36: "https://thehistoricfaith.com/en/john-chrysostom/john-chrysostom/homilies-on-matthew",
  37: "https://www.blueletterbible.org/Comm/mhc/Mat/Mat_001.cfm",
  38: "https://www.preceptaustin.org/matthew-1-commentary",
  39: "https://margmowczko.com/women-matthew-genealogy-jesus-tamar-rahab-ruth-bathsheba/",
  40: "https://www.workingpreacher.org/commentaries/narrative-lectionary/genealogy-of-jesus/commentary-on-matthew-11-17-2",
  41: "https://www.sistersofmercy.org/matthews-genealogy-inclusion-of-women/",
  42: "https://www.sistersofmercy.org/matthews-genealogy-inclusion-of-women/",
  43: "https://enduringword.com/bible-commentary/matthew-1/",
};

const R = (n: number) => `<a class="ref-link" href="${REF_URLS[n]}" target="_blank" rel="noopener noreferrer">[${n}]</a>`;

export const MATTHEW_1_STUDY: FullStudy = {
  id: "mt-1",
  book: "Mateo",
  chapter: 1,
  theologicalTitle: "El Libro del Origen: Cuando Dios Tejió la Historia",
  subtitle: "La Genealogía de Jesucristo como Declaración Teológica, Pacto Cumplido y Gracia Radical",
  coverImage: "https://images.unsplash.com/photo-1603398971492-44aa4132ddbf?q=80&w=2070&auto=format&fit=crop",
  estimatedReadingTime: 45,

  contextualIntro: `<p class="mb-4"><b>A. Contexto Histórico</b></p>
<p class="mb-4">Si alguna vez tomaste tu Biblia y abriste el Nuevo Testamento, lo primero que encontraste no fue un milagro espectacular, ni un sermón en el monte, ni una tumba vacía. <b>Encontraste nombres</b>. Nombres extraños, impronunciables para muchos. Y quizás te preguntaste: ¿Por qué comienza así el Evangelio? La respuesta, como veremos, es <b>profundamente teológica</b>.</p>
<p class="mb-4">${R(1)}Como un cobrador de impuestos que había sido antes, Mateo (también llamado Leví) estaba calificado para escribir un relato de la vida y las enseñanzas de Jesús. Un cobrador de impuestos de aquel día debía saber griego y ser un hombre alfabetizado y bien organizado.${R(1)} ${R(2)}Mateo tiene firmemente en mente a sus hermanos y hermanas judíos mientras escribe, demostrando cómo <b>Jesús es el cumplimiento de muchas profecías</b> acerca del Mesías prometido. Con ese fin, Mateo comienza mostrando que Jesús es tanto <b>hijo de Abraham</b> —un verdadero hebreo— como el heredero legal y legítimo al <b>trono del gran rey David</b> de Israel. Eso importaba porque todo judío fiel habría conocido la promesa de Dios a David de que sus descendientes se sentarían en el trono de Israel para siempre (2 Samuel 7:12–13).${R(2)}</p>
<p class="mb-4"><b>B. Contexto Literario dentro del Libro</b></p>
<p class="mb-4">${R(3)}Las primeras dos palabras de Mateo, <i>biblos geneseos</i>, pueden traducirse como "récord de la genealogía", "récord de los orígenes", o "récord de la historia" (Carson). En cierto sentido, cada significado es válido: en Mateo 1:1–17 tenemos el "récord de la genealogía"; en Mateo 1:18–2:23 tenemos el "récord de los orígenes"; en el Evangelio entero de Mateo tenemos el <b>"récord de la historia"</b>.${R(3)}</p>
<p class="mb-4"><b>C. Situación Espiritual del Momento y Cumplimiento Histórico</b></p>
<p class="mb-4">${R(4)}El uso de la palabra "génesis" para esta genealogía al comienzo del relato señala a su audiencia que <b>una nueva historia de la creación</b>, una renovación de la creación de Dios como Dios había prometido, está en marcha en Jesús el Cristo. Si bien el protestantismo occidental ha tendido a enfocar su teología en la salvación de los individuos, el Nuevo Testamento, incluido Mateo, declara que <b>Dios ha actuado en Jesús para renovar toda la creación</b>.${R(4)} ${R(5)}La genealogía es como una herencia dada en evidencia, para probar un título y establecer un reclamo; el propósito es demostrar que nuestro Señor Jesucristo es el <b>hijo de David y el hijo de Abraham</b>, y por tanto de aquella nación y familia de quien el Mesías debía surgir. Abraham y David fueron, en su día, los <b>grandes custodios de la promesa</b> relativa al Mesías. La promesa de la bendición fue hecha a Abraham y a su simiente; la del dominio, a David y a su simiente.${R(5)}</p>`,

  historicalContext: "",
  literaryContext: "",

  redemptiveLine: "",

  verses: [
    {
      verseNumber: 1,
      text: `<p class="mb-4"><i class="verse-citation">"Libro de la genealogía de Jesucristo, hijo de David, hijo de Abraham."</i> — Mateo 1:1</p>
<p class="mb-4"><b>Palabras Clave en Griego</b></p>
<p class="mb-4">${R(6)}La palabra traducida "genealogía" en la mayoría de las versiones es en realidad <b>"génesis"</b>. Quizás Mateo está comenzando su historia diciendo: "Este es el génesis de Jesucristo", el origen del Mesías. O quizás, más intrigante aún, es la sugerencia de algunos académicos recientes: "Este es el Libro del Génesis de Jesucristo", un nuevo comienzo. El texto griego reza: <b>Βίβλος γενέσεως</b>.${R(6)} ${R(7)}No existe ningún otro documento del antiguo Cercano Oriente que use la expresión <i>biblos geneseos</i> (libro o registro de la generación) como título. Mientras que el sustantivo <i>génesis</i> (nacimiento) aparece de nuevo en el versículo 18, allí introduce la narrativa del nacimiento de Jesús. En la Septuaginta, la misma frase <i>biblos geneseos</i> aparece en Génesis 2:4 y Génesis 5:1, donde en cada caso le sigue una narrativa, igual que aquí.${R(7)}</p>
<p class="mb-4"><b>Contexto Cultural: "Hijo de David, Hijo de Abraham"</b></p>
<p class="mb-4">${R(8)}La expresión <b>"Hijo de David"</b> era la más popular de todos los nombres del Cristo esperado, reconocida por igual por escribas y rabinos (Mt 22:42), por niños (Mt 21:9), y por los pobres (Mt 15:22; Mt 20:30).${R(8)} ${R(9)}Mateo está estableciendo que, ante todo, <b>Jesucristo es descendiente directo de David</b> y por tanto está calificado para ser el rey eterno. En Mateo 22:41, Jesús hizo a sus enemigos una pregunta: "¿Qué pensáis del Cristo? ¿De quién es hijo?" Y ellos respondieron: "De David". Vemos esta promesa de un reino eterno en 2 Samuel 7:16: "Tu casa y tu reino se afirmarán para siempre ante mí; tu trono será estable eternamente."${R(9)}</p>
<p class="mb-4"><b>Referencias Cruzadas</b></p>
<p class="mb-4">• Génesis 12:1–3 — Promesa a Abraham<br>• 2 Samuel 7:12–16 — El pacto davídico<br>• Isaías 11:1 — El vástago de la raíz de Isaí<br>• Lucas 3:23–38 — La genealogía paralela descendente, hasta Adán</p>`,
      citations: []
    },
    {
      verseNumber: 2,
      text: `<p class="mb-4"><b>Sección 1: De Abraham a David</b></p>
<p class="mb-4"><i class="verse-citation">"Abraham engendró a Isaac, Isaac a Jacob, y Jacob a Judá y a sus hermanos. Judá engendró de Tamar a Fares y a Zara, Fares a Esrom, y Esrom a Aram. Aram engendró a Aminadab, Aminadab a Naasón, y Naasón a Salmón. Salmón engendró de Rahab a Booz, Booz engendró de Rut a Obed, y Obed a Isaí. Isaí engendró al rey David…"</i> — Mateo 1:2–6a</p>
<p class="mb-4"><b>El Verbo Fundamental: <i>Egennēsen</i></b></p>
<p class="mb-4">El verbo clave es <b>ἐγέννησεν</b> (egennēsen) = "engendró". Se repite como un latido constante a lo largo de toda la genealogía. Cada "engendró" es un eslabón más en la <b>cadena inquebrantable de la promesa divina</b> de Dios.</p>
<p class="mb-4"><b>Las Mujeres en la Genealogía: Tamar, Rahab, Rut y Betsabé</b></p>
<p class="mb-4">Aquí comienza algo extraordinario. En una cultura donde las genealogías eran exclusivamente masculinas, Mateo inserta mujeres. Y no las más "respetables" a los ojos humanos, sino <b>precisamente aquellas que el mundo habría descartado</b>:</p>
<p class="mb-4">${R(10)}Esta genealogía es notable por la presencia inusual de cuatro mujeres. Era poco común que las mujeres se mencionaran en las genealogías antiguas, y las cuatro mencionadas aquí son dignas de mención especial como <b>ejemplos de la gracia de Dios</b>. Ellas muestran cómo Dios puede tomar personas improbables y usarlas de gran manera.${R(10)} ${R(11)}<b>Tamar</b> se vendió de prostituta a su suegro Judá para dar a luz a Fares y a Zara (Génesis 38). <b>Rahab</b> era una prostituta gentil, para quien Dios tomó medidas extraordinarias para salvarla de juicio y de su vida de prostitución (Josué 2; 6:22-23). <b>Rut</b> era de Moab, gentil y fuera del pacto de Israel hasta su conversión (Rut 1). Y "la que fue mujer de Urías", <b>Betsabé</b> (mencionada implícitamente en Mateo 1:6), fue infame por su pecado con David (2 Samuel 11).${R(11)} ${R(12)}Como señala Carson: "La peculiar manera de Mateo de referirse a ella, 'la esposa de Urías', puede ser un intento de enfocarse en el hecho de que <b>Urías no era israelita sino heteo</b>."${R(12)}</p>
<p class="mb-4">El testimonio de los Padres de la Iglesia sobre estas mujeres:</p>
<p class="mb-4">${R(13)}Juan Crisóstomo observa que el evangelista hace mención de la esposa de Urías, y de Tamar, y de Rahab, y de Rut: una era de raza extranjera, otra era ramera, otra fue corrompida por su pariente cercano. Y sin embargo el evangelista pasó por alto a todas las demás, e incluyó en la genealogía solo a estas. Si las mujeres habían de ser mencionadas, todas deberían haberlo sido; y si no todas sino algunas, entonces aquellas famosas por su virtud, <b>no por sus malas obras</b>.${R(13)}</p>
<p class="mb-4">La perspectiva de R.T. France:</p>
<p class="mb-4">${R(14)}R.T. France señala que "en cada caso hay al menos sospechas de alguna forma de irregularidad matrimonial, aunque todas cuatro fueron en realidad <b>vindicadas por la bendición posterior de Dios</b>. Forman un precedente impresionante para el nacimiento de Jesús de una madre no casada de origen humilde."${R(14)}</p>
<p class="mb-4">El testimonio de Rahab según la Escritura:</p>
<p class="mb-4">${R(15)}Rahab mintió a las autoridades sobre la ubicación de los espías, pero el escritor de Hebreos la llamó <b>"una mujer de fe en el Dios de Israel"</b>.${R(15)}</p>
<p class="mb-4">El testimonio de Rut:</p>
<p class="mb-4">${R(16)}Mateo 1:5 menciona a una valiente mujer moabita, quien en Rut 1:16 decide tenazmente acompañar a su suegra de regreso a Israel después de que ambas enviudaron. Para asegurar su futuro, Rut toma las cosas en sus manos y "se acuesta a los pies" de un pariente redentor, un rico familiar mayor llamado Booz, a quien finalmente convence de casarse con ella.${R(16)}</p>
<p class="mb-4">La universalidad del Evangelio en estas mujeres:</p>
<p class="mb-4">${R(17)}Una cosa notable sobre cuatro de estas mujeres es que <b>no eran judías</b>: María fue la única judía entre estas mujeres destacadas. Tamar y Rahab eran de la comunidad cananea, Rut era moabita, y Betsabé era probablemente hetea. Eran, en su mayoría, gentiles. ¿Quería Mateo que sus lectores supieran que <b>Jesús vino a salvar a todos los pueblos, no solo a los judíos</b>?${R(17)} ${R(18)}Es asombroso reflexionar cómo Dios usó las situaciones difíciles y dolorosas de estas cinco mujeres para resaltar la genealogía de Jesús.${R(18)}</p>`,
      citations: []
    },
    {
      verseNumber: 6,
      text: `<p class="mb-4"><b>Sección 2: De David al Exilio Babilónico</b></p>
<p class="mb-4"><i class="verse-citation">"…y el rey David engendró a Salomón de la que fue mujer de Urías. Salomón engendró a Roboam, Roboam a Abías, Abías a Asa… Josías engendró a Jeconías y a sus hermanos, en el tiempo de la deportación a Babilonia."</i> — Mateo 1:6b–11</p>
<p class="mb-4"><b>El Exilio y la Sombra del Juicio</b></p>
<p class="mb-4">Esta sección es sombría. Reyes que apostatan, naciones divididas, templo destruido. Y aun así, <b>Dios no suelta el hilo de su promesa</b>.</p>
<p class="mb-4">${R(19)}Crisóstomo señala que Mateo ha dividido todas las generaciones en tres porciones, para indicar que <b>ni siquiera cuando su forma de gobierno fue cambiada se hicieron mejores</b>, sino que por igual bajo aristocracia, bajo un rey, y bajo una oligarquía, estuvieron en los mismos caminos malvados.${R(19)}</p>
<p class="mb-4"><b>Los Reyes Omitidos</b></p>
<p class="mb-4">${R(20)}En el linaje de los reyes de Judá, entre Joram y Ozías (v. 8), <b>hay tres reyes que son omitidos</b>: Ocozías, Joás y Amasías. No fue por error o descuido, sino probablemente porque estaban omitidos en las tablas genealógicas que consultó el evangelista, y porque siendo el propósito de Mateo reducir, por motivo de memoria, el número de los antepasados de Cristo a tres grupos de catorce, era necesario omitir tres; y ninguno más apropiado que los que eran progenie inmediata de la <b>maldita Atalía</b>, quien introdujo la idolatría de Acab en la casa de David.${R(20)}</p>`,
      citations: []
    },
    {
      verseNumber: 12,
      text: `<p class="mb-4"><b>Sección 3: Del Exilio al Mesías</b></p>
<p class="mb-4"><i class="verse-citation">"Después de la deportación a Babilonia, Jeconías engendró a Salatiel, y Salatiel a Zorobabel… Y Jacob engendró a José, marido de María, de la cual nació Jesús, llamado el Cristo."</i> — Mateo 1:12–16</p>
<p class="mb-4"><b>El Quiebre Gramatical Crucial del Versículo 16</b></p>
<p class="mb-4">Aquí ocurre algo gramaticalmente extraordinario. Durante 15 versículos, el patrón ha sido monotonamente consistente: "X engendró a Y". Pero en el versículo 16, <b>el patrón rompe de forma dramática</b>. No dice "José engendró a Jesús". Dice: <b>"de la cual nació Jesús"</b>.</p>
<p class="mb-4">En griego: <b>ἐξ ἧς ἐγεννήθη Ἰησοῦς</b> (ex hēs egennēthē Iēsous) — la voz pasiva apunta teológicamente a un <b>agente divino</b>. Este es el llamado <b>pasivo divino</b> o <i>passivum divinum</i>, una construcción que los autores bíblicos usaban para referirse a la acción de Dios sin nombrarlo explícitamente.</p>
<p class="mb-4"><b>El Dilema de la Maldición de Jeconías</b></p>
<p class="mb-4">${R(21)}El autor está convencido de que Mateo relata el registro genealógico de José y Lucas el registro de María; pero algunos no aceptan esto sin discutirlo primero. Como señala Carson: "Pocos adivinarían simplemente al leer Lucas que está dando la genealogía de María. La teoría viene no del texto de Lucas, sino de la <b>necesidad de armonizar las dos genealogías</b>. A primera vista, tanto Mateo como Lucas pretenden dar la genealogía de José".${R(21)} ${R(22)}Mateo registra el <b>linaje legal de José</b> a través de Salomón (que incluía el linaje maldito de Joacim/Jeconías), mientras que Lucas registra el <b>linaje de sangre de María</b> a través de Natán — resolviendo el dilema de cómo Jesús podía ser heredero legal del trono de David sin caer bajo la maldición de Jeremías.${R(22)}</p>`,
      citations: []
    },
    {
      verseNumber: 17,
      text: `<p class="mb-4"><b>La Síntesis Estructural</b></p>
<p class="mb-4"><i class="verse-citation">"De manera que todas las generaciones desde Abraham hasta David son catorce; desde David hasta la deportación a Babilonia, catorce; y desde la deportación a Babilonia hasta Cristo, catorce."</i> — Mateo 1:17</p>
<p class="mb-4"><b>El Significado del Número 14</b></p>
<p class="mb-4">${R(23)}La genealogía de Mateo está deliberadamente editada en <b>tres grupos de catorce generaciones</b> por razones de memorización, no de completitud histórica — una práctica común en las genealogías judías antiguas que no debería perturbarnos.${R(23)} ${R(24)}Mateo agrupa a los mencionados en tres grupos de 14 ancestros: de Abraham al rey David; de David a Josías y la deportación de Israel a Babilonia; y de Jeconías a Jesús.${R(24)} ${R(25)}El resumen general de toda esta genealogía lo tenemos en el versículo 17, donde se resume en tres grupos de catorce, señalados por periodos notables. En los primeros catorce, vemos a la familia de David <b>ascendiendo, despuntando como la mañana</b>; en los segundos, la vemos <b>floreciendo en su mayor esplendor</b>; en los terceros, la vemos declinando y haciéndose cada vez más pequeña, reduciéndose a la familia de un pobre carpintero, y entonces Cristo resplandece de ella como la gloria de su pueblo Israel.${R(25)}</p>
<p class="mb-4">La interpretación de Crisóstomo sobre el número:</p>
<p class="mb-4">${R(26)}Crisóstomo sugiere que Mateo incluye el periodo de la cautividad como una "generación" y <b>cuenta al propio Jesucristo</b>, uniéndolo con nosotros en cada paso. La mención de la cautividad es significativa, mostrando que incluso durante su exilio, los judíos no se hicieron más sabios. Esto subraya la <b>necesidad de la venida de Cristo</b>.${R(26)}</p>`,
      citations: []
    }
  ],

  originalMeaning: `<p class="mb-4">¿Qué quiso comunicar Mateo a su audiencia original?</p>
<p class="mb-4">${R(27)}Como Mateo escribía a los hebreos, buscó mostrar nada más que <b>Él era de Abraham y de David</b>.${R(27)} ${R(28)}Sin embargo, significativamente, el Evangelio de Mateo también termina triunfalmente con Jesús mandando a sus seguidores a <b>hacer discípulos de las naciones</b> (Mateo 28:19-20). Así el evangelio de Mateo está profundamente arraigado en el judaísmo, pero a la vez es capaz de ver más allá; ve al evangelio mismo como algo más que un mensaje para el pueblo judío; más que eso, <b>es un mensaje para todo el mundo</b>.${R(28)}</p>
<p class="mb-4">¿Cuál era el problema real?</p>
<p class="mb-4">El problema era de <b>legitimidad mesiánica</b>. Jesús de Nazaret vino de Galilea, una región despreciada. Nació en una familia de artesanos. No tenía ejército. No derrocó a Roma.</p>
<p class="mb-4">${R(29)}Mateo menciona algunos nombres inesperados en su genealogía. Esto incluye cinco mujeres, varias personas famosas por su inmoralidad, y más de un rey infiel. El libro de Mateo nunca esconde los pecados del pasado de Israel, optando por enfatizar en cambio que <b>Jesús vino a salvar a Israel del pecado</b>.${R(29)}</p>
<p class="mb-4">¿Cuál era la intención teológica?</p>
<p class="mb-4">${R(30)}Un público del siglo I familiarizado con las tradiciones judías habría esperado "hijo de David", ya que entendían que <b>el Mesías vendría a través del linaje del rey David</b>. Mateo afirma a Jesús como Mesías en un contexto donde no había separación entre iglesia y estado: <b>la religión y la política estaban entrelazadas</b>.${R(30)}</p>`,

  hermeneuticalApplication: [
    { title: "Tu historia rota también está en el árbol genealógico de la gracia", text: `<p class="mb-4">${R(31)}A Tamar se le dio el honor de ser la primera mujer incluida en la genealogía de Jesús. El dolor, la pérdida y el pecado a los que fue sometida serían finalmente <b>redimidos por el Mesías</b> en su árbol genealógico.${R(31)}</p><p class="mb-4"><b>Dios no te excluye de su historia redentora por tu pasado. Lo que el mundo descarta, Dios lo restaura</b> y lo convierte en genealogía de gloria.</p>` },
    { title: "La soberanía de Dios opera a través de la historia humana ordinaria", text: `<p class="mb-4">${R(32)}Si bien el protestantismo occidental ha tendido a enfocar su teología en la salvación de los individuos, el Nuevo Testamento, incluido Mateo, declara que <b>Dios ha actuado en Jesús para renovar toda la creación</b>. La atención a la salvación individual no está mal; pero el Nuevo Testamento nos llama a no detenernos allí. <b>Toda la creación está comprendida en la salvación y renovación de Dios</b>.${R(32)}</p>` },
    { title: "Jesús es el Mesías de todas las naciones, no solo de Israel", text: `<p class="mb-4">${R(33)}El hecho de que se mencionen mujeres en una genealogía de ese tiempo y en una cultura patriarcal es excepcional. <b>Jesús no es solo el Salvador de los hombres; es también quien sana la enemistad primordial entre hombres y mujeres</b>, y trabaja para restaurar la mutua dignidad, igualdad y complementariedad. Además, las cuatro mujeres son (argumentablemente) no judías, gentiles.${R(33)}</p>` },
    { title: "La Biblia se interpreta a sí misma (analogia fidei)", text: `<p class="mb-4">La genealogía de Mateo solo cobra sentido cuando leemos Génesis 12, 2 Samuel 7, Jeremías 22, Rut, Josué 2. <b>El Nuevo Testamento es el Antiguo Testamento revelado; el Antiguo Testamento es el Nuevo Testamento velado</b>. ${R(34)}Los judíos mantuvieron extensos registros genealógicos, por lo que no es imprudente confiar en dichos registros. Y debemos recordar las advertencias de Pablo de <b>no prestar atención a las genealogías y no discutir sobre ellas en exceso</b> (1 Timoteo 1:4; Tito 3:9).${R(34)}</p>` }
  ],

  historyOfInterpretation: {
    fathers: [
      { author: "Juan Crisóstomo (c. 347–407)", text: `<p class="mb-4">${R(35)}Crisóstomo dividió las generaciones en tres porciones para indicar que <b>ni siquiera cuando su forma de gobierno cambió se hicieron mejores</b>, sino que por igual bajo aristocracia, bajo un rey, y bajo una oligarquía, estuvieron en los mismos caminos malvados.${R(35)} ${R(36)}El Padre de la Iglesia concluye: "¿Ven cuánto cuidado se nos requiere desde el comienzo? Y sin embargo, el comienzo parece más claro que el resto. Para muchos quizás incluso parece innecesario, puesto que <b>es solo una lista de nombres</b>."${R(36)}</p>` }
    ],
    reformers: [
      { author: "Mateo Henry", text: `<p class="mb-4">${R(37)}La genealogía es como una herencia dada en evidencia, para probar un título y establecer un reclamo; el propósito es demostrar que nuestro Señor Jesucristo es <b>el hijo de David y el hijo de Abraham</b>, y por tanto de aquella nación y familia de quien el Mesías debía surgir.${R(37)}</p>` }
    ],
    contemporary: [
      { author: "D.A. Carson (Expositor's Bible Commentary)", text: `<p class="mb-4">${R(38)}Carson señala que "las primeras dos palabras de Mateo, <i>biblos geneseos</i>, pueden traducirse como <b>'récord de la genealogía', 'récord de los orígenes', o 'récord de la historia'</b>."${R(38)}</p>` },
      { author: "R.T. France (The Gospel of Matthew, NICNT, Eerdmans)", text: `<p class="mb-4">${R(39)}France apunta que "en cada caso había al menos sospechas de alguna forma de irregularidad matrimonial, aunque todas cuatro fueron en realidad <b>vindicadas por la bendición posterior de Dios</b>. Forman un precedente impresionante para el nacimiento de Jesús de una madre no casada de origen humilde."${R(39)}</p>` },
      { author: "Working Preacher / Luther Seminary", text: `<p class="mb-4">${R(40)}El texto griego reza literalmente: "El libro de la génesis de Jesús el Cristo". Nuestros antepasados judíos entendían desde los profetas que Dios había prometido <b>renovar toda la creación en la Era Mesiánica</b>, la Era Mesiánica, o (como Jesús prefería) el Reino de Dios.${R(40)}</p>` }
    ]
  },

  pastoralReflection: `<p class="mb-4"><b>"El árbol genealógico más hermoso del universo"</b></p>
<p class="mb-4">Si alguna vez te has sentido demasiado manchado para ser usado por Dios... si alguna vez creíste que tu historia familiar te descalificaba... si alguna vez pensaste que la gracia era para personas con genealogías más limpias... entonces <b>Mateo 1:1–17 fue escrito para ti</b>.</p>
<p class="mb-4">${R(41)}Rut, en un acto de riesgo y fe, dejó Moab con su suegra. Para salvar a Noemí y a sí misma de la pobreza, se casó con un israelita quien, en el plan de Dios, reconoció su virtud.${R(41)} ${R(42)}María tuvo el valor de consentir el extraordinario plan de Dios de quedar embarazada de su hijo Jesús. Esta joven mujer judía confió en Dios, y todos somos eternamente agradecidos.${R(42)}</p>
<p class="mb-4">Dios no construyó la genealogía de su Hijo con ángeles. La construyó con Tamar, Rahab, Rut, Betsabé. Con exiliados y olvidados. <b>El Hijo de Dios no vino a un árbol genealógico perfecto. Vino al nuestro.</b></p>
<p class="mb-4">${R(43)}Estas cuatro mujeres tienen un lugar importante en la genealogía de Jesús para demostrar que Jesucristo <b>no era realeza según la percepción humana</b>, en el sentido de que no vino de un puro linaje aristocrático.${R(43)}</p>
<p class="mb-4">Pero todo ese arco de 42 nombres apuntaba a ese quiebre gramatical del versículo 16: "de la cual nació Jesús, llamado el Cristo." El patrón se rompe porque <b>Dios mismo entra</b>. La cadena de "X engendró a Y" termina porque el último eslabón no fue engendrado por un hombre, sino concebido por el Espíritu Santo.</p>
<p class="mb-4">Y en esa ruptura gramatical está el Evangelio entero: <b>Dios irrumpió en la historia humana para reescribir la tuya.</b></p>
<p class="mb-4">________________________________________</p>
<p class="mb-4"><i class="verse-citation">"Porque no me avergüenzo del evangelio, porque es poder de Dios para salvación a todo aquel que cree; al judío primeramente, y también al griego."</i> — Romanos 1:16</p>`,

  bibliography: [
    "¹ Guzik, David. Enduring Word Bible Commentary Mateo 1 (Español) — https://es.enduringword.com/comentario-biblico/mateo-1/",
    "² BibleRef.com — What does Matthew chapter 1 mean? — https://www.bibleref.com/Matthew/1/Matthew-chapter-1.html",
    "³ Guzik, David. Matthew 1 Commentary (Inglés), citando a D.A. Carson — https://enduringword.com/bible-commentary/matthew-1/",
    "⁴ Working Preacher / Luther Seminary — Commentary on Matthew 1:1-17 — https://www.workingpreacher.org/commentaries/narrative-lectionary/genealogy-of-jesus/commentary-on-matthew-11-17-2",
    "⁵ Henry, Matthew. Commentary on Matthew 1 — Blue Letter Bible — https://www.blueletterbible.org/Comm/mhc/Mat/Mat_001.cfm",
    "⁶ Blacketer, Randy. Matthew 1:1-17 Commentary — Center for Excellence in Preaching — https://cepreaching.org/commentary/randy-blacketer/matthew-11-17/",
    "⁷ Precept Austin — Matthew 1 Commentary — https://www.preceptaustin.org/matthew-1-commentary",
    "⁸ Bible Hub — Matthew 1:1 Commentaries — https://biblehub.com/commentaries/matthew/1-1.htm",
    "⁹ Precept Austin — Matthew 1 Commentary (2 Samuel 7:16) — https://www.preceptaustin.org/matthew-1-commentary",
    "¹⁰ Guzik, David. Enduring Word (Español) — Las cuatro mujeres — https://es.enduringword.com/comentario-biblico/mateo-1/",
    "¹¹ Guzik, David. Matthew 1 (Inglés) — Tamar, Rahab, Rut, Betsabé — https://enduringword.com/bible-commentary/matthew-1/",
    "¹² Guzik, David. Matthew 1 (Inglés) citando a Carson sobre 'esposa de Urías' — https://enduringword.com/bible-commentary/matthew-1/",
    "¹³ Crisóstomo, Juan. Homilía I sobre Mateo — New Advent — https://www.newadvent.org/fathers/200101.htm",
    "¹⁴ Mowczko, Marg. The Women in Matthew's Genealogy, citando a R.T. France — https://margmowczko.com/women-matthew-genealogy-jesus-tamar-rahab-ruth-bathsheba/",
    "¹⁵ The Heritage Church — Tamar: The Seeker of Justice — https://theheritagechurch.org/wp-content/uploads/2020/11/English-Tamar_-The-Seeker-of-Justice-Matthew-1_1-17-Genesis-38_1-30.pdf",
    "¹⁶ University of Iowa — Bible & Archaeology — Why Are There Four Women Listed? — https://bam.sites.uiowa.edu/faq/why-are-there-four-women-listed-matthews-genealogy-jesus",
    "¹⁷ Sisters of Mercy — Matthew's Genealogy: Inclusion of Women — https://www.sistersofmercy.org/matthews-genealogy-inclusion-of-women/",
    "¹⁸ Sisters of Mercy — Matthew's Genealogy: Inclusion of Women — https://www.sistersofmercy.org/matthews-genealogy-inclusion-of-women/",
    "¹⁹ Crisóstomo, Juan. Homilía IV sobre Mateo — New Advent — https://www.newadvent.org/fathers/200104.htm",
    "²⁰ Henry, Matthew. Commentary on Matthew 1 — Blue Letter Bible (reyes omitidos) — https://www.blueletterbible.org/Comm/mhc/Mat/Mat_001.cfm",
    "²¹ Guzik, David. Enduring Word (Español) citando a Carson — https://es.enduringword.com/comentario-biblico/mateo-1/",
    "²² Guzik, David. Matthew 1 (Inglés) — Linaje de José y maldición de Jeconías — https://enduringword.com/bible-commentary/matthew-1/",
    "²³ Guzik, David. Matthew 1 (Inglés) — Versículo 17 — https://enduringword.com/bible-commentary/matthew-1/",
    "²⁴ BibleRef.com — What does Matthew chapter 1 mean? — https://www.bibleref.com/Matthew/1/Matthew-chapter-1.html",
    "²⁵ Henry, Matthew. Commentary on Matthew 1 — Blue Letter Bible (tres grupos) — https://www.blueletterbible.org/Comm/mhc/Mat/Mat_001.cfm",
    "²⁶ Crisóstomo, Juan. Homilía IV sobre Mateo (traducción moderna) — https://oldbeliever.substack.com/p/st-john-chrysostom-4th-homily-on",
    "²⁷ Crisóstomo, Juan. Homilía I sobre Mateo — Orthodox Church Fathers (NPNF) — https://orthodoxchurchfathers.com/fathers/npnf110/npnf1106.html",
    "²⁸ Guzik, David. Enduring Word (Español) — Alcance universal de Mateo — https://es.enduringword.com/comentario-biblico/mateo-1/",
    "²⁹ BibleRef.com — What does Matthew chapter 1 mean? — https://www.bibleref.com/Matthew/1/Matthew-chapter-1.html",
    "³⁰ Working Preacher / Luther Seminary — Commentary on Matthew 1:1-17 — https://www.workingpreacher.org/commentaries/narrative-lectionary/genealogy-of-jesus/commentary-on-matthew-11-17-2",
    "³¹ Wycliffe Bible Translators — Unlikely Heroes: The Women of Matthew 1 — https://www.wycliffe.org/blog/posts/unlikely-heroes-the-women-of-matthew-1",
    "³² Working Preacher / Luther Seminary — Commentary on Matthew 1:1-17 — https://www.workingpreacher.org/commentaries/narrative-lectionary/genealogy-of-jesus/commentary-on-matthew-11-17-2",
    "³³ Blacketer, Randy. Matthew 1:1-17 — Center for Excellence in Preaching — https://cepreaching.org/commentary/randy-blacketer/matthew-11-17/",
    "³⁴ Guzik, David. Enduring Word (Español) — Registros genealógicos judíos — https://es.enduringword.com/comentario-biblico/mateo-1/",
    "³⁵ Crisóstomo, Juan. Homilía IV sobre Mateo — New Advent — https://www.newadvent.org/fathers/200104.htm",
    "³⁶ Crisóstomo, Juan. Homilías sobre Mateo — The Historic Faith — https://thehistoricfaith.com/en/john-chrysostom/john-chrysostom/homilies-on-matthew",
    "³⁷ Henry, Matthew. Commentary on Matthew 1 — Blue Letter Bible — https://www.blueletterbible.org/Comm/mhc/Mat/Mat_001.cfm",
    "³⁸ Precept Austin — Matthew 1 Commentary, citando a D.A. Carson — https://www.preceptaustin.org/matthew-1-commentary",
    "³⁹ Mowczko, Marg. The Women in Matthew's Genealogy, citando a R.T. France (NICNT) — https://margmowczko.com/women-matthew-genealogy-jesus-tamar-rahab-ruth-bathsheba/",
    "⁴⁰ Working Preacher / Luther Seminary — Commentary on Matthew 1:1-17 — https://www.workingpreacher.org/commentaries/narrative-lectionary/genealogy-of-jesus/commentary-on-matthew-11-17-2",
    "⁴¹ Sisters of Mercy — Matthew's Genealogy: Inclusion of Women — https://www.sistersofmercy.org/matthews-genealogy-inclusion-of-women/",
    "⁴² Sisters of Mercy — Matthew's Genealogy: Inclusion of Women — https://www.sistersofmercy.org/matthews-genealogy-inclusion-of-women/",
    "⁴³ Guzik, David. Matthew 1 (Inglés) — Linaje no aristocrático de Jesús — https://enduringword.com/bible-commentary/matthew-1/",
    "",
    "📌 OBRAS ACADÉMICAS DE REFERENCIA ADICIONAL (Para profundización — no disponibles en línea gratuita):",
    "• France, R.T. The Gospel of Matthew. NICNT. Grand Rapids: Eerdmans, 2007.",
    "• Carson, D.A. Matthew. Expositor's Bible Commentary. Grand Rapids: Zondervan, 1984.",
    "• Hagner, Donald A. Matthew 1–13. Word Biblical Commentary. Dallas: Word, 1993.",
    "• Keener, Craig S. A Commentary on the Gospel of Matthew. Grand Rapids: Eerdmans, 1999.",
    "• Schaff, Philip (ed.). Nicene and Post-Nicene Fathers, Vol. 10: Chrysostom, Homilies on Matthew. — https://ccel.org/ccel/schaff/npnf110"
  ],

  citations: []
};
