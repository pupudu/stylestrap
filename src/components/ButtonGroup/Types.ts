import React from 'react';
import { StyledBase, StylestrapComponent } from '../../core';

export interface ButtonToolbarPropsBase {
  margin: object;
  padding: object;
}

export interface ButtonGroupPropsBase {
  vertical: boolean;
  margin: object;
  padding: object;
}

export interface ButtonToolbarProps extends ButtonToolbarPropsBase, StylestrapComponent {}
export interface ButtonGroupProps extends ButtonGroupPropsBase, StylestrapComponent {}

export const ButtonGroupType: React.FC<ButtonGroupPropsBase & StyledBase> = () => null;
export const ButtonToolbarType: React.FC<ButtonToolbarPropsBase & StyledBase> = () => null;
