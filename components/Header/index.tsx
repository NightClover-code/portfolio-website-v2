import { Logo } from '../Icons';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="flex justify-between mt-10 items-center">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
