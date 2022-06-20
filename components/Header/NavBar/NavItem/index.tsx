import Link from 'next/link';

interface NavItemInterface {
  href?: string;
}

const NavItem: React.FC<NavItemInterface> = ({ children, href }) => {
  return (
    <>
      {href && (
        <Link href={href} passHref>
          <li className="leading-[21px] smooth relative mx-4 cursor-pointer font-medium hover:text-blue after:absolute after:left-[50%] after:bottom-[-3px] after:translate-x-[-50%] after:scale-x-0 after:h-[1.5px] after:bg-blue after:transition-all after:duration-[270ms] after:w-[96%] hover:after:translate-x-[-50%] hover:after:scale-100 xl:mx-3 xl:text-[15px]">
            {children}
          </li>
        </Link>
      )}
    </>
  );
};

export default NavItem;
