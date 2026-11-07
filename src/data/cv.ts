/*
  CV Катерины. Источник — её PDF «Бутусова_CV.pdf» (тексты почти без правок).
  Каждый навык, инструмент и пункт опыта помечен направлениями (roles),
  под которые он подходит. Переключатель на странице подсвечивает нужное,
  а PDF выбранной версии печатает только подходящие пункты.
*/

export type Role = 'graphic' | 'brand' | 'motion' | 'art' | 'digital';
export const ROLES: Role[] = ['graphic', 'brand', 'motion', 'art', 'digital'];
const ALL = ROLES;

type L = { ru: string; en: string };
export interface Tagged {
  text: L;
  roles: Role[];
}

export const roleNames: Record<Role | 'all', L> = {
  all: { ru: 'Все направления', en: 'All' },
  graphic: { ru: 'Графический дизайн', en: 'Graphic design' },
  brand: { ru: 'Бренд и айдентика', en: 'Brand & identity' },
  motion: { ru: 'Моушн', en: 'Motion' },
  art: { ru: 'Арт-дирекшн и продакшн', en: 'Art direction & production' },
  digital: { ru: 'Digital и презентации', en: 'Digital & presentations' },
};

export const cv = {
  name: { ru: 'Катерина Бутусова', en: 'Katerina Butusova' },
  title: { ru: 'Коммуникационный дизайнер', en: 'Communication designer' },
  subtitle: { ru: 'Art Direction & Creative Production', en: 'Art Direction & Creative Production' },
  location: { ru: 'Санкт-Петербург', en: 'Saint Petersburg' },
  worldwide: { ru: 'Работаю worldwide, рассматриваю релокацию', en: 'Working worldwide, open to relocation' },

  // Telegram — основной канал, он первый
  contacts: [
    { label: { ru: 'Telegram', en: 'Telegram' }, value: '@kzaraza', href: 'https://t.me/kzaraza' },
    { label: { ru: 'E-mail', en: 'E-mail' }, value: 'butusovakaterinav@yandex.ru', href: 'mailto:butusovakaterinav@yandex.ru' },
    { label: { ru: 'Behance', en: 'Behance' }, value: 'worldstoriesb', href: 'https://www.behance.net/worldstoriesb' },
    { label: { ru: 'Dprofile', en: 'Dprofile' }, value: 'katerina.zaraza', href: 'https://dprofile.ru/katerina.zaraza' },
  ] as { label: L; value: string; href: string }[],

  about: {
    ru: 'Коммуникационный дизайнер с опытом в визуальном исследовании, брендинге, графическом и digital-дизайне. Разрабатываю визуальные концепции и системы — от исследования и идеи до реализации на разных носителях. Работаю с брендами, fashion-, культурными и образовательными проектами: визуальные системы, графика, презентации, digital-контент. Использую AI-workflows для исследования, поиска идей и разработки визуальных решений. Есть опыт координации творческих процессов, съёмок и внешних исполнителей.',
    en: 'Communication designer working across visual research, branding, graphic and digital design. I develop visual concepts and systems — from research and idea to production across different media. I work with brands and with fashion, cultural and educational projects: visual systems, graphics, presentations, digital content. I use AI workflows for research, ideation and visual development. I also coordinate creative processes, shoots and external contractors.',
  },

  // фокус для каждой версии — одна строка под заголовком
  focus: {
    all: { ru: '', en: '' },
    graphic: { ru: 'Графический и редакционный дизайн, типографика, печать.', en: 'Graphic and editorial design, typography, print.' },
    brand: { ru: 'Айдентика, визуальные системы, бренд-гайды, упаковка.', en: 'Identity, visual systems, brand guides, packaging.' },
    motion: { ru: 'Motion-графика и анимация, 3D, визуальный сторителлинг.', en: 'Motion graphics and animation, 3D, visual storytelling.' },
    art: { ru: 'Арт-дирекшн, концепции, съёмки и координация производства.', en: 'Art direction, concepts, shoots and production coordination.' },
    digital: { ru: 'Digital-дизайн, презентации, сайты на конструкторах.', en: 'Digital design, presentations, no-code websites.' },
  } as Record<Role | 'all', L>,

  skills: [
    {
      group: 'Creative',
      items: [
        { text: { ru: 'визуальное исследование', en: 'visual research' }, roles: ALL },
        { text: { ru: 'разработка концепций', en: 'concept development' }, roles: ALL },
        { text: { ru: 'арт-дирекшн', en: 'art direction' }, roles: ['art', 'brand'] },
        { text: { ru: 'визуальная стратегия', en: 'visual strategy' }, roles: ['art', 'brand'] },
        { text: { ru: 'визуальный сторителлинг', en: 'visual storytelling' }, roles: ['motion', 'art', 'digital'] },
        { text: { ru: 'разработка визуального языка', en: 'visual language' }, roles: ['brand', 'graphic'] },
      ],
    },
    {
      group: 'Design',
      items: [
        { text: { ru: 'айдентика и брендинг', en: 'identity & branding' }, roles: ['brand', 'graphic'] },
        { text: { ru: 'графический дизайн', en: 'graphic design' }, roles: ['graphic', 'brand'] },
        { text: { ru: 'коммуникационный дизайн', en: 'communication design' }, roles: ALL },
        { text: { ru: 'редакционный дизайн', en: 'editorial design' }, roles: ['graphic'] },
        { text: { ru: 'типографика и леттеринг', en: 'typography & lettering' }, roles: ['graphic', 'brand'] },
        { text: { ru: 'digital-дизайн', en: 'digital design' }, roles: ['digital', 'motion'] },
        { text: { ru: 'дизайн презентаций', en: 'presentation design' }, roles: ['digital', 'graphic'] },
        { text: { ru: 'печать и допечатная подготовка', en: 'print & prepress' }, roles: ['graphic', 'brand'] },
        { text: { ru: 'motion-графика и анимация', en: 'motion graphics & animation' }, roles: ['motion'] },
      ],
    },
    {
      group: 'Production',
      items: [
        { text: { ru: 'координация креативных проектов', en: 'creative project coordination' }, roles: ['art'] },
        { text: { ru: 'организация съёмок', en: 'shoot production' }, roles: ['art'] },
        { text: { ru: 'работа с внешними исполнителями', en: 'working with contractors' }, roles: ['art'] },
        { text: { ru: 'подготовка и сопровождение производства', en: 'production preparation & supervision' }, roles: ['art', 'brand'] },
        { text: { ru: 'коммуникация с клиентами и командами', en: 'client & team communication' }, roles: ['art'] },
      ],
    },
  ] as { group: string; items: Tagged[] }[],

  tools: [
    { name: 'Photoshop', roles: ALL },
    { name: 'Illustrator', roles: ['graphic', 'brand', 'motion'] },
    { name: 'InDesign', roles: ['graphic', 'brand'] },
    { name: 'After Effects', roles: ['motion'] },
    { name: 'Premiere Pro', roles: ['motion'] },
    { name: 'Figma', roles: ['digital', 'graphic', 'brand'] },
    { name: 'Blender', roles: ['motion'] },
    { name: 'Cinema 4D', roles: ['motion'] },
    { name: 'TouchDesigner', roles: ['motion'] },
    { name: 'Cavalry', roles: ['motion'] },
    { name: 'Lottie', roles: ['motion', 'digital'] },
    { name: 'Rive', roles: ['motion', 'digital'] },
    { name: 'Glyphs', roles: ['graphic', 'brand'] },
    { name: 'FontLab', roles: ['graphic', 'brand'] },
    { name: 'Readymag', roles: ['digital'] },
    { name: 'Tilda', roles: ['digital'] },
    { name: 'Webflow', roles: ['digital'] },
    { name: 'Framer', roles: ['digital'] },
    { name: 'Jira', roles: ['art'] },
    { name: 'Notion', roles: ['art'] },
    { name: 'Trello', roles: ['art'] },
    { name: 'Nano Banana', roles: ALL },
    { name: 'Syntax', roles: ALL },
    { name: 'ComfyUI', roles: ['motion', 'art', 'graphic'] },
    { name: 'Claude', roles: ALL },
    { name: 'ElevenLabs', roles: ['motion'] },
  ] as { name: string; roles: Role[] }[],

  experience: [
    {
      company: 'QAYAQ',
      role: { ru: 'креативный директор, менеджер', en: 'creative director, manager' },
      years: '2025–2026',
      points: [
        { text: { ru: 'Разработка бренда с нуля: концепция, стратегия, айдентика и коммуникация.', en: 'Built the brand from scratch: concept, strategy, identity and communication.' }, roles: ['brand', 'art'] },
        { text: { ru: 'Визуальная стилистика бренда, включая авторский шрифт.', en: 'Visual style of the brand, including a custom typeface.' }, roles: ['brand', 'graphic'] },
        { text: { ru: 'Координация производства продукта и фотосъёмки.', en: 'Coordinated product manufacturing and the photo shoot.' }, roles: ['art'] },
        { text: { ru: 'Постановка и сопровождение визуальной части съёмок.', en: 'Directed and supervised the visual side of the shoots.' }, roles: ['art'] },
        { text: { ru: 'Переговоры и координация коллаборации со студией OYU — от идеи до реализации.', en: 'Negotiated and coordinated a collaboration with OYU studio, from idea to release.' }, roles: ['art', 'brand'] },
        { text: { ru: 'Коммуникация между участниками проекта и контроль реализации решений.', en: 'Kept the project team in sync and oversaw how decisions were carried out.' }, roles: ['art'] },
      ],
    },
    {
      company: 'Правое полушарие Интроверта',
      companyEn: 'Pravoe Polusharie Introverta',
      role: { ru: 'дизайнер лекций', en: 'lecture designer' },
      years: '2026',
      points: [
        { text: { ru: 'Визуальные системы для образовательных лекций.', en: 'Visual systems for educational lectures.' }, roles: ['graphic', 'digital'] },
        { text: { ru: 'Визуализация сложных исторических, культурных и академических тем.', en: 'Visualising complex historical, cultural and academic subjects.' }, roles: ['graphic', 'digital', 'motion'] },
        { text: { ru: 'Презентации и графические материалы для отдельных лекций и циклов.', en: 'Presentations and graphics for single lectures and series.' }, roles: ['digital', 'graphic'] },
        { text: { ru: 'Подбор, обработка и создание визуального контента.', en: 'Selecting, editing and creating visual content.' }, roles: ['graphic', 'digital', 'motion'] },
        { text: { ru: 'Финальные макеты в Figma для команды монтажа.', en: 'Final layouts in Figma handed over to the editing team.' }, roles: ['digital', 'motion'] },
        { text: { ru: 'Короткие производственные циклы и большой объём контента.', en: 'Short production cycles and a large volume of content.' }, roles: ['digital', 'motion'] },
      ],
    },
    {
      company: 'OYU STUDIO',
      role: { ru: 'дизайнер', en: 'designer' },
      years: '2025–2026',
      points: [
        { text: { ru: 'Айдентика и визуальные материалы для fashion- и детских брендов.', en: 'Identity and visual materials for fashion and kids’ brands.' }, roles: ['brand', 'graphic'] },
        { text: { ru: 'Принты, графика, бренд-бук и адаптации визуальной системы под разные носители.', en: 'Prints, graphics, a brand book and adaptations of the visual system across media.' }, roles: ['brand', 'graphic'] },
        { text: { ru: 'Концепции коллекций и визуальные материалы для запуска продуктов.', en: 'Collection concepts and launch visuals for products.' }, roles: ['art', 'brand'] },
        { text: { ru: 'Работа с изображениями, типографикой и композицией.', en: 'Image, typography and composition work.' }, roles: ['graphic'] },
        { text: { ru: 'Motion-графика и анимация для digital-продуктов.', en: 'Motion graphics and animation for digital products.' }, roles: ['motion', 'digital'] },
        { text: { ru: 'AI-инструменты в исследовании, поиске идей и разработке визуальных решений.', en: 'AI tools for research, ideation and visual development.' }, roles: ALL },
      ],
    },
    {
      company: 'SЁRP',
      role: { ru: 'арт-директор', en: 'art director' },
      years: '2023–2024',
      points: [
        { text: { ru: 'Фирменный стиль и визуальная система бренда.', en: 'Brand identity and visual system.' }, roles: ['brand', 'graphic', 'art'] },
        { text: { ru: 'Бренд-гайд и визуальные материалы для коммуникации.', en: 'Brand guide and communication materials.' }, roles: ['brand', 'graphic'] },
        { text: { ru: 'Упаковка и графика для готового продукта.', en: 'Packaging and graphics for the finished product.' }, roles: ['brand', 'graphic'] },
        { text: { ru: 'Презентации и промоматериалы.', en: 'Presentations and promo materials.' }, roles: ['digital', 'graphic'] },
        { text: { ru: 'Контроль визуальной консистентности бренда.', en: 'Kept the brand visually consistent.' }, roles: ['art', 'brand'] },
      ],
    },
    {
      company: 'Фриланс',
      companyEn: 'Freelance',
      role: { ru: 'дизайнер, арт-директор', en: 'designer, art director' },
      years: { ru: '2021 — сейчас', en: '2021 — now' },
      points: [
        { text: { ru: 'Айдентика, графические системы и визуальные концепции.', en: 'Identity, graphic systems and visual concepts.' }, roles: ['brand', 'graphic', 'art'] },
        { text: { ru: 'Печатные и digital-носители: публикации, книги, презентации, реклама и промо.', en: 'Print and digital: publications, books, presentations, advertising and promo.' }, roles: ['graphic', 'digital'] },
        { text: { ru: 'Визуальные и конкурентные исследования.', en: 'Visual and competitive research.' }, roles: ['art', 'brand'] },
        { text: { ru: 'Типографика, изображения, иллюстрация и motion.', en: 'Typography, imagery, illustration and motion.' }, roles: ['graphic', 'motion'] },
        { text: { ru: 'Веду проекты сама — от брифа и концепции до финальной подготовки материалов.', en: 'I run projects on my own, from brief and concept to final delivery.' }, roles: ALL },
      ],
    },
  ] as { company: string; companyEn?: string; role: L; years: string | L; points: Tagged[] }[],

  education: [
    {
      place: { ru: 'Школа дизайна НИУ ВШЭ, Санкт-Петербург', en: 'HSE Art & Design School, Saint Petersburg' },
      degree: { ru: 'Бакалавр, трек «Моушн-дизайн»', en: 'Bachelor of Arts, Motion Design track' },
      years: '2022–2026',
    },
  ],
};
