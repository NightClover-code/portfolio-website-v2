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
    <section className="instagram__section flex items-center justify-between mt-52">
      <div>
        <Content {...config}>
          Check out my <span>Instagram</span>
        </Content>

        <PrimaryButton className="mt-8">Follow me</PrimaryButton>
      </div>

      <Image
        src="/images/instagram-pics.svg"
        width={589}
        height={335}
        objectFit="contain"
        alt="any" //TODO
      />
    </section>
  );
};

export default Instagram;
