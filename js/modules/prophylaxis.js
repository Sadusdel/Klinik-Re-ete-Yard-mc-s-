import { appState, setState } from '../core/state.js';
import { toNumber } from '../core/utils.js';

export function updateProphylaxisInput(field, value) {
  if (!(field in appState.prophylaxis)) return;
  const normalized = field === 'childWeight' ? toNumber(value, 20) : value;
  setState(`prophylaxis.${field}`, normalized);
  window.dispatchEvent(new CustomEvent('app:prophylaxis-changed', {
    detail: { state: appState.prophylaxis },
  }));
}

export function initProphylaxis() {
  // The existing clinical rules are migrated here incrementally.
  // No calculation is duplicated until the corresponding rule is extracted from main.
}
