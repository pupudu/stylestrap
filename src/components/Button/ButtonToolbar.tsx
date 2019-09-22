import { makeComponent, StylestrapComponent } from '../../core';

export interface ButtonToolbarPropsBase {
  margin: object;
  padding: object;
}

interface ButtonToolbarProps extends ButtonToolbarPropsBase, StylestrapComponent {}

export const ButtonToolbar = makeComponent<ButtonToolbarProps>('ButtonToolbar')
  .classNames('btn-toolbar')
  .defaultProps({
    role: 'toolbar',
  })
  .styles(props => ({
    margin: props.margin,
    padding: props.padding,
  }))
  .create();
