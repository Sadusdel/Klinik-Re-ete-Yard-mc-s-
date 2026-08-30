export const appState = {
  activeTab: 'prophylaxis',
  theme: 'light',
  cart: [],
  systemicConditions: new Set(),
  prophylaxis: {
    patient: 'adult',
    allergy: 'no',
    route: 'oral',
    childWeight: 20,
    selectedOption: null,
  },
  pediatric: {
    weight: null,
    selectedDrug: null,
  },
};

export function setState(path, value) {
  const keys = path.split('.');
  let target = appState;
  for (let i = 0; i < keys.length - 1; i += 1) {
    target = target[keys[i]];
  }
  target[keys[keys.length - 1]] = value;
}

export function getState(path) {
  return path.split('.').reduce((value, key) => value?.[key], appState);
}
