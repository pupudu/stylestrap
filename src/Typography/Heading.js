import PropTypes from 'prop-types';
import { withStyles } from '../core/ruleEngine';

const Heading = withStyles(
  ['Heading', 'heading'],
  (props, theme) => {
    const { size = 'h1' } = props;
    return {
      fontSize: theme.headingSizes[size]
    };
  },
  props => {
    const { size = 'h1', as: tag } = props;
    return {
      as: tag || size
    };
  }
)('h1');

Heading.propTypes = {
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};

export { Heading };
