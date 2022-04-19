import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  Logo,
  MailIcon,
} from '../Icons';
import Socials from '../Socials';

const Footer = () => {
  const icons = [MailIcon, InstagramIcon, LinkedInIcon, GitHubIcon];

  return (
    <footer className="mt-52 mb-6">
      <div className="flex justify-between">
        <div className="max-w-[400px]">
          <h1>Let’s start working on your project</h1>
          <p className="mt-4">
            I am currently <span className="text-lightBlue">available</span> for
            work.
          </p>
          <p className="mt-4">
            Feel free to reach out if you&apos;re looking for a web designer or
            developer, or simply want to connect.
          </p>
        </div>

        <div className="mt-3 text-center px-14 rounded-full flex w-44 h-44 flex-col items-center justify-center border-dotted border-2 border-black">
          <h4 className="text-[14px] uppercase tracking-[3px] font-medium">
            Project
          </h4>
          <h2 className="leading-[35px] mt-1">Contact Achraf</h2>
        </div>
      </div>

      <div className="flex items-center justify-between mt-24">
        <Logo />

        <p className="text-[14px]">
          &copy; Achraf Elmouhib 2022. All rights reserved.
        </p>

        <Socials Icons={icons} />
      </div>
    </footer>
  );
};

export default Footer;