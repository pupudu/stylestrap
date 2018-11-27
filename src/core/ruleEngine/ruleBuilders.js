import { getTheme } from './state';

export function concat(rule1, rule2) {
  return `
${rule1}
${rule2}
  `.trim();
}

export function appendMediaQueryRule(base, breakPoint, rule) {
  return concat(
    base,
    `
@media (min-width: ${breakPoint}rem) {
  ${rule}
}
  `.trim()
  );
}

export function getRule(ruleKey, value) {
  // Check if theme based size enums exist. If exists, replace the original value with the derived value
  const theme = getTheme();
  if (theme && theme.sizes && theme.sizes[value]) {
    value = theme.sizes[value];
  }

  if (theme && theme.colors && theme.colors[value]) {
    value = theme.colors[value];
  }

  if (typeof ruleKey === 'object') {
    if (ruleKey.enums && ruleKey.enums[value]) {
      return `${ruleKey.__label__}: ${ruleKey.enums[value]};`;
    }
    return `${ruleKey.__label__}: ${value};`;
  }
  return `${ruleKey}: ${value};`;
}

export function appendRule(base, ruleKey, value) {
  return concat(base, getRule(ruleKey, value));
}

export function appendSizeRule(base, ruleKey, value) {
  if (typeof ruleKey === 'object') {
    return concat(
      base,
      `${ruleKey.__label__}: ${value}${
        typeof ruleKey.unit === 'string' ? ruleKey.unit : 'rem'
      };`
    );
  }
  return concat(base, `${ruleKey}: ${value}rem;`);
}

export function appendPseudoSelector(base, selector, rule) {
  return concat(
    base,
    `
${selector} {
  ${rule}
}
  `.trim()
  );
}
