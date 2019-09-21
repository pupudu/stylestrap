import { makeComponent, getStylesByFlavor } from '../../core';

type ButtonProps = {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';
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

type ButtonGroupProps = {
  vertical: boolean;
  margin: object;
  padding: object;
};

const ButtonGroup = makeComponent<ButtonGroupProps>('ButtonGroup')
  .classNames(props => ({
    'btn-group': !props.vertical,
    'btn-group-vertical': props.vertical,
  }))
  .defaultProps({
    role: 'group',
  })
  .styles(props => ({
    margin: props.margin,
    padding: props.padding,
  }))
  .create();

type ButtonToolbarProps = {
  vertical: boolean;
  margin: object;
  padding: object;
};

const ButtonToolbar = makeComponent<ButtonToolbarProps>('ButtonToolbar')
  .classNames('btn-toolbar')
  .defaultProps({
    role: 'toolbar',
  })
  .styles(props => ({
    margin: props.margin,
    padding: props.padding,
  }))
  .create();

export { Button, ButtonGroup, ButtonToolbar };
