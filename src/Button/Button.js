import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, getStylesByFlavor } from '../core/ruleEngine';
import './Button.css';

const Button = withStyles(
  [
    'Button',
    props =>
      classNames({
        btn: true,
        'btn-xs': props.size === 'xs',
        'btn-sm': props.size === 'sm',
        'btn-lg': props.size === 'lg',
        'btn-block': props.block
      })
  ],
  (props, theme) => {
    return getStylesByFlavor({ color: 'primary', ...props }, theme, true);
  }
)('button');

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
