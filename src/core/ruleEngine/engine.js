import {
  concat,
  appendSizeRule,
  appendMediaQueryRule,
  appendPseudoSelector,
  appendRule
} from './ruleBuilders';
import { setTheme, getTheme } from './state';
import { getRuleMap } from './rules';

const pseudoSelectors = {
  // TODO consider using :hover type strings for pseudo selectors
  hover: 'hover',
  focus: 'focus',
  active: 'active',
  visited: 'visited',
  link: 'link',
  disabled: 'disabled'
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
      // TODO get rid of '_auto' possibly from everywhere, at least from one of helpers or here
      if (propValue[selector] === '_auto') {
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
    const propValue = props[propKey]; // Derive default

    // TODO consider using type_key of stylekey to derive which rule to apply, before going into propValue type
    // TODO for that, will need to consider nested properties like padding

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

  const styleProps = getStyleProps(props);

  const ruleMapToApply = Object.keys(styleProps).reduce((map, ruleKey) => {
    if (
      typeof styleProps[ruleKey] === undefined ||
      styleProps[ruleKey] === false
    ) {
      return map;
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
