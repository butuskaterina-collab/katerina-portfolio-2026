/*
  Готовые PDF резюме — по файлу на каждое направление и язык, в public/cv/.
  Кнопка «Скачать PDF» на сайте отдаёт эти файлы, поэтому вёрстка листа
  не зависит от браузера посетителя.

  Запускать локально после правок в CV:  npm run cv:pdf
  Нужен Google Chrome. Скрипт сам собирает сайт, поднимает предпросмотр,
  печатает 12 файлов и останавливает сервер. Потом — снова сборка и коммит.
*/
import { spawn, execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';

const CHROME = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 4390;
const ROLES = ['all', 'graphic', 'brand', 'motion', 'art', 'digital'];
const LANGS = { ru: '/cv/', en: '/en/cv/' };

const astro = ['node_modules/astro/bin/astro.mjs'];
execFileSync('node', [...astro, 'build'], { stdio: 'inherit', env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' } });

const server = spawn('node', [...astro, 'preview', '--port', String(PORT)], { stdio: 'ignore' });
await new Promise((ok) => setTimeout(ok, 2500));

mkdirSync('public/cv', { recursive: true });
try {
  for (const [lang, path] of Object.entries(LANGS)) {
    for (const role of ROLES) {
      const url = `http://localhost:${PORT}${path}${role === 'all' ? '' : `?role=${role}`}`;
      const out = `public/cv/Butusova_CV_${role}_${lang}.pdf`;
      execFileSync(CHROME, [
        '--headless=new',
        '--disable-gpu',
        '--no-pdf-header-footer',
        '--virtual-time-budget=4000',
        `--print-to-pdf=${out}`,
        url,
      ], { stdio: 'ignore' });
      console.log('✓', out);
    }
  }
} finally {
  server.kill();
}
