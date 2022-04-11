import React from 'react';
import PrimaryButton from '../Buttons/Primary';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from '../Icons/Socials';
import Socials from '../Socials';

const Hero = () => {
  const socialsIcons = [InstagramIcon, LinkedInIcon, GitHubIcon];

  return (
    <section className="hero__section mt-28">
      <div className="max-w-[570px]">
        <Socials Icons={socialsIcons} />
        <h1 className="text-[40px] mt-5">
          Hi, I’m Achraf, FullStack Web <span>Developer</span> and UI/UX{' '}
          <span>Designer</span>
        </h1>
        <p className="mt-5 text-[18px] max-w-[515px]">
          I design and build beautiful websites for businesses around the globe.
          If you need a modern and powerful website, send me an email. If we are
          a good fit, I will give you a time and cost estimate.
        </p>

        <PrimaryButton className="mt-10">See my work</PrimaryButton>
      </div>
    </section>
  );
};

export default Hero;
