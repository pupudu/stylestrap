import { makeComponent } from '../../core';

export const ListGroup = makeComponent('ListGroup')
  .classNames(props => ({
    'list-group': true,
    'list-group-flush': props.flush,
    'list-group-horizontal': props.horizontal,
  }))
  .create('ul');

export const ListGroupItem = makeComponent('ListGroupItem')
  .props(props => ({
    as: props.href ? 'a' : props.as,
    tabindex: props.as === 'a' && props.disabled ? '-1' : undefined,
  }))
  .classNames(props => ({
    'list-group-item': true,
    active: props.active,
    disabled: props.disabled,
    'aria-disabled': props.disabled,
    'list-group-item-action': props.as === 'a' || props.as === 'button',
  }))
  .create('li');
