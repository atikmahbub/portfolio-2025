const script = `
  (function() {
    try {
      var storageKey = 'portfolio-theme';
      var stored = window.localStorage.getItem(storageKey);
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = stored === 'dark' || stored === 'light' ? stored : (prefersDark ? 'dark' : 'light');
      var root = document.documentElement;
      root.classList.toggle('dark', theme === 'dark');
      root.classList.toggle('light', theme === 'light');
      root.setAttribute('data-theme', theme);
      root.style.colorScheme = theme;
    } catch (e) {
      console.warn('Theme init failed', e);
    }
  })();
`;

export default function ThemeScript() {
  // Using dangerouslySetInnerHTML to execute before React hydration
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
