import { Logo } from '../Icons';
import { MenuIcon } from '../Icons/NavBar';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="flex justify-between mt-10 items-center">
      <Logo />
      <NavBar />
      <MenuIcon />
    </header>
  );
};

export default Header;
