import { makeComponent, StylestrapComponent } from '../../core';

interface HeadingProps extends StylestrapComponent<HTMLHeadingElement> {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = makeComponent<HeadingProps>('Heading')
  .classNames('heading')
  .styles(({ size = 'h1' }, theme) => ({
    fontSize: theme.headingSizes[size],
  }))
  .props(({ size = 'h1', as: tag }) => ({
    as: tag || size,
  }))
  .create('h1');

export { Heading };
