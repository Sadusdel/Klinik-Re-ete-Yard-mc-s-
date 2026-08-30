let container;

function getContainer() {
  if (container) return container;
  container = document.createElement('div');
  container.id = 'app-toast-container';
  container.className = 'fixed bottom-5 right-5 z-[100] flex max-w-sm flex-col gap-2';
  document.body.appendChild(container);
  return container;
}

export function showToast(message, type = 'info', duration = 3000) {
  const toast = document.createElement('div');
  toast.className = `rounded-xl border bg-white px-4 py-3 text-sm font-semibold shadow-lg dark:bg-slate-900 ${type === 'error' ? 'border-red-300 text-red-700' : type === 'success' ? 'border-emerald-300 text-emerald-700' : 'border-slate-200 text-slate-700'}`;
  toast.textContent = message;
  getContainer().appendChild(toast);
  window.setTimeout(() => toast.remove(), duration);
}
