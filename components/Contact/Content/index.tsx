import { GitHubIcon, InstagramIcon, LinkedInIcon } from '../../Icons';
import Socials from '../../Socials';

const Content = () => {
  const Icons = [InstagramIcon, LinkedInIcon, GitHubIcon];

  return (
    <div>
      <h4 className="text-[16px]">Contact</h4>
      <h1 className="text-[40px] mt-1 xs:text-[36px]">Get in touch</h1>
      <div className="mt-4 max-w-[445px]">
        <p>
          Feel free to fill the contact form on the right to get in touch with
          me.
        </p>
        <p>
          Being for a project, a part-time role, a speaking engagement or simply
          to say hello, I&apos;m always happy and looking forward to hearing
          from you.
        </p>
      </div>

      <Socials Icons={Icons} />
    </div>
  );
};

export default Content;
