// Живое время для элементов [data-clock="Asia/Yakutsk"]
export function initClocks() {
  const clocks = document.querySelectorAll<HTMLElement>('[data-clock]');
  if (!clocks.length) return;

  const formatters = new Map<string, Intl.DateTimeFormat>();
  const tick = () => {
    const now = new Date();
    clocks.forEach((el) => {
      const zone = el.dataset.clock!;
      if (!formatters.has(zone)) {
        formatters.set(
          zone,
          new Intl.DateTimeFormat('ru-RU', { timeZone: zone, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        );
      }
      el.textContent = formatters.get(zone)!.format(now);
    });
  };
  tick();
  setInterval(tick, 1000);
}
