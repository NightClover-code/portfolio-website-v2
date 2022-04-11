import React from 'react';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from '../Icons/Socials';
import Socials from '../Socials';

const Hero = () => {
  const socialsIcons = [InstagramIcon, LinkedInIcon, GitHubIcon];

  return (
    <section className="hero__section">
      <Socials Icons={socialsIcons} />
    </section>
  );
};

export default Hero;
