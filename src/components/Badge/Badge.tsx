import { makeComponent, StylestrapComponent, ThemeColors } from '../../core';

interface Badge extends StylestrapComponent<HTMLSpanElement> {
  color?: ThemeColors;
  href?: string;
  variant?: 'pill' | string;
}

const Badge = makeComponent<Badge>('Badge')
  .classNames(props => ({
    badge: true,
    'badge-pill': props.variant === 'pill',
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
