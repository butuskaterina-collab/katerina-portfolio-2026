import { getCollection, getEntry, render } from 'astro:content';
import type { Lang } from '../i18n/ui';
import { typograph } from './typograph';

/** Проект на нужном языке: тексты из <lang>.md, остальное (галерея, год, раздел) — из ru.md */
export async function getProject(slug: string, lang: Lang) {
  const base = await getEntry('projects', `${slug}/ru`);
  if (!base) throw new Error(`Нет проекта ${slug}/ru.md`);
  const local = lang === 'ru' ? base : ((await getEntry('projects', `${slug}/en`)) ?? base);
  const { Content } = await render(local);
  return {
    slug,
    ...base.data,
    // все тексты проходят через типограф: неразрывные пробелы после предлогов, перед тире и т. п.
    title: typograph(local.data.title),
    type: local.data.type,
    lead: typograph(local.data.lead),
    tags: local.data.tags,
    texts: Object.fromEntries(
      Object.entries({ ...base.data.texts, ...local.data.texts }).map(([k, v]) => [k, { label: v.label, body: typograph(v.body) }]),
    ),
    links: local.data.links.length ? local.data.links : base.data.links,
    translated: local !== base || lang === 'ru',
    Content,
  };
}

export type Project = Awaited<ReturnType<typeof getProject>>;

/** Все проекты раздела по порядку */
export async function getProjects(lang: Lang, section: 'projects' | 'texts' = 'projects') {
  const entries = await getCollection('projects', (e) => e.id.endsWith('/ru') && e.data.section === section);
  const slugs = entries
    .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99))
    .map((e) => e.id.replace(/\/ru$/, ''));
  return Promise.all(slugs.map((s) => getProject(s, lang)));
}
