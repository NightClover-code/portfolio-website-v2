import React from 'react';
import PrimaryButton from '../Buttons/Primary';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from '../Icons/Socials';
import Socials from '../Socials';

const Hero = () => {
  const socialsIcons = [InstagramIcon, LinkedInIcon, GitHubIcon];

  return (
    <section className="hero__section">
      <Socials Icons={socialsIcons} />

      <h1>Hi, I’m Achraf, FullStack Web Developer and UI/UX Designer</h1>
      <p>
        I design and build beautiful websites for businesses around the globe.
        If you need a modern and powerful website, send me an email. If we are a
        good fit, I will give you a time and cost estimate.
      </p>

      <PrimaryButton>See my work</PrimaryButton>
    </section>
  );
};

export default Hero;
