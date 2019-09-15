import React from 'react';
import { makeComponent } from '../../core';

const Navbar = makeComponent('Navbar')
  .classNames('navbar')
  .create();

type HeaderProps = {
  minHeight: string | number;
};

const Header: React.FC<HeaderProps> = props => <Navbar {...props} />;

export default Header;
