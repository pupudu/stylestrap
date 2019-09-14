import React from 'react';
import { makeComponent } from '../../core/ruleEngine';

type Badge = {
  color: string;
};

const Badge: React.FC<Badge> = makeComponent('Badge')
  .classNames('badge')
  .styles((props, theme) => ({
    backgroundColor: props.color,
    color: theme.helpers.colorByLuminance(props.color, theme),
  }))
  .create('span');

export { Badge };
