import T from 'prop-types';
import { withStyles } from '../core/ruleEngine';

const Badge = withStyles(['Badge', 'badge'], (props, theme) => {
  return {
    backgroundColor: props.color,
    color: theme.helpers.colorByLuminance(props.color, theme)
  };
})('span');

Badge.propTypes = {
  color: T.string
};

export { Badge };
