import React from 'react';
import { StyledBase, StylestrapComponent, ThemeColors } from '../../core';

interface BadgePropsBase {
  /**
   * One of "primary", "secondary", "success", "warning", "danger", "info", "dark" or "light"
   * unless different color names are used in the theme object.
   */
  color?: ThemeColors;
  /**
   * Passing a value to this prop will convert the badge into an actionable
   * anchor tag.
   */
  href?: string;
  /**
   * Makes the badge rounded
   */
  flavor?: 'pill';
}
export interface BadgeProps extends BadgePropsBase, StylestrapComponent<HTMLSpanElement> {}

export const BadgeType: React.FC<BadgePropsBase & StyledBase> = () => null;
