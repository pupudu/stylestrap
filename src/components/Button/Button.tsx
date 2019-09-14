import * as React from 'react';
import { makeComponent, getStylesByFlavor } from '../../core/ruleEngine';
import './Button.css';

type ButtonProps = {
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'blend' | 'flip';
};

const Button: React.FC<ButtonProps> = makeComponent('Button')
  .classNames(props => ({
    btn: true,
    'btn-xs': props.size === 'xs', // TODO this looks weird. Possible bug?
    'btn-sm': props.size === 'sm',
    'btn-lg': props.size === 'lg',
    'btn-block': props.block,
  }))
  .styles((props, theme) => getStylesByFlavor({ color: 'primary', ...props }, theme, true))
  .create('button');

export { Button };
