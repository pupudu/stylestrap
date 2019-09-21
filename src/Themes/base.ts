import { shade, getLuminance, lighten } from 'polished';
import state from '../core/ruleEngine/state';

function getColorShade(colorEnum, type) {
  const color = state.theme.colors[colorEnum];
  const colorMap = {
    '-2': lighten(0.15, color),
    '-1': lighten(0.075, color),
    0: color,
    1: shade(0.1, color),
    2: shade(0.2, color),
  };

  return colorMap[type];
}

function colorByLuminance(color) {
  return getLuminance(state.theme.colors[color] || color) < 0.7 ? '#FFF' : '#666';
}

const theme = {
  colorByLuminance,
  getColorShade,
  colors: {},
  breakpoints: {},
  sizes: {},
  headingSizes: {},
  defaultStyles: {},
  overrideStyles: {},
};

export default theme;
