import React from 'react';
import { StyledBase, SS } from '../../core';

export interface ButtonToolbarPropsBase {
  margin: object;
  padding: object;
}

export interface ButtonGroupPropsBase {
  vertical: boolean;
  margin: object;
  padding: object;
}

export interface ButtonToolbarProps extends ButtonToolbarPropsBase, SS.Div {}
export interface ButtonGroupProps extends ButtonGroupPropsBase, SS.Div {}

export const ButtonGroupType: React.FC<ButtonGroupPropsBase & StyledBase> = () => null;
export const ButtonToolbarType: React.FC<ButtonToolbarPropsBase & StyledBase> = () => null;
