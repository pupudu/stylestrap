import PropTypes from 'prop-types';
import { makeComponent, getStylesByFlavor } from '../core/ruleEngine';
import styles from './Button.css';

const Button = makeComponent('Button')
  .classNames(props => ({
    btn: true,
    [styles['btn-xs']]: props.size === 'xs', // TODO this looks weird. Possible bug?
    'btn-sm': props.size === 'sm',
    'btn-lg': props.size === 'lg',
    'btn-block': props.block
  }))
  .styles((props, theme) =>
    getStylesByFlavor({ color: 'primary', ...props }, theme, true)
  )
  .create('button');

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
