export function callOrReturn(target, ...args) {
  if (typeof target === 'function') {
    return callOrReturn(target(...args), ...args);
  }
  return target;
}
