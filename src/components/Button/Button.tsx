import { makeComponent, getStylesByFlavor } from '../../core';

type ButtonProps = {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'blend' | 'flip';
};

const Button = makeComponent<ButtonProps>('Button')
  .classNames(props => ({
    btn: true,
    'btn-xs': props.size === 'xs', // TODO This needs to be supported
    'btn-sm': props.size === 'sm',
    'btn-lg': props.size === 'lg',
    'btn-block': props.block,
  }))
  .defaultProps({ color: 'primary' })
  .styles((props, theme) => getStylesByFlavor(props, theme, true))
  .create('button');

export { Button };
