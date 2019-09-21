import { makeComponent, getStylesByFlavor } from '../../core';

type ButtonProps = {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';
};

const Button = makeComponent<ButtonProps>('Button')
  .raw(
    `
      &.btn-xs {
        padding: 0.125rem 0.25rem;
        font-size: 0.75rem;
        line-height: 1.25;
        border-radius: 0.15rem;
      }
    `
  )
  .classNames(props => ({
    btn: true,
    'btn-block': props.block,
    [`btn-${props.size}`]: !!props.size,
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
