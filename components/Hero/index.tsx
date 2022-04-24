import Image from 'next/image';
import React from 'react';
import PrimaryButton from '../Buttons/Primary';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from '../Icons';
import Socials from '../Socials';

const Hero = () => {
  const socialsIcons = [InstagramIcon, LinkedInIcon, GitHubIcon];

  return (
    <section className="hero__section mt-32 flex items-center justify-between hero2:flex-col hero:items-start">
      <div className="max-w-[570px]">
        <Socials Icons={socialsIcons} />

        <h1 className="text-[40px] mt-5 xxl:text-[36px] xxl:max-w-[463px] xxl:leading-[50px] hero:text-[33px] hero:leading-[46px]">
          Hi, I’m Achraf, FullStack Web <span>Developer</span> and UI/UX{' '}
          <span>Designer</span>
        </h1>

        <p className="mt-5 text-[18px] max-w-[515px] xxl:text-[17px] xxl:max-w-[440px] ">
          I design and build beautiful websites for businesses around the globe.
          If you need a modern and powerful website, send me an email. If we are
          a good fit, I will give you a time and cost estimate.
        </p>

        <PrimaryButton className="mt-10">See my work</PrimaryButton>
      </div>

      <div className="relative">
        <div className="border-2 border-heroBorder p-6 rounded-full border-dotted">
          <div className="relative rounded-full w-[375px] h-[375px] xxl:w-[340px] xxl:h-[340px] overflow-hidden hero:w-[300px] hero:h-[300px]">
            <Image
              src="/images/profile.jpeg"
              layout="fill"
              alt="profile" //TODO
              objectFit="cover"
              priority
            />
          </div>
        </div>

        <div className="absolute top-16 left-[-70px] z-[-1]">
          <Image src="/images/waves.svg" width={181} height={116} alt="waves" />
        </div>

        <div className="absolute bottom-[-70px] right-[-50px] z-[-1]">
          <Image
            src="/images/circle-waves.svg"
            width={250}
            height={250}
            alt="circle-waves"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
