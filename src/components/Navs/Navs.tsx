import { makeComponent } from '../../core';

export const Nav = makeComponent('Nav')
  .classNames(props => ({
    nav: true,
    active: props.active,
    disabled: props.disabled,
    'nav-pills': props.pills,
    'nav-tabs': props.tabs,
  }))
  .forwardProps(props => ({
    parentTag: props.as || 'ul',
  }))
  .create('ul');

export const NavLink = makeComponent('NavLink')
  .classNames(props => ({
    'nav-link': true,
    'nav-item': props.parentTag,
    active: props.active,
  }))
  .create('a');

export const NavItem = makeComponent('NavLink')
  .classNames({
    'nav-item': true,
  })
  .create('li');
