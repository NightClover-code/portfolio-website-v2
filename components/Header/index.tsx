import { useContext, useEffect } from 'react';
import { NavContext } from '../../context';
import { disableScroll, hideNav } from '../../utils';
import { Logo, MenuIcon } from '../Icons';
import NavBar from './NavBar';

const Header = () => {
  const { setIsNavOpen, isNavOpen } = useContext(NavContext);

  useEffect(() => {
    hideNav(setIsNavOpen);
  }, [setIsNavOpen]);

  useEffect(() => {
    disableScroll(isNavOpen);
  }, [isNavOpen]);

  return (
    <header className={`flex justify-between mt-10 items-center m-auto`}>
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
