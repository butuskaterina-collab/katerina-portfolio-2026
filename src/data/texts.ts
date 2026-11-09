import type { ImageMetadata } from 'astro';

/*
  Раздел «Тексты» — визуальные исследования из папки «визуальные исследования» в профиле Катерины на HSE Design
  (pro.hsedesign.com/account/zaraza). Аннотации собраны из её текстов, без добавлений.
  Пока у текстов нет своих страниц, «Читать» ведёт на pro.hsedesign.com.
  Обложки: положить файл в src/assets/texts/<key>.jpg — он подхватится сам.
  Не вошли: «a la russe — „Русские сезоны“ и мода» и «Renaissancecore» (страницы закрыты модератором),
  «Thinking about communication theory: emolla» (командная, Катерина убрала её из своей папки).
*/

type L = { ru: string; en: string };

const covers = import.meta.glob<{ default: ImageMetadata }>('../assets/texts/*.jpg', { eager: true });
const hse = (id: string) => `https://pro.hsedesign.com/project/${id}`;

const entries: { key: string; title: L; type: L; date: string; id: string; lead: L }[] = [
  {
    key: 'apple',
    title: { ru: 'Минимализм Apple: как пустота создаёт ценность', en: 'Apple’s minimalism: how emptiness creates value' },
    type: { ru: 'визуальное исследование', en: 'visual research' },
    date: '2025-07-06',
    id: '5333bca39ff6420183aec5db00f06f72',
    lead: {
      ru: 'Почему пустое пространство вокруг продукта даёт ощущение премиальности? Разбираю визуальные стратегии Apple через гештальт-психологию и когнитивные подходы и сравниваю их с рекламой конкурентов.',
      en: 'Why does empty space around a product feel premium? I look at Apple’s visual strategies through gestalt psychology and cognitive approaches and compare them with competitors’ advertising.',
    },
  },
  {
    key: 'body',
    title: { ru: 'Тело как текст: визуализация женского опыта травмы в хорроре', en: 'Body as text: visualising women’s experience of trauma in horror' },
    type: { ru: 'визуальное исследование', en: 'visual research' },
    date: '2025-05-29',
    id: '8e9ed1e006634c449f6c8b21e80c74cd',
    lead: {
      ru: 'Как разрушение тела на экране складывается в «текст травмы» и раскрывает внутренний мир героини. Опираюсь на понятие «монструозной женственности» Барбары Крид.',
      en: 'How the destruction of the body on screen becomes a “text of trauma” and reveals the heroine’s inner world. Grounded in Barbara Creed’s idea of the “monstrous-feminine”.',
    },
  },
  {
    key: 'akerman',
    title: { ru: 'Портрет травмы в документальном кино Шанталь Аккерман', en: 'A portrait of trauma in Chantal Akerman’s documentaries' },
    type: { ru: 'визуальное исследование', en: 'visual research' },
    date: '2025-01-10',
    id: '04983319ec1b436787c89d24a4c69a43',
    lead: {
      ru: 'Личная документалистика, где автор становится героем собственного фильма. Три главы: «Дом, где тебя нет», «Познание мира через женское начало», «Моя мать смеётся».',
      en: 'Personal documentary, where the author becomes the subject of her own film. Three chapters: “The home where you are not”, “Knowing the world through the feminine”, “My Mother Laughs”.',
    },
  },
  {
    key: 'rage',
    title: { ru: 'История female rage в кино и сериалах', en: 'A history of female rage in film and TV' },
    type: { ru: 'видеоэссе', en: 'video essay' },
    date: '2025-01-10',
    id: 'e26827d55cbd4ea78db2f5ef27c8873e',
    lead: {
      ru: 'Тренд female rage из TikTok и то, что за ним стоит: женский гнев от изобразительного искусства и культовых фильмов с male gaze до современных интерпретаций.',
      en: 'The female rage trend from TikTok and what lies behind it: women’s anger from fine art and cult films shaped by the male gaze to contemporary interpretations.',
    },
  },
  {
    key: 'uncanny',
    title: { ru: 'Топос переживания жуткого как клише в искусстве и медиа', en: 'The uncanny as a topos and cliché in art and media' },
    type: { ru: 'визуальное исследование', en: 'visual research' },
    date: '2024-09-18',
    id: 'topos-perezhivaniya-zhutkogo-kak-topos-v--a0f6d78eb49f4f85b85b01284960379a',
    lead: {
      ru: 'Почему современное искусство так часто кажется жутким. В основе — эссе Зигмунда Фрейда «Жуткое» и понятие топоса у медиаархеолога Эркки Хухтамо.',
      en: 'Why contemporary art so often feels uncanny. Built on Sigmund Freud’s essay “The Uncanny” and media archaeologist Erkki Huhtamo’s notion of the topos.',
    },
  },
  {
    key: 'husky',
    title: { ru: 'Ключевые образы в клипах Хаски', en: 'Key images in Husky’s music videos' },
    type: { ru: 'визуальное исследование', en: 'visual research' },
    date: '2024-08-07',
    id: 'klyuchevye-obrazy-v-muzykalnykh-klipakh-i-c104178d8b3f42b5921d28d851dff5bd',
    lead: {
      ru: 'Картография образов и приёмов в клипах и короткометражках Хаски 2017–2024 годов: родное, апокалиптичное, символическое. Опираюсь на «Семиотику кино» Юрия Лотмана и «Запечатлённое время» Андрея Тарковского.',
      en: 'A map of the images and devices in Husky’s music videos and short films from 2017–2024: the native, the apocalyptic, the symbolic. Grounded in Yuri Lotman’s “Semiotics of Cinema” and Andrei Tarkovsky’s “Sculpting in Time”.',
    },
  },
  {
    key: 'look',
    title: { ru: 'Лук сквозь века', en: 'The Bow Through the Ages' },
    type: { ru: 'визуальное исследование', en: 'visual research' },
    date: '2024-04-01',
    id: '001e1872a75b447ab02295480af32568',
    lead: {
      ru: 'Как стрельба из лука прошла путь от оружия к искусству и досугу в разных эпохах и культурах.',
      en: 'How archery went from weapon to art and leisure across eras and cultures.',
    },
  },
  {
    key: 'lost',
    title: { ru: 'Потерянное поколение — образ эпохи в перестроечном кино', en: 'The lost generation: the image of an era in perestroika cinema' },
    type: { ru: 'визуальное исследование', en: 'visual research' },
    date: '2023-12-29',
    id: 'a7263818d71c48a2874eb8f452156344',
    lead: {
      ru: 'Кино после отмены цензуры в 1986 году и общество, которое не знало, будет ли у него будущее. Пространство, герои, киноязык и печальный конец.',
      en: 'Cinema after censorship was lifted in 1986, and a society unsure it had a future at all. Space, heroes, film language and the sad ending.',
    },
  },
  {
    key: 'nightmare',
    title: { ru: 'Коллективный кошмар. Психология немецкого экспрессионизма', en: 'A collective nightmare. The psychology of German Expressionism' },
    type: { ru: 'визуальное исследование', en: 'visual research' },
    date: '2023-07-04',
    id: '80315b3e63774595a7a985d9080d016a',
    lead: {
      ru: 'Немецкий экспрессионизм как отражение коллективной души страны после Первой мировой войны. Отправная точка — «Психологическая история немецкого кино» Зигфрида Кракауэра. Главы: сущность, сон, следы.',
      en: 'German Expressionism as a mirror of the country’s collective psyche after the First World War. The starting point is Siegfried Kracauer’s psychological history of German film. Chapters: essence, dream, traces.',
    },
  },
];

export const texts = entries.map((e) => ({
  ...e,
  year: e.date.slice(0, 4),
  href: hse(e.id),
  thumb: covers[`../assets/texts/${e.key}.jpg`]?.default,
}));
