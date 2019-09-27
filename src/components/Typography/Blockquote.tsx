import { makeComponent } from '../../core';
import { Text } from './Text';

export const Blockquote = makeComponent('Blockquote')
  .defaultProps({
    as: 'blockquote',
  })
  .classNames('blockquote')
  .create(Text);

export const BlockquoteText = makeComponent('BlockquoteText')
  .defaultProps({
    as: 'p',
  })
  .create(Text);

export const BlockquoteFooter = makeComponent('BlockquoteFooter')
  .defaultProps({
    as: 'footer',
  })
  .classNames('blockquote-footer')
  .create(Text);
