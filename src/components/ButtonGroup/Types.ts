import React from 'react';
import { StyledBase } from '../../core';
import { Div } from '../../core/SS';

export interface ButtonToolbarPropsBase {
  margin?: object;
  padding?: object;
}

export interface ButtonGroupPropsBase {
  vertical?: boolean;
  margin?: object;
  padding?: object;
}

export interface ButtonToolbarProps extends ButtonToolbarPropsBase, Div {}
export interface ButtonGroupProps extends ButtonGroupPropsBase, Div {}

export const ButtonGroupType: React.FC<ButtonGroupPropsBase & StyledBase> = () => null;
export const ButtonToolbarType: React.FC<ButtonToolbarPropsBase & StyledBase> = () => null;
