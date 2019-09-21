import { makeComponent } from '../../core';

type ButtonToolbarProps = {
  vertical: boolean;
  margin: object;
  padding: object;
};

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
