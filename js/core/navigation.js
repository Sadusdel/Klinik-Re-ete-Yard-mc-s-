import { appState } from './state.js';
import { $$ } from './utils.js';

const TAB_IDS = ['prophylaxis', 'pediatric', 'adult', 'mronj', 'cart'];

export function switchTab(tabName) {
  if (!TAB_IDS.includes(tabName)) return;

  appState.activeTab = tabName;

  TAB_IDS.forEach((id) => {
    const section = document.getElementById(`sec-${id}`);
    const button = document.getElementById(`tab-btn-${id}`);
    if (section) section.classList.toggle('hidden', id !== tabName);
    if (button) button.classList.toggle('active-tab', id === tabName);
  });

  window.dispatchEvent(new CustomEvent('app:tab-changed', { detail: { tabName } }));
}

export function initNavigation() {
  $$('[data-tab]').forEach((button) => {
    button.addEventListener('click', () => switchTab(button.dataset.tab));
  });
}
