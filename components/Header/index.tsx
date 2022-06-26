import { useContext } from 'react';
import { NavContext } from '../../context';
import { Logo, MenuIcon } from '../Icons';
import NavBar from './NavBar';

const Header = () => {
  const { setIsNavOpen } = useContext(NavContext);

  return (
    <header className="flex justify-between mt-10 items-center">
      <Logo />
      <NavBar />
      <div
        className="menu hidden mid:block cursor-pointer"
        onClick={() => setIsNavOpen(true)}
      >
        <MenuIcon />
      </div>
    </header>
  );
};

export default Header;
