import React from 'react';

export interface StyledBase {
  $css?: React.CSSProperties | any;
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
