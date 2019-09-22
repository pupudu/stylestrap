import { makeComponent } from '../../core';
import { BadgeProps } from './Types';

const Badge = makeComponent<BadgeProps>('Badge')
  .classNames(props => ({
    badge: true,
    'badge-pill': props.flavor === 'pill',
  }))
  .defaultProps({
    color: 'primary',
  })
  .styles((props, theme) => ({
    backgroundColor: props.color,
    color: theme.colorByLuminance(props.color),
  }))
  .props(props => ({
    as: props.href && 'a',
  }))
  .create('span');

export { Badge };
