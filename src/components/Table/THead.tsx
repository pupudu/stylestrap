import { makeComponent } from '../../core/ruleEngine';

const THead = makeComponent('THead')
  .classNames(props => ({
    sticky: props.sticky,
  }))
  .styles(() => {
    return {}; // TODO change colors based on props
  })
  .create('thead');

export { THead };
