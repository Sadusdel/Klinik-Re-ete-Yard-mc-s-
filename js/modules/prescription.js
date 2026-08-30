import { appState } from '../core/state.js';

export function addToCart(item) {
  if (!item) return;
  appState.cart.push({ ...item });
  notifyCartChanged();
}

export function removeFromCart(index) {
  if (index < 0 || index >= appState.cart.length) return;
  appState.cart.splice(index, 1);
  notifyCartChanged();
}

export function clearCart() {
  appState.cart.length = 0;
  notifyCartChanged();
}

export function getCart() {
  return [...appState.cart];
}

function notifyCartChanged() {
  window.dispatchEvent(new CustomEvent('app:cart-changed', {
    detail: { cart: getCart(), count: appState.cart.length },
  }));
}
