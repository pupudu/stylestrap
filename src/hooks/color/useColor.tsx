import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { lighten } from '../../core/safePolished';

export const useColor = (color, lightenAmount = 0) => {
  const theme = useContext(ThemeContext);
  return lighten(theme.colorShadeMap[lightenAmount], theme.getColor(color));
};
