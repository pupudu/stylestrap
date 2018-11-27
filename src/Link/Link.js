import React from 'react';
import { withStyles } from '../core/ruleEngine';

const Anchor = withStyles('Anchor', props => ({
  color: props.color,
  backgroundColor: 'transparent',
  textDecoration: {
    '&:hover': 'underline'
  }
}))('a');

Anchor.defaultProps = {
  href: '#',
  color: 'primary'
};

const Link = props => <Anchor {...props} className="btn" />;

export { Link, Anchor };
