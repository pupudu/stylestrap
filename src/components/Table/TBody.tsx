import { makeComponent } from '../../core';

const TBody = makeComponent('TBody')
  .forwardProps(props => ({
    color: props.color,
  }))
  .create('tbody');

export { TBody };
