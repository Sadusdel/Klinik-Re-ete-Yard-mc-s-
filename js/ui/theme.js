import { storageGet, storageSet } from '../core/storage.js';

const DARK_MODE_READABILITY_CSS = `
  /* Dark-mode palette: navy/slate, avoiding pure black */
  .dark body {
    color: #f8fafc;
    background-color: #111827 !important;
  }

  .dark .text-black,
  .dark .text-slate-900,
  .dark .text-slate-800,
  .dark .text-slate-700,
  .dark .text-gray-900,
  .dark .text-gray-800,
  .dark .text-gray-700 { color: #f8fafc !important; }

  .dark .text-slate-600,
  .dark .text-slate-500,
  .dark .text-gray-600,
  .dark .text-gray-500 { color: #cbd5e1 !important; }

  .dark .text-slate-400,
  .dark .text-gray-400 { color: #94a3b8 !important; }

  /* Surfaces */
  .dark .bg-white { background-color: #1f2937 !important; }
  .dark .bg-gray-50,
  .dark .bg-slate-50 { background-color: #172033 !important; }
  .dark .bg-gray-100,
  .dark .bg-slate-100 { background-color: #1f2937 !important; }

  /* Inputs */
  .dark select,
  .dark input,
  .dark textarea {
    color: #f8fafc !important;
    background-color: #263449 !important;
    border-color: #334155 !important;
  }

  .dark select:focus,
  .dark input:focus,
  .dark textarea:focus {
    border-color: #60a5fa !important;
    box-shadow: 0 0 0 1px #60a5fa !important;
  }

  .dark select::placeholder,
  .dark input::placeholder,
  .dark textarea::placeholder {
    color: #cbd5e1 !important;
    opacity: 1;
  }

  .dark option {
    background-color: #263449;
    color: #f8fafc;
  }

  /* Borders / separators */
  .dark .border-gray-100,
  .dark .border-gray-200,
  .dark .border-slate-100,
  .dark .border-slate-200 {
    border-color: #334155 !important;
  }

  /* Tables */
  .dark table td,
  .dark table td * { color: #e2e8f0 !important; }
  .dark table th,
  .dark table th * { color: #ffffff !important; }

  /* General readable text */
  .dark label,
  .dark p,
  .dark li,
  .dark span { text-shadow: none; }
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
