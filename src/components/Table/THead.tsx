import { makeComponent } from '../../core';

const THead = makeComponent('THead')
  .classNames(props => ({
    sticky: props.sticky,
  }))
  .forwardProps(props => ({
    color: props.color,
    textColor: props.textColor,
  }))
  .create('thead');

export { THead };
