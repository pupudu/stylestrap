import { makeComponent } from '../../core';

export const BgImg = makeComponent('BgImg')
  .styles(props => ({
    backgroundImage: `url(${props.src})`,
    backgroundSize: 'cover',
  }))
  .create();
