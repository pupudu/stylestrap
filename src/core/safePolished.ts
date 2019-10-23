import * as polished from 'polished';

export function lighten(amount, color) {
  try {
    return polished.lighten(amount, color);
  } catch (e) {
    console.error({ color, amount }, e);
    return '#F66';
  }
}

export function getLuminance(color) {
  try {
    return polished.getLuminance(color);
  } catch (e) {
    console.log({ color }, e);
    return 0.5;
  }
}

export function transparentize(amount, color) {
  try {
    return polished.transparentize(amount, color);
  } catch (e) {
    console.error({ color, amount }, e);
    return '#F66';
  }
}
