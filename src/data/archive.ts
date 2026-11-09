import type { ImageMetadata } from 'astro';
import { cv } from './cv';

/*
  Архив: все проекты из папки content/ у Катерины плюс места работы из CV — по годам.
  Год и дата — из about.md («Проект создан», Катерина их поправила).
  slug — если у проекта есть страница-кейс; иначе ссылка ведёт на страницу проекта на pro.hsedesign.com.
  Превью — первая картинка проекта (src/assets/archive/<номер папки>.jpg), её можно заменить файлом с тем же именем.
*/

type L = { ru: string; en: string };

export interface ArchiveItem {
  kind: 'project' | 'work';
  title: L;
  type: L;
  date: string; // ГГГГ-ММ-ДД, для порядка внутри года
  slug?: string;
  href?: string;
  period?: string | L;
  thumb?: ImageMetadata;
}

const thumbs = import.meta.glob<{ default: ImageMetadata }>('../assets/archive/*.jpg', { eager: true });
const thumb = (n: string) => thumbs[`../assets/archive/${n}.jpg`]?.default;
const hse = (id: string) => `https://pro.hsedesign.com/project/${id}`;

// [номер папки, название ru, en, тип ru, en, дата, адрес на HSE, slug кейса]
const raw: [string, string, string, string, string, string, string, string?][] = [
  ['01', 'Лук сквозь века', 'The Bow Through the Ages', 'визуальное исследование', 'visual research', '2024-04-01', '001e1872a75b447ab02295480af32568'],
  ['02', 'Пикник Афиши: открытки Школы дизайна', 'Afisha Picnic: School of Design postcards', 'иллюстрация', 'illustration', '2026-10-11', 'piknik-afishi-otkrytki-shd-88e2d3e76015479fbcf9a7287c1e08f0'],
  ['03', 'жеода', 'geoda', 'леттеринг', 'lettering', '2025-03-26', 'jellyfish-5c35af8d74124ddf98d92fca3602e0d9'],
  ['04', 'Тизер ролика-эксплейнера «Масло как культурный феномен»', 'Explainer teaser “Butter as a Cultural Phenomenon”', 'моушн-дизайн', 'motion design', '2025-10-13', 'tizer-eksplejnera-85e9d6c825e6406f9ce7c1a7ba9c8739'],
  ['05', 'В. Ю. Пелевин', 'V. Pelevin', 'моушн-дизайн', 'motion design', '2024-12-28', 'd9b2201bf79e4da1a7755ba002fe5bcd'],
  ['06', 'Data Culture Handbook: маскот и иллюстрации', 'Data Culture Handbook: mascot and illustrations', 'иллюстрация', 'illustration', '2026-10-16', 'data-culture-handbook-maskot-i-illyustrac-645ed2b1c76842b382b599713e0ea4f6'],
  ['07', 'Производственная практика', 'Industrial placement', 'айдентика, принты', 'identity, prints', '2026-10-16', 'praktika-d9823c413344453d83cfd04baec40f5e'],
  ['08', 'Ключевые образы в клипах Хаски', 'Key images in Husky’s music videos', 'визуальное исследование', 'visual research', '2024-08-07', 'klyuchevye-obrazy-v-muzykalnykh-klipakh-i-c104178d8b3f42b5921d28d851dff5bd'],
  ['09', 'qayaq saqalɯ: suruk', 'qayaq saqalɯ: suruk', 'шрифт', 'typeface', '2026-05-24', 'qayaq-saqal-suruk-c6d96279fcf8434b95ea251912c94542'],
  ['10', 'qayaq', 'qayaq', 'айдентика', 'identity', '2026-05-24', 'qayaq-f4a0e20753464f6e848fa1e4ec11d328'],
  ['11', 'Votive Objects', 'Votive Objects', 'предметный дизайн', 'object design', '2025-12-29', 'votive-objects-db8e80298b344fe2b9ef45d5f415ebbd'],
  ['12', 'emolla', 'emolla', 'айдентика', 'identity', '2023-10-26', 'cb9211edc6f44fb1b5a46444be0a8fa7'],
  ['13', 'Аура повседневного', 'The Aura of the Everyday', 'визуальное исследование', 'visual research', '2025-12-12', 'aura-povsednevnogo-e3db2e4fc8ce4ef28aa4084e4a271ccc'],
  ['14', 'Андрей Тарковский [1932–1986]', 'Andrei Tarkovsky [1932–1986]', 'дизайн книги', 'book design', '2023-12-01', 'andrej-tarkovskij-1932-1986-b7382d8118584831b383145362591327', 'tarkovsky'],
  ['15', 'Peter Greenaway: H.S, A.P, P.G.S.', 'Peter Greenaway: H.S, A.P, P.G.S.', 'моушн-дизайн', 'motion design', '2025-06-26', 'peter-greenaway-h-s-a-p-p-g-s-78daf68c0f834fabb7be881118ce15d2'],
  ['16', 'Noire Dentelle', 'Noire Dentelle', 'шрифт', 'typeface', '2025-06-22', 'noire-dentelle-cbfdc93a8d004a9594e1038d2c31f8ee'],
  ['17', 'Магия Египта. Амулеты', 'Egyptian Magic. Amulets', 'дизайн книги', 'book design', '2023-10-30', 'c7c5ad0962ce4ffabbde6359d7c85734'],
  ['18', 'it talks', 'it talks', 'инсталляция', 'installation', '2025-03-30', 'cbe12d7a08d946c5a09a3425330fdb96'],
  ['19', 'Дочь самурая', 'Daughter of a Samurai', 'клип', 'music video', '2025-03-28', 'doch-samuraya-224ba7cbd1f84d68931014facd41efc0'],
  ['20', 'HSE MULTIMEDIA: За гранью реальности', 'HSE MULTIMEDIA: Beyond Reality', 'видеоэссе', 'video essay', '2025-03-28', '1d02596274044f80a94c013d21b17910'],
  ['21', '320 корюшек', '320 Smelts', 'паблик-арт', 'public art', '2023-06-30', '981d5c11123247bb8273b79cfb11045a'],
  ['22', 'Yorgos Lanthimos: THE LOBSTER', 'Yorgos Lanthimos: THE LOBSTER', 'моушн-дизайн', 'motion design', '2025-02-12', 'e8691a2a0a0b49dbbd61f866b60ba29f'],
  ['23', 'CG LAB: «Plushes» и «Вилли и Ника»', 'CG LAB: “Plushes” and “Willy and Nika”', 'CGI', 'CGI', '2024-12-24', 'cg-lab-plushes-i-villi-i-nika-4062be4bb11645ac87a9f14cd214ec4f'],
  ['24', 'Архив памяти', 'Memory Archive', 'анимация', 'animation', '2024-10-30', '34ee872ca0764dc594155d429651d13b'],
  ['25', 'Fluffies: дизайн окружения', 'Fluffies: environment design', 'CGI', 'CGI', '2024-10-27', '9e290aba6da0456ab582e46fa8f03cb2'],
  ['26', 'Капибары и дюгони: НИУ ВШЭ × галерея «Ходынка»', 'Capybaras and Dugongs: HSE × Khodynka Gallery', 'иллюстрация', 'illustration', '2024-06-26', '2d49ea0059dc41ffad8c21d4d7936b74'],
  ['27', '.mс', '.mс', 'цифровой продукт', 'digital product', '2024-06-25', 'ms-c36682b90cbc46f3a152ce66d362e28b'],
  ['28', 'Догхантер: как защитить питомца', 'Doghunter: how to protect your pet', 'веб-дизайн', 'web design', '2024-03-31', '137deab15a274c6d812f8cc192f81848'],
  ['29', 'emolla', 'emolla', 'упаковка', 'packaging', '2023-12-25', '5c41b7b104b149b390c6d2a0225ad1b2'],
];

const projects: ArchiveItem[] = raw.map(([n, ru, en, typeRu, typeEn, date, id, slug]) => ({
  kind: 'project',
  title: { ru, en },
  type: { ru: typeRu, en: typeEn },
  date,
  slug,
  href: hse(id),
  thumb: thumb(n),
}));

// работа — из CV, стоит в году начала
const work: ArchiveItem[] = cv.experience.map((e) => {
  const period = typeof e.years === 'string' ? e.years : e.years.ru;
  return {
    kind: 'work',
    title: { ru: e.company, en: e.companyEn ?? e.company },
    type: e.role,
    date: `${period.slice(0, 4)}-01-01`,
    period: e.years,
  };
});

export const archive = [...projects, ...work].sort((a, b) => b.date.localeCompare(a.date));

/** Группы по годам, от новых к старым */
export function archiveByYear() {
  const years = new Map<string, ArchiveItem[]>();
  for (const item of archive) {
    const y = item.date.slice(0, 4);
    years.set(y, [...(years.get(y) ?? []), item]);
  }
  return [...years.entries()];
}

export const ARCHIVE_PROJECTS = projects.length;
