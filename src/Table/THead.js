import { withStyles } from '../core/ruleEngine';
import classnames from 'classnames';

const THead = withStyles(
  [
    'THead',
    props =>
      classnames({
        sticky: props.sticky
      })
  ],
  props => {
    return {}; // TODO change colors based on props
  }
)('thead');

THead.propTypes = {};

export { THead };
