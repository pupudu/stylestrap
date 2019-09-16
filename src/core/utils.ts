export function callOrReturn(target, ...args) {
  if (typeof target === 'function') {
    return callOrReturn(target(...args), ...args);
  }
  return target;
}

export function toKebabCase(str) {
  return str.replace(/([A-Z])/g, Cap => `-${Cap.toLowerCase()}`);
}
