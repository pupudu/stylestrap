import {
  concat,
  appendSizeRule,
  appendMediaQueryRule,
  appendPseudoSelector,
  appendRule
} from './helpers';
import { setTheme, getTheme } from './state';
import { getRuleMap } from './rules';

const pseudoSelectors = {
  hover: 'hover',
  focus: 'focus',
  active: 'active',
  visited: 'visited',
  link: 'link'
};

function applyPseudoSelectors(propKey, propValue, ruleMap) {
  let status = false;
  const style = Object.keys(pseudoSelectors).reduce(
    (wrappedStyle, selector) => {
      if (selector in propValue) {
        status = true;
      }
      if (!propValue[selector]) {
        return wrappedStyle;
      }
      if (propValue[selector] === 'auto') {
        propValue[selector] = ruleMap[propKey].derive(selector, propValue.base);
      }
      return appendPseudoSelector(
        wrappedStyle,
        selector,
        generateStylesRecursively(
          { [propKey]: propValue[selector] },
          { [propKey]: ruleMap[propKey] }
        )
      );
    },
    ''
  );
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
    const propValue = props[propKey] || styleKey.default || 'initial';

    // Generate css rules based on the prop value type
    switch (typeof propValue) {
      case 'undefined':
        return style;
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

export function getStyleString(props, getStyleProps) {
  setTheme(props.theme);
  const ruleMap = getRuleMap(props);

  const styleProps = getStyleProps(props, ruleMap);

  const ruleMapToApply = Object.keys(styleProps).reduce((map, rule) => {
    map[rule] = ruleMap[rule] || { __label__: toKebabCase(rule), unit: '' };
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
