import React from 'react';
import * as SS from './SS';

export interface StyledBase {
  css?: React.CSSProperties | any;
  $raw?: string;
  as?: any;
}

export type ThemeColors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'light'
  | 'dark'
  | string;

export { SS };
