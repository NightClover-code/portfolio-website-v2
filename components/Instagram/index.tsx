import Image from 'next/image';
import PrimaryButton from '../Buttons/Primary';
import Content from '../Content';

const Instagram = () => {
  const config = {
    description: `
      I regularly post content on Instagram. I write about anything related to coding, web design and development. Feel free to check it out.
    `,
    category: 'Socials',
    alignLeft: true,
  };

  return (
    <section className="instagram__section flex items-center justify-between global-mt gap-x-12 mid:flex-col mid:items-start mid:w-[590px] mid:mx-auto lg:w-full">
      <div data-aos="fade-up">
        <Content {...config}>
          Check out my{' '}
          <span className="bg-gradient-to-r from-instaFrom to-instaTo text-transparent bg-clip-text">
            Instagram
          </span>
        </Content>

        <a
          href="https://instagram.com/achrafdev"
          target="_blank"
          rel="noreferrer"
        >
          <PrimaryButton className="mt-8">Follow me</PrimaryButton>
        </a>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="mid:mt-10 max-w-[600px] mid2:max-w-[500px] mid:max-w-none"
      >
        <Image
          src="/images/instagram.jpg"
          width={6252}
          height={3556}
          objectFit="cover"
          alt="any" //TODO
        />
      </div>
    </section>
  );
};

export default Instagram;
