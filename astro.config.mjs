import { defineConfig } from 'astro/config';

export default defineConfig({
  // TODO: заменить на свой домен, когда он будет куплен
  site: 'https://katerina-portfolio-2026.vercel.app',
  devToolbar: { enabled: false },
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    routing: { prefixDefaultLocale: false },
  },
});
