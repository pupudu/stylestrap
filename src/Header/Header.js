import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../core/ruleEngine/withStyles';

const Navbar = withStyles(['Navbar', 'navbar'])();

const Header = props => <Navbar {...props} />;

Header.propTypes = {
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Header;
