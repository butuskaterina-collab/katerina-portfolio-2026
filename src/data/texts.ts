import { archive } from './archive';

/*
  Раздел «Тексты»: визуальные исследования. Аннотации — по текстам Катерины на сайте Школы дизайна.
  Пока у текстов нет своих страниц, «Читать» ведёт на pro.hsedesign.com.
*/

type L = { ru: string; en: string };

interface TextEntry {
  title: L; // как в архиве — по нему берутся год, ссылка и превью
  type: L;
  lead: L;
}

const entries: TextEntry[] = [
  {
    title: { ru: 'Аура повседневного', en: 'The Aura of the Everyday' },
    type: { ru: 'визуальное исследование, диплом', en: 'visual research, graduation project' },
    lead: {
      ru: 'Почему простая вещь вдруг начинает казаться ценной? Эксплейнер на примере кусочка масла: три акта — свет, сосуд, жест.',
      en: 'Why does a simple thing suddenly start to feel precious? An explainer built around a piece of butter, in three acts: light, vessel, gesture.',
    },
  },
  {
    title: { ru: 'Ключевые образы в клипах Хаски', en: 'Key images in Husky’s music videos' },
    type: { ru: 'визуальное исследование', en: 'visual research' },
    lead: {
      ru: 'Картография образов и приёмов в клипах и короткометражках Хаски 2017–2024 годов: родное, апокалиптичное, символическое. Опираюсь на «Семиотику кино» Юрия Лотмана и «Запечатлённое время» Андрея Тарковского.',
      en: 'A map of the images and devices in Husky’s music videos and short films from 2017–2024: the native, the apocalyptic, the symbolic. Grounded in Yuri Lotman’s “Semiotics of Cinema” and Andrei Tarkovsky’s “Sculpting in Time”.',
    },
  },
  {
    title: { ru: 'Лук сквозь века', en: 'The Bow Through the Ages' },
    type: { ru: 'визуальное исследование', en: 'visual research' },
    lead: {
      ru: 'Как стрельба из лука прошла путь от оружия к искусству и досугу в разных эпохах и культурах. В книге сноски похожи на пробоины от стрел, а обложку связывает тетива классического лука.',
      en: 'How archery went from weapon to art and leisure across eras and cultures. In the book the footnotes look like arrow holes, and the cover is bound with the string of a classical bow.',
    },
  },
];

export const texts = entries.map((e) => {
  const a = archive.find((i) => i.title.ru === e.title.ru);
  if (!a) throw new Error(`Нет в архиве: ${e.title.ru}`);
  return { ...e, year: a.date.slice(0, 4), href: a.href, thumb: a.thumb };
});
