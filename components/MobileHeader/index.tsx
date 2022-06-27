import { useContext } from 'react';
import { NavContext } from '../../context';
import {
  CircleWaves,
  CloseIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  Logo,
} from '../Icons';
import Socials from '../Socials';
import MobileNavBar from './MobileNav';

const MobileHeader = () => {
  const Icons = [InstagramIcon, LinkedInIcon, GitHubIcon];

  const { setIsNavOpen, isNavOpen } = useContext(NavContext);

  return (
    <div
      className={`z-30 smooth fade-right absolute overflow-hidden bg-offWhite h-full max-w-[300px] w-[80%] shadow-navbar top-0 pt-10 !duration-300 ${
        isNavOpen ? 'left-0 opacity-100' : '-left-[100%] opacity-0'
      }`}
    >
      <div className="relative w-[75%] m-auto flex flex-col h-full">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="cursor-pointer" onClick={() => setIsNavOpen(false)}>
            <CloseIcon />
          </div>
        </div>
        <MobileNavBar />

        <div className="mx-auto mt-auto mb-10">
          <Socials Icons={Icons} className="ml-8" />
        </div>

        <CircleWaves left={-200} bottom={-80} />

        <CircleWaves top={80} right={-200} className="rotate-[100deg]" />
      </div>
    </div>
  );
};

export default MobileHeader;
