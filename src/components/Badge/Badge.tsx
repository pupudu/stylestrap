import React from 'react';
import { makeComponent } from '../../core';

type Badge = {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';
};

const Badge: React.FC<Badge> = makeComponent('Badge')
  .classNames(props => ({
    badge: true,
    'badge-pill': props.variant === 'pill',
  }))
  .defaultProps({
    color: 'primary',
  })
  .styles((props, theme) => ({
    backgroundColor: props.color,
    color: theme.colorByLuminance(props.color),
  }))
  .props(props => ({
    as: props.href && 'a',
  }))
  .create('span');

export { Badge };
