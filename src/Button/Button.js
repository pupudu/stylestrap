import PropTypes from 'prop-types';
import { withStyles, getStylesByFlavor } from '../core/ruleEngine';

const Button = withStyles(['Button', 'btn'], (props, theme) => {
  return getStylesByFlavor(props, theme, true);
})('button');

Button.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    'blend',
    'flip'
  ])
};

export { Button };
