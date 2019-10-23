import React from 'react';
import { StyledBase, ThemeColors } from '../../core';
import { Span } from '../../core/SS';

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
export interface BadgeProps extends BadgePropsBase, Span {}

export const BadgeType: React.FC<BadgePropsBase & StyledBase> = () => null;
