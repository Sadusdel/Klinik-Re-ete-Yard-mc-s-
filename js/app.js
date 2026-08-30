import { initTheme } from './ui/theme.js';
import { initModalDismissal } from './ui/modal.js';
import { initNavigation } from './core/navigation.js';
import { initProphylaxis } from './modules/prophylaxis.js';
import { initAdult } from './modules/adult.js';
import { initMronj } from './modules/mronj.js';

export function initApp() {
  initTheme();
  initModalDismissal();
  initNavigation();
  initProphylaxis();
  initAdult();
  initMronj();

  window.dispatchEvent(new CustomEvent('app:ready'));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp, { once: true });
} else {
  initApp();
}
