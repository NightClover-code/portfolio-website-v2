import Image from 'next/image';
import { Waves } from '../Icons';
import Content from './Content';

const About = () => {
  return (
    <section className="mid:mt-24 about__section flex justify-between items-center mt-32 mid2:flex-col mid2:justify-center">
      <Content />

      <div className="relative">
        <Waves left={-96} top={128} />

        <Waves right={-80} bottom={48} />

        <div
          className="overflow-hidden mid2:mt-16"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Image
            src="/images/about.jpeg"
            layout="intrinsic"
            width={418}
            height={574}
            objectFit="cover"
            style={{ borderRadius: '8px' }}
            objectPosition={'0 90%'}
            alt="random" //TODO
          />
        </div>
      </div>
    </section>
  );
};

export default About;
