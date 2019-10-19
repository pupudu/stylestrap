import { makeComponent } from '../../core';

const THead = makeComponent('THead')
  .classNames(props => ({
    sticky: props.sticky,
  }))
  .forwardProps(props => ({
    color: props.color,
  }))
  .create('thead');

export { THead };
