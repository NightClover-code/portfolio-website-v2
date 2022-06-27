import jump from 'jump.js';
import Image from 'next/image';
import React from 'react';
import PrimaryButton from '../Buttons/Primary';
import {
  CircleWaves,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  Waves,
} from '../Icons';
import Socials from '../Socials';

const Hero = () => {
  const socialsIcons = [InstagramIcon, LinkedInIcon, GitHubIcon];

  const onClickHandler = () => {
    jump('.projects__section', {
      offset: -140,
      duration: 1000,
    });
  };

  return (
    <section className="hero__section mt-32 mid:mt-24 flex items-center justify-between mid:flex-col mid:items-center">
      <div className="max-w-[570px]" data-aos="fade-up">
        <Socials Icons={socialsIcons} />

        <h1 className="text-[40px] mt-5 xxl:text-[36px] xxl:max-w-[463px] mid:max-w-none xxl:leading-[50px] mid:text-[40px] xs:text-[36px]">
          Hi, I’m Achraf, FullStack Web <span>Developer</span> and UI/UX{' '}
          <span>Designer</span>
        </h1>

        <p className="mt-5 text-[18px] max-w-[515px] xxl:text-[17px] xxl:max-w-[440px] mid:text-[16px]">
          I design and build beautiful websites for businesses around the globe.
          If you need a modern and powerful website, send me an email. If we are
          a good fit, I will give you a time and cost estimate.
        </p>

        <PrimaryButton
          onClick={onClickHandler}
          className="mt-10 mid:mt-8 xs:mt-6"
        >
          See my work
        </PrimaryButton>
      </div>

      <div
        className="relative mid:mt-12"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <div className="border-2 border-heroBorder p-6 rounded-full border-dotted xs:p-4">
          <div className="rounded-full max-w-[375px] max-h-[375px] mid:max-w-[400px] mid:max-h-[400px] xl:max-w-[300px] xl:max-h-[300px] overflow-hidden flex items-center">
            <Image
              src="/images/profile.jpeg"
              layout="intrinsic"
              width={900}
              height={900}
              alt="profile"
              objectFit="cover"
              priority
            />
          </div>
        </div>

        <Waves left={-70} top={64} />

        <CircleWaves
          bottom={-70}
          right={-50}
          className="xs:bottom-[-20px] xs:right-[-20px]  xs:max-w-[220px] xs:max-h-[220px] tiny:hidden"
        />
      </div>
    </section>
  );
};

export default Hero;
