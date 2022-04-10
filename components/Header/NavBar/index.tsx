import NavItem from './NavItem';
import { v4 } from 'uuid';

const NavBar = () => {
  const navItems = ['Home', 'Portfolio', 'Skills', 'Services', 'About', 'Blog'];

  return (
    <nav>
      <ul className="flex">
        {navItems.map(_item => {
          return <NavItem key={v4()}>{_item}</NavItem>;
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
