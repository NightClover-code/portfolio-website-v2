import NavItem from './NavItem';
import { v4 } from 'uuid';

const NavBar = () => {
  const navItems = ['Home', 'Portfolio', 'Skills', 'Services', 'About', 'Blog'];

  return (
    <nav className="mt-1">
      <ul className="flex items-center">
        {navItems.map(_item => {
          return <NavItem key={v4()}>{_item}</NavItem>;
        })}
        <li>
          <button className="contact__btn smooth hover:bg-black hover:text-offWhite">
            Contact me
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
