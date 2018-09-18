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
  active: 'active',
  visited: 'visited',
  link: 'link'
};

function applyPseudoSelectors(propKey, propValue, ruleMap) {
  return Object.keys(pseudoSelectors).reduce((wrappedStyle, selector) => {
    if (!propValue[selector]) {
      return wrappedStyle;
    }
    if (propValue[selector] === 'auto') {
      propValue[selector] = ruleMap[propKey].derive(selector, propValue.base);
    }
    return appendPseudoSelector(
      wrappedStyle,
      selector,
      generateStylesRecursively({ [propKey]: propValue[selector] }, ruleMap)
    );
  }, '');
}

function applyBreakPoints(propKey, propValue, ruleMap) {
  const breakPoints = getTheme().breakpoints || {};

  return Object.keys(breakPoints).reduce((wrappedStyle, breakPoint) => {
    if (!propValue[breakPoint]) {
      return wrappedStyle;
    }
    return appendMediaQueryRule(
      wrappedStyle,
      breakPoints[breakPoint],
      generateStylesRecursively({ [propKey]: propValue[breakPoint] }, ruleMap)
    );
  }, '');
}

function generateStylesRecursively(props, ruleMap, startStyle = '') {
  return Object.keys(ruleMap).reduce((style, propKey) => {
    const propValue = props[propKey];
    const styleKey = ruleMap[propKey];

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
          style = concat(style, generateStylesRecursively({ [propKey]: propValue.base }, ruleMap));
        }
        // If the propValue is an object, this would either be breakpoints or nested attributes.
        // First try to treat the propValue object as breakpoints
        const wrapped = applyBreakPoints(propKey, propValue, ruleMap);

        // If it were actually breakpoints, then we get styles wrapped in a media query
        if (wrapped !== '') {
          return concat(style, wrapped);
        }

        const wrapped2 = applyPseudoSelectors(propKey, propValue, ruleMap);
        // If it were actually pseudo selectors, then we get styles wrapped in a psedo selector
        if (wrapped2 !== '') {
          return concat(style, wrapped2);
        }

        // If an empty string was returned from above, that means the propValue object contains nested attributes
        // So now generate the styles for the nested attributes
        return generateStylesRecursively(propValue, ruleMap[propKey], style);
      }
    }
    throw new Error(`Unexpected propValue type: ${typeof propValue} for key: ${propKey}`);
  }, startStyle);
}

export function getStyleString(props, rulesToApply) {
  setTheme(props.theme);
  const ruleMap = getRuleMap(props);
  let ruleMapToApply = ruleMap;
  if (rulesToApply) {
    ruleMapToApply = rulesToApply.reduce((map, rule) => {
      map[rule] = ruleMap[rule];
      return map;
    }, {});
  }
  return generateStylesRecursively(props, ruleMapToApply);
}

export function filterProps(theme, props) {
  const ruleMap = getRuleMap({ theme, ...props });
  const propsClone = { ...props };
  Object.keys(ruleMap).forEach(ruleKey => {
    if (ruleMap[ruleKey] === ruleKey || ruleMap[ruleKey].__label__ === ruleKey) {
      return;
    }
    delete propsClone[ruleKey];
  });
  return propsClone;
}
