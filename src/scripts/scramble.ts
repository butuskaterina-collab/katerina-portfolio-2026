// Scramble: символы на мгновение превращаются в «код» и собираются обратно.
// Элементы с [data-scramble] реагируют на наведение и фокус;
// [data-scramble="intro"] дополнительно собираются один раз при загрузке.

const GLYPHS = '01/\\<>{}[]_#*+=:;~—АБДЖЗЛФЯ';
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const running = new WeakMap<HTMLElement, number>();

function scramble(el: HTMLElement, duration = 520) {
  if (reduced) return;
  const original = el.dataset.text ?? el.textContent ?? '';
  el.dataset.text = original;
  cancelAnimationFrame(running.get(el) ?? 0);

  const start = performance.now();
  // каждая буква «встаёт на место» в своё время, слева направо с небольшим разбросом
  const settle = [...original].map((_, i) => (i / original.length) * 0.7 + Math.random() * 0.3);

  const frame = (now: number) => {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = [...original]
      .map((ch, i) => (ch === ' ' || p >= settle[i] ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0]))
      .join('');
    if (p < 1) running.set(el, requestAnimationFrame(frame));
    else el.textContent = original;
  };
  running.set(el, requestAnimationFrame(frame));
}

export function initScramble(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-scramble]').forEach((el) => {
    // текст для скринридеров не должен «мигать»
    el.setAttribute('aria-label', el.textContent ?? '');
    const target = (el.closest('a, button') as HTMLElement | null) ?? el;
    target.addEventListener('mouseenter', () => scramble(el));
    target.addEventListener('focus', () => scramble(el));
    if (el.dataset.scramble === 'intro') scramble(el, 1100);
  });
}
