const PREFIX = 'klinik-recete:';

export function storageGet(key, fallback = null) {
  try {
    const raw = localStorage.getItem(`${PREFIX}${key}`);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function storageSet(key, value) {
  try {
    localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function storageRemove(key) {
  try {
    localStorage.removeItem(`${PREFIX}${key}`);
  } catch {
    // Storage may be unavailable in private/restricted browser contexts.
  }
}
