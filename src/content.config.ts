import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/*
  Проекты: src/content/projects/<slug>/ru.md — основной файл (галерея, год, ссылки, раздел),
  en.md рядом — только перевод текстов. Картинки — в <slug>/images/.
  Раздел: 'projects' — вкладка «Проекты», 'texts' — визуальные исследования во вкладке «Тексты».
*/
const projects = defineCollection({
  loader: glob({ pattern: '*/{ru,en}.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      type: z.string(),
      lead: z.string(),
      tags: z.array(z.string()).default([]),
      // note — подпись под ссылкой (например, награда площадки)
      links: z.array(z.object({ label: z.string(), href: z.string().url(), note: z.string().optional() })).default([]),
      // тексты между картинками: ключ → подпись и текст; ключи одинаковые в ru.md и en.md,
      // абзацы разделяются пустой строкой
      texts: z.record(z.string(), z.object({ label: z.string().optional(), body: z.string() })).default({}),
      // дальше — только в ru.md
      year: z.number().optional(),
      order: z.number().optional(),
      section: z.enum(['projects', 'texts']).optional(),
      cover: image().optional(),
      gallery: z
        .array(
          z.object({
            // full — во всю ширину поля; pair — две картинки по 6 колонок;
            // right — с главной оси (4-я колонка) до правого поля; left — от левого поля на 9 колонок;
            // center — 6 колонок по главной оси; video — встроенное видео с обложкой;
            // text — текст из texts по ключу text; все тексты стоят справа, с 7-й колонки;
            // loop — несколько кадров сменяют друг друга по кругу, как гифка (во всю ширину)
            layout: z.enum(['full', 'pair', 'right', 'left', 'center', 'video', 'text', 'loop', 'tester']),
            text: z.string().optional(),
            images: z.array(image()).default([]),
            youtube: z.string().optional(),
            // видео на Kinescope: id из ссылки kinescope.io/<id>; плеер встраивается сразу, грузится при прокрутке
            kinescope: z.string().optional(),
            // короткое видео без звука, крутится по кругу, как гифка: путь к файлу в public/ (например /projects/<slug>/01.mp4)
            mp4: z.string().optional(),
            // tester — строка, набранная шрифтом из font (путь в public/), её можно переписать и переключать сеты;
            // sets: подпись → тег OpenType (пустая строка — базовый)
            font: z.string().optional(),
            sets: z.array(z.object({ label: z.string(), tag: z.string() })).default([]),
          }),
        )
        .default([]),
    }),
});

export const collections = { projects };
