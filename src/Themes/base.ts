import { shade, getLuminance } from 'polished';
import state from '../core/ruleEngine/state';

function getColorShade(colorEnum, type) {
  const color = state.theme.colors[colorEnum];
  const colorMap = {
    '-2': shade(0.3, color), // TODO replace shade with some other helper to make them brighter
    '-1': shade(0.2, color), // TODO replace shade with some other helper to make them brighter
    0: color,
    1: shade(0.2, color),
    2: shade(0.3, color),
  };

  return colorMap[type];
}

function colorByLuminance(color) {
  return getLuminance(state.theme.colors[color] || color) < 0.7 ? '#FFF' : '#666';
}

function borderColorByLuminance(color) {
  return getLuminance(state.theme.colors[color] || color) < 0.7 ? '#AAA' : '#FFF';
}

const theme = {
  colorByLuminance,
  borderColorByLuminance,
  getColorShade,
  colors: {},
  breakpoints: {},
  sizes: {},
  headingSizes: {},
  defaultStyles: {},
  overrideStyles: {},
};

export default theme;
