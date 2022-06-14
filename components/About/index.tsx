import Image from 'next/image';

const About = () => {
  return (
    <section className="mid:mt-24 about__section flex justify-between items-center mt-32 mid2:flex-col mid2:justify-center">
      <div>
        <h4 className="text-[16px]">Personal Info</h4>
        <h1 className="text-[40px] mt-1">About Achraf</h1>
        <p>
          My name is Achraf and I&apos;m a <span>Full-stack developer</span> who
          loves to work with modern web technologies.
        </p>
        <p>
          My goal is to provide value to the large community of designers and
          developers.
        </p>
        <p>
          Ever since I started my web development journey, I like to stay busy
          and spend most of my days taking my skills to the next-level.
        </p>
        <p>
          If you need a <span>custom-made</span> website, an engaging landing
          page for your business, or a very complex web application idea:
        </p>
        <p>
          Please feel free to <span className="underline">contact me</span> to
          further discuss your project!
        </p>
      </div>

      <div className="relative">
        <div className="absolute -left-24 top-32 z-[100] tiny:hidden">
          <Image src="/images/waves.svg" width={181} height={116} alt="waves" />
        </div>

        <div className="absolute -right-20 bottom-12 z-[100] tiny:hidden">
          <Image src="/images/waves.svg" width={181} height={116} alt="waves" />
        </div>

        <div className="overflow-hidden mid2:mt-16">
          <Image
            src="/images/about.jpeg"
            width={418}
            height={574}
            objectFit="cover"
            objectPosition={'0 90%'}
            style={{ borderRadius: '8px' }}
            alt="random" //TODO
          />
        </div>
      </div>
    </section>
  );
};

export default About;
