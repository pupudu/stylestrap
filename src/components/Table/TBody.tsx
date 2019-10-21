import { makeComponent } from '../../core';

const TBody = makeComponent('TBody')
  .forwardProps(props => ({
    color: props.color,
    textColor: props.textColor,
  }))
  .create('tbody');

export { TBody };
