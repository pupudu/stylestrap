import React from 'react';
import styled from 'styled-components';
import { makeComponent } from '../../core/ruleEngine';

const iconMap = {
  arrow: '↻',
  star: '★',
  yinyang: '☯',
  flower: '✾',
  flake: '❄',
  svastik: '࿗',
  ball: '⚽',
};

type Icon = {
  icon: 'arrow' | 'star' | 'yinyang' | 'flower' | 'flake' | 'svastik' | 'ball';
  className: string;
};

const Icon: React.FC<Icon> = props => {
  return (
    <span className={props.className} role="img" aria-label="spinner">
      {props.children || iconMap[props.icon] || iconMap['star']}
    </span>
  );
};

type Spinner = {
  speed: number;
  icon: 'arrow' | 'star' | 'yinyang' | 'flower' | 'flake' | 'svastik' | 'ball';
  size: string | number;
};

const Spinner: React.FC<Spinner> = makeComponent('Spinner')
  .classNames('spinner')
  .styles(props => ({
    animation: `spin ${props.speed || 0.8}s linear infinite`,
    display: 'inline-block',
    fontSize: props.size || '1.5rem',
  })).create(styled(Icon)`
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`);

export { Spinner };
