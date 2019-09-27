import { makeComponent, SS } from '../../core';

interface TextProps extends SS.Div {
  muted: boolean;
}

export const Text = makeComponent<TextProps>('Text')
  .classNames(props => ({
    'text-muted': props.muted,
  }))
  .create('p');
