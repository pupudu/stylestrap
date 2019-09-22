import { makeComponent, StylestrapComponent, ThemeColors } from '../../core';

export interface BadgeProps {
  /**
   * One of "primary", "secondary", "success", "warning", "danger", "info", "dark" or "light"
   * unless different color names are used in the theme object.
   */
  color?: ThemeColors;
  /**
   * Passing a value to this prop will convert the badge into an actionable
   * anchor tag.
   */
  href?: string;
  /**
   * Makes the badge rounded
   */
  flavor?: 'pill';
}
interface T extends BadgeProps, StylestrapComponent<HTMLSpanElement> {}

const Badge = makeComponent<T>('Badge')
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
