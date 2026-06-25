const SPANISH_BOOKS =
  '(?:Gén(?:esis)?|Éxod(?:o)?|Levític(?:o)?|Núm(?:eros)?|Deut(?:eronomio)?|Jos(?:ué)?|Juec(?:es)?|Rut|1\\s*(?:Sam(?:uel)?|Rey(?:es)?|Crón(?:icas)?|Cor(?:intios)?|Tes(?:alonicenses)?|Tim(?:oteo)?|Ped(?:ro)?|Juan?)|2\\s*(?:Sam(?:uel)?|Rey(?:es)?|Crón(?:icas)?|Cor(?:intios)?|Tes(?:alonicenses)?|Tim(?:oteo)?|Ped(?:ro)?|Juan?)|3\\s*Juan?|Esdras|Neh(?:emías)?|Ester|Job|Sal(?:mos)?|Prov(?:erbios)?|Ecl(?:esiastés)?|Cant(?:ares)?|Isa(?:ías)?|Jer(?:emías)?|Lam(?:entaciones)?|Ez(?:equiel)?|Dan(?:iel)?|Oseas|Joel|Amós|Abd(?:ías)?|Jon(?:ás)?|Miq(?:ueas)?|Nah(?:um)?|Hab(?:acuc)?|Sof(?:onías)?|Hag(?:geo)?|Zac(?:arías)?|Mal(?:aquías)?|Mt(?:eo)?|Mc(?:os)?|Lc(?:as)?|Jn(?:es)?|Hch(?:os)?|Rom(?:anos)?|Gál(?:atas)?|Ef(?:esios)?|Fil(?:ipenses)?|Col(?:osenses)?|Tit(?:o)?|Filem(?:ón)?|Heb(?:reos)?|Sant(?:iago)?|Jud(?:as)?|Ap(?:ocalipsis)?)';

const CV = '\\d{1,3}\\s*(?::\\s*\\d{1,3}[a-z]?)?(?:\\s*[–\\-;]\\s*\\d{1,3}(?::\\s*\\d{1,3})?[a-z]?)*';

const SHORT_VERSE = '(?:v{1,2}\\.\\s*\\d{1,2}[a-z]?(?:\\s*[–\\-]\\s*\\d{1,2}[a-z]?)?)';

const REF_PATTERN = new RegExp(
  `(?<=^|[\\s,.;:(\"'\\[\\(\\u201C\\u2018])(?:${SPANISH_BOOKS}\\s+${CV}|${SHORT_VERSE})(?=[\\s,.;:)\"'\\]\\)\\u201D\\u2019]|$)`,
  'gi'
);

export function highlightBibleRefs(html: string): string {
  return html.replace(REF_PATTERN, (match) => {
    if (match.length < 3) return match;
    return `<span class="verse-citation">${match}</span>`;
  });
}
