import Image from 'next/image';
import { useWindowWidth } from '../../hooks';
import PrimaryButton from '../Buttons/Primary';
import Content from '../Content';

const Instagram = () => {
  const _width = useWindowWidth();

  const config = {
    description: `
      I regularly post content on Instagram. I write about anything related to coding, web design and development. Feel free to check it out.
    `,
    category: 'Socials',
    alignLeft: true,
  };

  return (
    <section className="instagram__section flex items-center justify-between mt-52 gap-x-12 mid:flex-col mid:items-start mid:w-[590px] mid:mx-auto lg:w-full">
      <div>
        <Content {...config}>
          Check out my{' '}
          <span className="bg-gradient-to-r from-instaFrom to-instaTo text-transparent bg-clip-text">
            Instagram
          </span>
        </Content>

        <PrimaryButton className="mt-8">Follow me</PrimaryButton>
      </div>

      <div className="mid:mt-8">
        <Image
          src="/images/instagram-pics.svg"
          width={589}
          height={335}
          objectFit="contain"
          alt="any" //TODO
        />
      </div>
    </section>
  );
};

export default Instagram;
