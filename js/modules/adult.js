import { appState } from '../core/state.js';

export function initAdult() {
  window.dispatchEvent(new CustomEvent('app:adult-ready', {
    detail: { state: appState },
  }));
}
