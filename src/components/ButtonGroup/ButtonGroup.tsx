import { makeComponent } from '../../core';
import { ButtonGroupProps } from './Types';

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
