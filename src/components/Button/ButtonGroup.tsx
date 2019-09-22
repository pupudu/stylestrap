import { makeComponent, StylestrapComponent } from '../../core';

export interface ButtonGroupPropsBase {
  vertical: boolean;
  margin: object;
  padding: object;
}

interface ButtonGroupProps extends ButtonGroupPropsBase, StylestrapComponent {}

export const ButtonGroup = makeComponent<ButtonGroupProps>('ButtonGroup')
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
