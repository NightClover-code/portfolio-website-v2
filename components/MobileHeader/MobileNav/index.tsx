import { v4 } from 'uuid';
import Link from 'next/link';
import { navItems } from '../../../utils';
import NavItem from '../NavItem';

const NavBar = () => {
  return (
    <nav className="mt-10">
      <ul className="flex flex-col items-start">
        {navItems.map(({ title, href, jumpOptions }) => {
          return (
            <NavItem href={href} jumpOptions={jumpOptions} key={v4()}>
              {title}
            </NavItem>
          );
        })}
        <li className="relative">
          <Link href="/contact" passHref>
            <button className="mt-10 contact__btn smooth hover:bg-blue hover:border-blue hover:text-offWhite">
              Contact me
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
