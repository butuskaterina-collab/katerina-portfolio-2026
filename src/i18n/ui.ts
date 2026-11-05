export type Lang = 'ru' | 'en';

export const ui = {
  ru: {
    'meta.title': 'Катерина Бутусова — коммуникационный дизайнер',
    'meta.description':
      'Портфолио Катерины Бутусовой: айдентика, моушн, визуальные исследования, цифровые медиа и арт-дирекшн.',
    'nav.projects': 'Проекты',
    'nav.archive': 'Архив',
    'nav.texts': 'Тексты',
    'nav.about': 'Обо мне',
    'nav.cv': 'CV',
    'name.first': 'Катерина',
    'name.last': 'Бутусова',
    'hero.role': 'коммуникационный дизайнер',
    'hero.lead.before': 'Работаю на пересечении графического дизайна, ',
    'hero.lead.accent': 'визуальных исследований',
    'hero.lead.after': ', айдентики, моушена и цифровых медиа.',
    'hero.note': 'Портфолио, личный архив и рабочий стол.',
    'hero.school': 'Школа дизайна НИУ ВШЭ — Санкт-Петербург',
    'city.yakutsk': 'Якутск',
    'city.spb': 'Санкт-Петербург',
    'index.title': 'Избранное',
    'index.all': 'Все проекты в архиве',
    'footer.contact': 'Связаться',
    'projects.title': 'Проекты',
    'projects.lead': 'Дизайн книг, шрифты, айдентика, моушн и цифровые продукты. Визуальные исследования — в «Текстах».',
    'projects.soon': 'скоро',
    'project.back': 'Все проекты',
    'project.type': 'Тип',
    'project.year': 'Год',
    'project.tags': 'Теги',
    'project.links': 'Ссылки',
    'project.about': 'О проекте',
    'project.play': 'Смотреть видео',
    'project.next': 'Следующий проект',
  },
  en: {
    'meta.title': 'Katerina Butusova — communication designer',
    'meta.description':
      'Portfolio of Katerina Butusova: identity, motion, visual research, digital media and art direction.',
    'nav.projects': 'Projects',
    'nav.archive': 'Archive',
    'nav.texts': 'Texts',
    'nav.about': 'About',
    'nav.cv': 'CV',
    'name.first': 'Katerina',
    'name.last': 'Butusova',
    'hero.role': 'communication designer',
    'hero.lead.before': 'Working at the intersection of graphic design, ',
    'hero.lead.accent': 'visual research',
    'hero.lead.after': ', identity, motion and digital media.',
    'hero.note': 'A portfolio, a personal archive and a desk.',
    'hero.school': 'HSE School of Design — Saint Petersburg',
    'city.yakutsk': 'Yakutsk',
    'city.spb': 'Saint Petersburg',
    'index.title': 'Selected',
    'index.all': 'All projects in the archive',
    'footer.contact': 'Contact',
    'projects.title': 'Projects',
    'projects.lead': 'Book design, typefaces, identity, motion and digital products. Visual research lives in “Texts”.',
    'projects.soon': 'soon',
    'project.back': 'All projects',
    'project.type': 'Type',
    'project.year': 'Year',
    'project.tags': 'Tags',
    'project.links': 'Links',
    'project.about': 'About the project',
    'project.play': 'Play video',
    'project.next': 'Next project',
  },
} as const;

export type UIKey = keyof (typeof ui)['ru'];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key];
}

/** Путь с учётом языка: русский без префикса, английский — с /en */
export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'ru' ? clean : `/en${clean === '/' ? '/' : clean}`;
}
