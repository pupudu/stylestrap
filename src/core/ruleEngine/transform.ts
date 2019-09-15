// TODO: Make the generateStylesRecursively use this function to apply pseudo selectors and breakpoints
export const transform = (handler, nestedValue) => {
  const finalReturn = {};

  if (typeof nestedValue !== 'object' || Array.isArray(nestedValue)) {
    return handler(nestedValue);
  }

  Object.keys(nestedValue).forEach(mediaKey => {
    const value = nestedValue[mediaKey];
    const transformed = handler(value);
    if (typeof transformed === 'object') {
      return Object.keys(transformed).forEach(propKey => {
        finalReturn[propKey] = {
          ...finalReturn[propKey],
          [mediaKey]: transformed[propKey],
        };
      });
    }
    finalReturn[mediaKey] = transformed;
  });
  return finalReturn;
};
