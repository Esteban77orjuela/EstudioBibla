import type { Source } from '../types';

export const SOURCES: Record<string, Source> = {
  // --- Efesios sources ---
  "stott-message-eph": {
    id: "stott-message-eph",
    author: "John Stott",
    title: "El Mensaje de Efesios",
    subtitle: "La Biblia Habla Hoy",
    publisher: "Editorial Certeza",
    year: 1994,
    type: "commentary"
  },
  "bruce-nicnt-eph": {
    id: "bruce-nicnt-eph",
    author: "F.F. Bruce",
    title: "The Epistles to the Colossians, to Philemon, and to the Ephesians",
    publisher: "Eerdmans (NICNT)",
    year: 1984,
    type: "commentary"
  },
  "hodge-eph": {
    id: "hodge-eph",
    author: "Charles Hodge",
    title: "Comentario a la Epístola a los Efesios",
    year: 1856,
    type: "commentary"
  },
  "spurgeon-sermons": {
    id: "spurgeon-sermons",
    author: "Charles Spurgeon",
    title: "Sermones",
    type: "lecture"
  },
  "luther-commentaries": {
    id: "luther-commentaries",
    author: "Martín Lutero",
    title: "Comentarios",
    type: "commentary"
  },
  "calvin-institutes": {
    id: "calvin-institutes",
    author: "Juan Calvino",
    title: "Institutas de la Religión Cristiana",
    year: 1559,
    type: "book"
  },
  "crisostomo-homilias": {
    id: "crisostomo-homilias",
    author: "Juan Crisóstomo",
    title: "Homilías sobre Efesios",
    type: "lecture"
  },

  // --- Mateo 1:1-17 sources ---
  "guzik-enduring-es": {
    id: "guzik-enduring-es",
    author: "David Guzik",
    title: "Comentario Bíblico de Mateo 1",
    publisher: "Enduring Word Media",
    url: "https://es.enduringword.com/comentario-biblico/mateo-1/",
    type: "commentary"
  },
  "guzik-enduring-en": {
    id: "guzik-enduring-en",
    author: "David Guzik",
    title: "Matthew 1 Commentary",
    publisher: "Enduring Word",
    url: "https://enduringword.com/bible-commentary/matthew-1/",
    type: "commentary"
  },
  "biblehub-commentaries": {
    id: "biblehub-commentaries",
    author: "Alfred Plummer, Charles J. Ellicott, et al.",
    title: "Matthew 1 Commentaries",
    publisher: "Bible Hub",
    url: "https://biblehub.com/commentaries/matthew/1-1.htm",
    type: "commentary"
  },
  "working-preacher": {
    id: "working-preacher",
    author: "Working Preacher",
    title: "Commentary on Matthew 1:1-17",
    publisher: "Luther Seminary",
    url: "https://www.workingpreacher.org/commentaries/narrative-lectionary/genealogy-of-jesus/commentary-on-matthew-11-17-2",
    type: "article"
  },
  "blacketer-cep": {
    id: "blacketer-cep",
    author: "Randy Blacketer",
    title: "Matthew 1:1-17 Commentary",
    publisher: "Center for Excellence in Preaching",
    url: "https://cepreaching.org/commentary/randy-blacketer/matthew-1-1-17/",
    type: "article"
  },
  "mutholath-bible-interp": {
    id: "mutholath-bible-interp",
    author: "Fr. Abraham Mutholath",
    title: "Matthew 01:01-17: The Genealogy of Jesus Christ",
    publisher: "Bible Interpretation",
    url: "https://bibleinterpretation.org/matthew-1_1-17/",
    type: "article"
  },
  "gerber-jacob": {
    id: "gerber-jacob",
    author: "Jacob Gerber",
    title: "Matthew 1:1-17: Jesus Christ, Son of David, and Son of Abraham",
    url: "https://jacobgerber.org/matthew-1-1-17-jesus-christ-son-of-david-and-son-of-abraham/",
    type: "article"
  },
  "refuge-church": {
    id: "refuge-church",
    author: "Refuge Church",
    title: "A Genealogical Christology (Matthew 1:1-17)",
    url: "https://www.refugeutah.org/matthew-1-1-17",
    type: "article"
  },
  "pensamiento-biblico": {
    id: "pensamiento-biblico",
    author: "Pensamiento Bíblico",
    title: "Mateo 1: Contexto y Exégesis",
    url: "https://pensamientobiblico.com/medita-ora-vive/mateo-1-2/",
    type: "article"
  },
  "pensamiento-biblico-14": {
    id: "pensamiento-biblico-14",
    author: "Pensamiento Bíblico",
    title: "Mateo 1:17 — La Importancia Teológica de las 14 Generaciones",
    url: "https://pensamientobiblico.com/blog/mateo-111-la-soberania-de-dios-en-la-genealogia-de-cristo-resolviendo-el-dilema-de-jeconias-2-2/",
    type: "article"
  },
  "bibleref": {
    id: "bibleref",
    author: "BibleRef",
    title: "¿Qué significa Mateo 1?",
    url: "https://www.bibleref.com/espanol/Mateo/1/Mateo-1-17.html",
    type: "article"
  },
  "logos-sermons": {
    id: "logos-sermons",
    author: "Logos Sermons",
    title: "Mateo 1:1-17",
    publisher: "Logos Bible Software",
    url: "https://sermons.logos.com/sermons/1225912-mateo-1:1-17",
    type: "article"
  },
  "enter-the-bible": {
    id: "enter-the-bible",
    author: "Enter the Bible",
    title: "Matthew 1:1-17 – The Genealogy of Jesus the Messiah",
    publisher: "Luther Seminary",
    url: "https://enterthebible.org/passage/matthew-11-17-the-genealogy-of-jesus-the-messiah/",
    type: "article"
  },
  "mowczko-women": {
    id: "mowczko-women",
    author: "Marg Mowczko",
    title: "The Women in Matthew's Genealogy of Jesus",
    url: "https://margmowczko.com/women-matthew-genealogy-jesus-tamar-rahab-ruth-bathsheba/",
    type: "article"
  },
  "crisostomo-hom-mt": {
    id: "crisostomo-hom-mt",
    author: "Juan Crisóstomo",
    title: "Homilías sobre el Evangelio de San Mateo",
    subtitle: "Homilías I, II, IV",
    url: "https://www.newadvent.org/fathers/200101.htm",
    type: "lecture"
  },
  "jerome-commentary": {
    id: "jerome-commentary",
    author: "Jerónimo",
    title: "Commentary on Matthew",
    subtitle: "The Fathers of the Church, Volume 117",
    url: "https://www.jstor.org/stable/j.ctt28531j",
    type: "commentary"
  },
  "schaff-nicene": {
    id: "schaff-nicene",
    author: "Philip Schaff (ed.)",
    title: "Nicene and Post-Nicene Fathers",
    subtitle: "Vol. 10: St. Chrysostom, Homilies on Matthew",
    publisher: "Christian Literature Publishing Co.",
    year: 1888,
    url: "https://orthodoxchurchfathers.com/fathers/npnf110/npnf1106.html",
    type: "book"
  },
  "france-nicnt": {
    id: "france-nicnt",
    author: "R.T. France",
    title: "The Gospel of Matthew",
    publisher: "Eerdmans (NICNT)",
    year: 2007,
    type: "commentary"
  },
  "carson-expositor": {
    id: "carson-expositor",
    author: "D.A. Carson",
    title: "Matthew",
    subtitle: "Expositor's Bible Commentary",
    publisher: "Zondervan",
    year: 1984,
    type: "commentary"
  },
  "wright-for-everyone": {
    id: "wright-for-everyone",
    author: "N.T. Wright",
    title: "Matthew for Everyone",
    publisher: "Westminster John Knox",
    year: 2004,
    type: "commentary"
  },
  "hagner-wbc": {
    id: "hagner-wbc",
    author: "Donald A. Hagner",
    title: "Matthew 1-13",
    subtitle: "Word Biblical Commentary",
    publisher: "Word",
    year: 1993,
    type: "commentary"
  },
  "keener-erdmans": {
    id: "keener-erdmans",
    author: "Craig S. Keener",
    title: "A Commentary on the Gospel of Matthew",
    publisher: "Eerdmans",
    year: 1999,
    type: "commentary"
  },
  "guzik-blueletter": {
    id: "guzik-blueletter",
    author: "David Guzik",
    title: "Mateo 1 – La Genealogía y Nacimiento de Jesucristo",
    publisher: "Blue Letter Bible",
    url: "https://www.blueletterbible.org/Comm/guzik_david/spanish/StudyGuide_Mat/Mat_1.cfm",
    type: "commentary"
  },
  "biblehub-1-17": {
    id: "biblehub-1-17",
    author: "Alfred Plummer, Charles J. Ellicott, et al.",
    title: "Matthew 1:17 Commentaries",
    publisher: "Bible Hub",
    url: "https://biblehub.com/commentaries/matthew/1-17.htm",
    type: "commentary"
  },
  "diocesis-vitoria": {
    id: "diocesis-vitoria",
    author: "Diócesis de Vitoria",
    title: "Mateo 1,1-17 — Estudio Exegético",
    url: "https://diocesisvitoria.org/wp-content/uploads/2013/11/MATEO-1-1_17.pdf",
    type: "article"
  },
  "iowa-women": {
    id: "iowa-women",
    author: "University of Iowa — Bible & Archaeology",
    title: "Why Are There Four Women Listed in Matthew's Genealogy of Jesus?",
    url: "https://bam.sites.uiowa.edu/faq/why-are-there-four-women-listed-matthews-genealogy-jesus",
    type: "article"
  },
  "sisters-mercy": {
    id: "sisters-mercy",
    author: "Sisters of Mercy",
    title: "Matthew's Genealogy: Inclusion of Women",
    url: "https://www.sistersofmercy.org/matthews-genealogy-inclusion-of-women/",
    type: "article"
  },
  "providence-thesis": {
    id: "providence-thesis",
    author: "Providence College — DigitalCommons",
    title: "Theological Graduate Thesis on Matthew's Genealogy",
    url: "https://digitalcommons.providence.edu/cgi/viewcontent.cgi?article=1027&context=theology_graduate_theses",
    type: "article"
  },
  "heritage-church": {
    id: "heritage-church",
    author: "The Heritage Church",
    title: "The Five Women in the Lineage of Jesus — Tamar",
    url: "https://theheritagechurch.org/wp-content/uploads/2020/11/English-Tamar_-The-Seeker-of-Justice-Matthew-1_1-17-Genesis-38_1-30.pdf",
    type: "article"
  },
  "bibleorg-women": {
    id: "bibleorg-women",
    author: "Bible.org Blogs",
    title: "The Women in Jesus's Genealogy: If Not Scandalous, What?",
    url: "https://blogs.bible.org/the-women-in-jesuss-genealogy-if-not-scandalous-what-part-2/",
    type: "article"
  }
};
