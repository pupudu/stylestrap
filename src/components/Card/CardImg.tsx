import { makeComponent } from '../../core';

export const CardImg = makeComponent('CardImg')
  .classNames(props => ({
    'card-img': props.rounded === true,
    'card-img-top': props.rounded === 'top',
    'card-img-bottom': props.rounded === 'bottom',
  }))
  .styles({
    width: '100%',
  })
  .create('img');
