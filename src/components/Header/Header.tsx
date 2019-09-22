import { makeComponent, StylestrapComponent } from '../../core';

interface HeaderProps extends StylestrapComponent {
  minHeight: string | number;
}

const Header = makeComponent<HeaderProps>('Navbar')
  .classNames('navbar')
  .create();

export default Header;
