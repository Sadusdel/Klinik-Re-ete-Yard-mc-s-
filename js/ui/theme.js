import { storageGet, storageSet } from '../core/storage.js';

const DARK_MODE_READABILITY_CSS = `
  .dark body { color: #e2e8f0; }
  .dark .text-black,
  .dark .text-slate-900,
  .dark .text-slate-800,
  .dark .text-slate-700,
  .dark .text-gray-900,
  .dark .text-gray-800,
  .dark .text-gray-700 { color: #f1f5f9 !important; }
  .dark .text-slate-600,
  .dark .text-slate-500,
  .dark .text-gray-600,
  .dark .text-gray-500 { color: #cbd5e1 !important; }
  .dark .text-slate-400,
  .dark .text-gray-400 { color: #94a3b8 !important; }
  .dark table td,
  .dark table td * { color: #e2e8f0 !important; }
  .dark table th,
  .dark table th * { color: #dbeafe !important; }
  .dark table,
  .dark td,
  .dark th,
  .dark label,
  .dark p,
  .dark li,
  .dark span { text-shadow: none; }
  .dark select,
  .dark input,
  .dark textarea { color: #f8fafc !important; }
  .dark select::placeholder,
  .dark input::placeholder,
  .dark textarea::placeholder { color: #cbd5e1 !important; opacity: 1; }
  .dark option { background: #0f172a; color: #f8fafc; }
`;

function ensureDarkModeReadability() {
  if (document.getElementById('dark-mode-readability-fix')) return;
  const style = document.createElement('style');
  style.id = 'dark-mode-readability-fix';
  style.textContent = DARK_MODE_READABILITY_CSS;
  document.head.appendChild(style);
}

export function applyTheme(theme) {
  ensureDarkModeReadability();
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  storageSet('theme', theme);
}

export function toggleTheme() {
  const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(next);
}

export function initTheme() {
  const saved = storageGet('theme');
  const preferred = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(preferred);
}
