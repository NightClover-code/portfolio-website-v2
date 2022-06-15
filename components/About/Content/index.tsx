import { GitHubIcon, InstagramIcon, LinkedInIcon } from '../../Icons';
import Socials from '../../Socials';

const Content = () => {
  const Icons = [InstagramIcon, LinkedInIcon, GitHubIcon];

  return (
    <div>
      <h4 className="text-[16px]">Personal Info</h4>
      <h1 className="text-[40px] mt-1 xs:text-[36px]">About Achraf</h1>
      <div className="mt-4 max-w-[550px]">
        <p>
          My name is Achraf and I&apos;m a <span>Full-stack developer</span> who
          loves to work with modern web technologies.
        </p>
        <p>
          My goal is to provide value to the large community of designers and
          developers.
        </p>
        <p>
          Ever since I started my web development journey, I like to stay busy
          and spend most of my days taking my skills to the next-level.
        </p>
        <p>
          If you need a <span>custom-made</span> website, an engaging landing
          page for your business, or a very complex web application idea:
        </p>
        <p>
          Please feel free to <span className="underline">contact me</span> to
          further discuss your project!
        </p>
      </div>

      <Socials Icons={Icons} />
    </div>
  );
};

export default Content;
