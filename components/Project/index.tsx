import Image from 'next/image';
import Challenges from './Challenges';
import Content from './Content';

const Project = () => {
  const config = {
    title: 'Team App website',
    description: `
      Full website design and build for a concept team collaboration platform. This website also includes a beautiful blog. I’ve built the site from scratch using Next.js and GraphCMS.
    `,
  };

  return (
    <section className="project__details mt-28 mid:mt-24">
      <div className="flex flex-col justify-center">
        <Content {...config} />

        <div className="mt-20 m-auto shadow-portfolioCard">
          <Image
            src="/images/team.svg"
            height={3089}
            width={962}
            style={{ borderRadius: '8px' }}
            alt="random" //TODO
          />
        </div>
      </div>

      <Challenges />
    </section>
  );
};

export default Project;
