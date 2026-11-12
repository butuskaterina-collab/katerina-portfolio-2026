import type { ImageMetadata } from 'astro';
import tarkovsky from '../assets/covers/14.jpg';
import noire from '../assets/covers/16.jpg';
import votive from '../assets/covers/11.png';
import pelevin from '../assets/covers/05.png';
import husky from '../assets/covers/08.jpg';
import geoda from '../assets/covers/03.jpg';
import look from '../assets/covers/01.jpg';
import mc from '../assets/covers/27.jpg';
import qayaq from '../assets/covers/10.jpg';
import aura from '../assets/covers/13.jpg';

// Черновой список избранного для главной. Порядок и состав утверждает Катерина.
// Позже переедет в коллекцию проектов (src/content/projects).
export interface SelectedProject {
  slug: string;
  title: { ru: string; en: string };
  type: { ru: string; en: string };
  year: number;
  cover: ImageMetadata;
}

export const selected: SelectedProject[] = [
  { slug: 'tarkovsky', title: { ru: 'Андрей Тарковский [1932–1986]', en: 'Andrei Tarkovsky [1932–1986]' }, type: { ru: 'дизайн книги', en: 'book design' }, year: 2023, cover: tarkovsky },
  { slug: 'qayaq', title: { ru: 'qayaq', en: 'qayaq' }, type: { ru: 'айдентика', en: 'identity' }, year: 2026, cover: qayaq },
  { slug: 'aura', title: { ru: 'Аура повседневного', en: 'The Aura of the Everyday' }, type: { ru: 'визуальное исследование', en: 'visual research' }, year: 2025, cover: aura },
  { slug: 'husky', title: { ru: 'Ключевые образы в клипах Хаски', en: 'Key images in Husky’s music videos' }, type: { ru: 'визуальное исследование', en: 'visual research' }, year: 2024, cover: husky },
  { slug: 'noire-dentelle', title: { ru: 'Noire Dentelle', en: 'Noire Dentelle' }, type: { ru: 'шрифт', en: 'typeface' }, year: 2025, cover: noire },
  { slug: 'votive-objects', title: { ru: 'Votive Objects', en: 'Votive Objects' }, type: { ru: 'предметный дизайн', en: 'object design' }, year: 2025, cover: votive },
  { slug: 'pelevin', title: { ru: 'В. Ю. Пелевин', en: 'V. Pelevin' }, type: { ru: 'моушн-дизайн', en: 'motion design' }, year: 2024, cover: pelevin },
  { slug: 'geoda', title: { ru: 'жеода', en: 'geoda' }, type: { ru: 'леттеринг', en: 'lettering' }, year: 2025, cover: geoda },
  { slug: 'mc', title: { ru: '.mс', en: '.mс' }, type: { ru: 'цифровой продукт', en: 'digital product' }, year: 2024, cover: mc },
  { slug: 'look', title: { ru: 'Лук сквозь века', en: 'The Bow Through the Ages' }, type: { ru: 'визуальное исследование', en: 'visual research' }, year: 2024, cover: look },
];
