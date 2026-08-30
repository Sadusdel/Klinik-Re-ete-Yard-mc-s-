import { appState } from '../core/state.js';

export function setSystemicCondition(id, active) {
  if (active) appState.systemicConditions.add(id);
  else appState.systemicConditions.delete(id);

  window.dispatchEvent(new CustomEvent('app:systemic-changed', {
    detail: { conditions: [...appState.systemicConditions] },
  }));
}
