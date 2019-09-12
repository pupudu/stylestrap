import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';
import { makeComponent } from '../core/ruleEngine';

const iconMap = {
  arrow: '↻',
  star: '★',
  yinyang: '☯',
  flower: '✾',
  flake: '❄',
  svastik: '࿗',
  ball: '⚽'
};

const Icon = props => {
  return (
    <span className={props.className} role="img" aria-label="spinner">
      {props.children || iconMap[props.icon] || iconMap['star']}
    </span>
  );
};

Icon.propTypes = {
  icon: T.oneOf([
    'arrow',
    'star',
    'yinyang',
    'flower',
    'flake',
    'svastik',
    'ball'
  ]),
  className: T.string,
  children: T.any
};

const Spinner = makeComponent('Spinner')
  .classNames('spinner')
  .styles(props => ({
    animation: `spin ${props.speed || 0.8}s linear infinite`,
    display: 'inline-block',
    fontSize: props.size || '1.5rem'
  })).create(styled(Icon)`
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`);

Spinner.propTypes = {
  speed: T.number,
  icon: T.oneOf([
    'arrow',
    'star',
    'yinyang',
    'flower',
    'flake',
    'svastik',
    'ball'
  ]),
  size: T.oneOfType([T.string, T.number])
};

export { Spinner };
