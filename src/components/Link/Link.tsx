import React from 'react';
import { makeComponent } from '../../core/ruleEngine';

const getOnClickAnchor = onClick => e => {
  e.preventDefault();
  onClick(e);
  return false;
};

const Anchor = makeComponent('Anchor')
  .styles(props => ({
    color: props.color,
    backgroundColor: 'transparent',
    textDecoration: {
      '&:hover': 'underline',
    },
  }))
  .defaultProps({
    color: 'primary',
    href: '#',
  })
  .props(({ onClick }) => ({
    onClick: getOnClickAnchor(onClick),
  }))
  .create('a');

const Link = props => <Anchor {...props} className="btn" />;

export { Link, Anchor };
