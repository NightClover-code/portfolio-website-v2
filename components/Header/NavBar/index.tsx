import NavItem from './NavItem';
import { v4 } from 'uuid';
import Link from 'next/link';

const NavBar = () => {
  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Portfolio' },
    { title: 'Skills' },
    { title: 'Services' },
    { title: 'About', href: '/about' },
  ];

  return (
    <nav className="mt-1 mid:hidden">
      <ul className="flex items-center">
        {navItems.map(({ title, href }) => {
          return (
            <NavItem href={href} key={v4()}>
              {title}
            </NavItem>
          );
        })}
        <li className="relative">
          <Link href="/contact" passHref>
            <button className="contact__btn smooth hover:bg-blue hover:border-blue hover:text-offWhite">
              Contact me
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
