import { getLuminance, lighten } from 'polished';
import state from '../core/ruleEngine/state';

const colorShadeMap = {
  '-7': -0.4,
  '-6': -0.35,
  '-5': -0.3,
  '-4': -0.225,
  '-3': -0.15,
  '-2': -0.1,
  '-1': -0.05,
  '0': 0,
  '1': 0.05,
  '2': 0.1,
  '3': 0.175,
  '4': 0.25,
  '5': 0.325,
  '6': 0.4,
  '7': 0.45,
};

function getColorShade(color, type) {
  const colorRaw = getColor(color);
  if (!colorRaw) return;

  return lighten(state.theme.colorShadeMap[type], colorRaw);
}

function colorByLuminance(color) {
  const colorRaw = getColor(color);
  if (!colorRaw) return;
  return getLuminance(colorRaw) < 0.7 ? '#FFF' : '#666';
}

function shadeByLuminance(color) {
  const colorRaw = state.theme.colors[color] || color;
  if (!colorRaw) return;
  return getColorShade(colorRaw, getLuminance(colorRaw) < 0.7 ? 2 : -2);
}

function getColor(color) {
  return state.theme.colors[color] || color;
}

const theme = {
  colorByLuminance,
  shadeByLuminance,
  getColorShade,
  colorShadeMap,
  getColor,
  colors: {},
  breakpoints: {},
  sizes: {},
  headingSizes: {},
  defaultStyles: {},
  overrideStyles: {},
};

export default theme;
