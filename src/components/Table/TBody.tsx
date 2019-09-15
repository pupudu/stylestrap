import { makeComponent } from '../../core';

const TBody = makeComponent('TBody')
  .props(() => {
    return {}; // TODO change colors based on props
  })
  .create('tbody');

export { TBody };
