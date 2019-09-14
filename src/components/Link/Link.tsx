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
  .props(({ onClick }) => ({
    onClick: getOnClickAnchor(onClick),
    href: '#',
    color: 'primary',
  }))
  .create('a');

const Link = props => <Anchor {...props} className="btn" />;

export { Link, Anchor };
