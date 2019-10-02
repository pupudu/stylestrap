export function callOrReturn(target, ...args) {
  if (typeof target === 'function') {
    return callOrReturn(target(...args), ...args);
  }
  return target;
}

export function toKebabCase(str) {
  return str.replace(/([A-Z])/g, Cap => `-${Cap.toLowerCase()}`);
}

/**
 * Filter out entries which have ['false', 'null', 'undefined', ''] as keys
 * or undefined as the value (using the option)
 *
 * Note: other empty values like null, 0, '', and false are allowed as properties
 */
export function filterEmptyKeys<T>(obj: T): T {
  return Object.entries(obj)
    .filter(
      ([key, value]) => value !== undefined && !['false', 'null', 'undefined', ''].includes(key)
    )
    .reduce(
      (carry, [key, value]) => {
        carry[key] = value;
        return carry;
      },
      {} as T
    );
}
