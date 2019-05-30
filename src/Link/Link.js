import React from 'react';
import { withStyles } from '../core/ruleEngine';

const getOnClickAnchor = onClick => e => {
  e.preventDefault();
  onClick(e);
  return false;
};

const Anchor = withStyles(
  'Anchor',
  props => ({
    color: props.color,
    backgroundColor: 'transparent',
    textDecoration: {
      '&:hover': 'underline'
    }
  }),
  ({ onClick }) => ({
    onClick: getOnClickAnchor(onClick)
  })
)('a');

Anchor.defaultProps = {
  href: '#',
  color: 'primary'
};

const Link = props => <Anchor {...props} className="btn" />;

export { Link, Anchor };
