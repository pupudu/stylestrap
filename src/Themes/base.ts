import { shade, getLuminance, lighten } from 'polished';
import state from '../core/ruleEngine/state';

function getColorShade(colorEnum, type) {
  const color = state.theme.colors[colorEnum] || colorEnum;
  if (!color) return;
  const colorMap = {
    '-2': lighten(0.15, color),
    '-1': lighten(0.075, color),
    0: color,
    1: shade(0.1, color),
    2: shade(0.2, color),
  };

  return colorMap[type];
}

function colorByLuminance(colorEnum) {
  const color = state.theme.colors[colorEnum] || colorEnum;
  if (!color) return;
  return getLuminance(state.theme.colors[color] || color || '#FFFFFF') < 0.7 ? '#FFF' : '#666';
}

function shadeByLuminance(colorEnum) {
  const color = state.theme.colors[colorEnum] || colorEnum;
  if (!color) return;
  return getLuminance(state.theme.colors[color] || color || '#FFFFFF') < 0.7
    ? getColorShade(color, -1)
    : getColorShade(color, 1);
}

const theme = {
  colorByLuminance,
  shadeByLuminance,
  getColorShade,
  colors: {},
  breakpoints: {},
  sizes: {},
  headingSizes: {},
  defaultStyles: {},
  overrideStyles: {},
};

export default theme;
