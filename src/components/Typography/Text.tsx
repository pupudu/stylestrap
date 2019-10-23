import { makeComponent } from '../../core';
import { Div } from '../../core/SS';

interface TextProps extends Div {
  muted: boolean;
}

export const Text = makeComponent<TextProps>('Text')
  .classNames(props => ({
    'text-muted': props.muted,
  }))
  .create('p');
