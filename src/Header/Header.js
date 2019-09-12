import React from 'react';
import PropTypes from 'prop-types';
import { makeComponent } from '../core/ruleEngine';

const Navbar = makeComponent('Navbar')
  .classNames('navbar')
  .create();

const Header = props => <Navbar {...props} />;

Header.propTypes = {
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Header;
