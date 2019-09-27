import { makeComponent, SS } from '../../core';

interface HeaderProps extends SS.Div {
  minHeight: string | number;
}

const Header = makeComponent<HeaderProps>('Navbar')
  .classNames('navbar')
  .create();

export default Header;
