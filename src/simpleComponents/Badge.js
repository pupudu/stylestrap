import T from 'prop-types';
import { makeComponent } from '../core/ruleEngine';

const Badge = makeComponent('Badge')
  .classNames('badge')
  .styles((props, theme) => ({
    backgroundColor: props.color,
    color: theme.helpers.colorByLuminance(props.color, theme)
  }))
  .create('span');

Badge.propTypes = {
  color: T.string
};

export { Badge };
