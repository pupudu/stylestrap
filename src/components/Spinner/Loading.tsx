import React from 'react';
import { makeComponent } from '../../core';
import { Div } from '../../core/SS';

const Grower = makeComponent('Grower')
  .styles(props => ({
    backgroundColor: 'currentColor',
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '100%',
    opacity: 0,
    animation: 'ball-scale-multiple 1s 0s linear infinite',
    animationDelay: props.delay || 0,
  }))
  .raw(
    `
    @keyframes ball-scale-multiple {
      0% {
        opacity: 0;
        transform: scale(0);
      }
      5% {
        opacity: .75;
      }
      100% {
        opacity: 0;
        transform: scale(1);
      }
    }
  `
  )
  .create('div');

export interface LoadingProps extends Div {
  color?: string;
  size?: string;
  wait?: number;
  fadeDuration?: number;
}

export const Loading: React.FC<LoadingProps> = makeComponent('Loading')
  .defaultProps({
    color: 'blue',
    size: '32px',
    wait: 1000,
    fadeDuration: 2000,
  })
  .styles(props => ({
    fontSize: 0,
    position: 'relative',
    animationName: 'lazy-appear',
    color: props.color,
    width: props.size,
    height: props.size,
    animationDuration: `${props.wait + props.fadeDuration}ms`,
  }))
  .raw(
    props =>
      `
    @keyframes lazy-appear {
      0% {
        opacity: 0;
      }
      ${(props.wait * 100) / (props.wait + props.fadeDuration)}% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `
  )
  .create(props => (
    <div {...props}>
      <Grower />
      <Grower delay="0.2s" />
      <Grower delay="0.4s" />
    </div>
  ));
