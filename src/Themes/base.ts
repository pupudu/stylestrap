import { shade, getLuminance, lighten } from 'polished';
import state from '../core/ruleEngine/state';

function getColorShade(color, type) {
  const colorRaw = getColor(color);
  if (!colorRaw) return;

  const colorMap = {
    '-2': lighten(0.15, colorRaw),
    '-1': lighten(0.075, colorRaw),
    0: colorRaw,
    1: shade(0.1, colorRaw),
    2: shade(0.2, colorRaw),
  };

  return colorMap[type];
}

function colorByLuminance(color) {
  const colorRaw = getColor(color);
  if (!colorRaw) return;
  return getLuminance(colorRaw) < 0.7 ? '#FFF' : '#666';
}

function shadeByLuminance(color) {
  const colorRaw = state.theme.colors[color] || color;
  if (!colorRaw) return;
  return getColorShade(colorRaw, getLuminance(colorRaw) < 0.7 ? -1 : 1);
}

function getColor(color) {
  return state.theme.colors[color] || color;
}

const theme = {
  colorByLuminance,
  shadeByLuminance,
  getColorShade,
  getColor,
  colors: {},
  breakpoints: {},
  sizes: {},
  headingSizes: {},
  defaultStyles: {},
  overrideStyles: {},
};

export default theme;
