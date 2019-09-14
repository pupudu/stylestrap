export const transform = (transform, nestedValue) => {
  const finalReturn = {};

  if (typeof nestedValue !== 'object' || Array.isArray(nestedValue)) {
    return transform(nestedValue);
  }

  Object.keys(nestedValue).forEach(mediaKey => {
    const value = nestedValue[mediaKey];
    const transformed = transform(value);
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
