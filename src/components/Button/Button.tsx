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

type ButtonGroupProps = {
  vertical: boolean;
  label: string;
  margin: object;
  padding: object;
};

const ButtonGroup = makeComponent<ButtonGroupProps>('ButtonGroup')
  .classNames(props => ({
    'btn-group': true,
    'btn-group-vertical': props.vertical,
  }))
  .defaultProps({
    role: 'group',
    label: 'Button Group',
  })
  .props(props => ({
    'aria-label': props.label,
  }))
  .styles(props => ({
    margin: props.margin,
    padding: props.padding,
  }))
  .create();

type ButtonToolbarProps = {
  vertical: boolean;
  label: string;
  margin: object;
  padding: object;
};

const ButtonToolbar = makeComponent<ButtonToolbarProps>('ButtonToolbar')
  .classNames('btn-toolbar')
  .defaultProps({
    role: 'toolbar',
    label: 'Button Toolbar',
  })
  .props(props => ({
    'aria-label': props.label,
  }))
  .styles(props => ({
    margin: props.margin,
    padding: props.padding,
  }))
  .create();

export { Button, ButtonGroup, ButtonToolbar };
