import {
  concat,
  appendSizeRule,
  appendMediaQueryRule,
  appendPseudoSelector,
  appendRule
} from './ruleBuilders';
import { setTheme, getTheme } from './state';
import { getRuleMap } from './rules';

const pseudoSelectors = [
  '&:hover',
  '&:focus',
  '&:active',
  '&:visited',
  '&:link',
  '&:disabled'
];

// TODO consider adding pseudo selectors based on the '&:' prefix rather than relying on enums
function applyPseudoSelectors(propKey, propValue, ruleMap) {
  let status = false;
  const style = pseudoSelectors.reduce((wrappedStyle, selector) => {
    if (selector in propValue) {
      status = true;
    }
    if (!propValue[selector]) {
      return wrappedStyle;
    }
    return appendPseudoSelector(
      wrappedStyle,
      selector,
      generateStylesRecursively(
        { [propKey]: propValue[selector] },
        { [propKey]: ruleMap[propKey] }
      )
    );
  }, '');
  return {
    status,
    style
  };
}

function applyBreakPoints(propKey, propValue, ruleMap) {
  let status = false;
  const breakPoints = getTheme().breakpoints || {};

  const style = Object.keys(breakPoints).reduce((wrappedStyle, breakPoint) => {
    if (breakPoint in propValue) {
      status = true;
    }
    if (!propValue[breakPoint]) {
      return wrappedStyle;
    }
    return appendMediaQueryRule(
      wrappedStyle,
      breakPoints[breakPoint],
      generateStylesRecursively(
        { [propKey]: propValue[breakPoint] },
        { [propKey]: ruleMap[propKey] }
      )
    );
  }, '');

  return {
    status,
    style
  };
}

function generateStylesRecursively(props, ruleMap, startStyle = '') {
  return Object.keys(ruleMap).reduce((style, propKey) => {
    const styleKey = ruleMap[propKey];
    const propValue = props[propKey]; // Derive default

    // TODO consider using type_key of stylekey to derive which rule to apply, before going into propValue type
    // TODO for that, will need to consider nested properties like padding

    // Generate css rules based on the prop value type
    if ([null, undefined, false].indexOf(propValue) >= 0) {
      // These values are not valid CSS values
      return style;
    }
    switch (typeof propValue) {
      case 'number':
        return appendSizeRule(style, styleKey, propValue);
      case 'string':
        return appendRule(style, styleKey, propValue);
      case 'object': {
        if (propValue.base) {
          style = concat(
            style,
            generateStylesRecursively(
              { [propKey]: propValue.base },
              { [propKey]: ruleMap[propKey] }
            )
          );
        }
        // If the propValue is an object, this would either be
        // breakpoints, pseudo-selectors or nested attributes.

        // First try to treat the propValue object as breakpoints
        const mediaStyles = applyBreakPoints(propKey, propValue, ruleMap);
        if (mediaStyles.status) {
          return concat(style, mediaStyles.style);
        }

        // Next we try to treat propValue object as pseudo selectors
        const pseudoStyles = applyPseudoSelectors(propKey, propValue, ruleMap);
        if (pseudoStyles.status) {
          return concat(style, pseudoStyles.style);
        }

        // If an empty string was returned from above, that means the propValue object contains nested attributes
        // So now generate the styles for the nested attributes
        return generateStylesRecursively(propValue, ruleMap[propKey], style);
      }
    }
    throw new Error(
      `Unexpected propValue type: ${typeof propValue} for key: ${propKey}`
    );
  }, startStyle);
}

function toKebabCase(ruleKey) {
  return ruleKey.replace(/([A-Z])/g, Cap => `-${Cap.toLowerCase()}`);
}

export function getStyleString(props, getStyleProps, displayName) {
  // Use theme with return value from setTheme
  // This is useful when theme was defined before, but undefined now due to some
  // reason like using portals or 3rd party libraries
  const theme = setTheme(props.theme);

  const ruleMap = getRuleMap(props);

  const styleProps = getStyleProps(props);

  // TODO - ruleKey can be an object here. Do we care?
  const ruleMapToApply = Object.keys(styleProps).reduce((map, ruleKey) => {
    if (
      typeof styleProps[ruleKey] === 'undefined' ||
      styleProps[ruleKey] === false
    ) {
      if (!theme || !theme.defaultStyles || !theme.defaultStyles[displayName]) {
        return map;
      }
      const defaultComponentStyles = theme.defaultStyles[displayName];

      // If defaultComponentStyles is a function, we call it with props and theme as arguments
      // Otherwise we expect it to be an object
      const defaultStyles =
        typeof defaultComponentStyles === 'function'
          ? defaultComponentStyles(props, theme)
          : defaultComponentStyles;

      // If a default value exists, we set it and let the flow continue.
      // Otherwise we return the map
      if (!defaultStyles[ruleKey]) {
        return map;
      }
      styleProps[ruleKey] = defaultStyles[ruleKey];
      // Do not return here. Let the code outside of this if block run
    }
    map[ruleKey] = ruleMap[ruleKey] || {
      __label__: toKebabCase(ruleKey),
      unit: ''
    };
    return map;
  }, {});
  return generateStylesRecursively(styleProps, ruleMapToApply);
}

export function filterProps(theme, props) {
  const ruleMap = getRuleMap({ theme, ...props });
  const propsClone = { ...props };
  Object.keys(ruleMap).forEach(ruleKey => {
    if (
      ruleMap[ruleKey] === ruleKey ||
      ruleMap[ruleKey].__label__ === ruleKey
    ) {
      return;
    }
    delete propsClone[ruleKey];
  });
  return propsClone;
}
