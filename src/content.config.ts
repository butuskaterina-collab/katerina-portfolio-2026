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
      links: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),
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
            // center — 6 колонок по главной оси; video — встроенное видео с обложкой
            layout: z.enum(['full', 'pair', 'right', 'left', 'center', 'video']),
            images: z.array(image()).default([]),
            youtube: z.string().optional(),
          }),
        )
        .default([]),
    }),
});

export const collections = { projects };
