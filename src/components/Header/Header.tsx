import { makeComponent } from '../../core';
import { Div } from '../../core/SS';

interface HeaderProps extends Div {
  minHeight: string | number;
}

const Header = makeComponent<HeaderProps>('Navbar')
  .classNames('navbar')
  .create();

export default Header;
