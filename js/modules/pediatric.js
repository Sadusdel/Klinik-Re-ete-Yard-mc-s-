import { appState, setState } from '../core/state.js';
import { toNumber } from '../core/utils.js';

export function setPediatricWeight(value) {
  const weight = toNumber(value, 0);
  setState('pediatric.weight', weight);
  window.dispatchEvent(new CustomEvent('app:pediatric-weight-changed', {
    detail: { weight, state: appState.pediatric },
  }));
}

export function selectPediatricDrug(drugId) {
  setState('pediatric.selectedDrug', drugId);
  window.dispatchEvent(new CustomEvent('app:pediatric-drug-changed', {
    detail: { drugId },
  }));
}
