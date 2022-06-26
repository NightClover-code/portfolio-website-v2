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

  const { setIsNavOpen } = useContext(NavContext);

  return (
    <div className="smooth fade-right absolute overflow-hidden bg-offWhite z-30 h-[100vh] max-w-[300px] w-[80%] shadow-lg top-0 left-0 pt-10">
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

        <CircleWaves left={-200} bottom={50} />

        <CircleWaves top={80} right={-200} className="rotate-[100deg]" />
      </div>
    </div>
  );
};

export default MobileHeader;
