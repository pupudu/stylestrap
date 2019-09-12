import { makeComponent } from '../core/ruleEngine';

const TBody = makeComponent('TBody')
  .props(props => {
    return {}; // TODO change colors based on props
  })
  .create('tbody');

export { TBody };
