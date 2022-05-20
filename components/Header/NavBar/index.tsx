import NavItem from './NavItem';
import { v4 } from 'uuid';

const NavBar = () => {
  const navItems = ['Home', 'Portfolio', 'Skills', 'Services', 'About'];

  return (
    <nav className="mt-1 mid:hidden">
      <ul className="flex items-center">
        {navItems.map(_item => {
          return <NavItem key={v4()}>{_item}</NavItem>;
        })}
        <li className="relative">
          <button className="contact__btn smooth hover:bg-blue hover:border-blue hover:text-offWhite">
            Contact me
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
