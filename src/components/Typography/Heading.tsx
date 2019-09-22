import { makeComponent } from '../../core';

type Heading = {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Heading = makeComponent<Heading>('Heading')
  .classNames('heading')
  .styles(({ size = 'h1' }, theme) => ({
    fontSize: theme.headingSizes[size],
  }))
  .props(({ size = 'h1', as: tag }) => ({
    as: tag || size,
  }))
  .create('h1');

export { Heading };
