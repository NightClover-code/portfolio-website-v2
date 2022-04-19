const NavItem: React.FC = ({ children }) => {
  return (
    <li className="leading-[22px] smooth relative mx-5 cursor-pointer font-semibold hover:text-blue after:absolute after:left-[50%] after:bottom-[-3px] after:translate-x-[-50%] after:scale-x-0 after:h-[1.5px] after:bg-blue after:transition-all after:duration-300 after:w-[96%] hover:after:translate-x-[-50%] hover:after:scale-100">
      {children}
    </li>
  );
};

export default NavItem;
