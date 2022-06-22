import Image from 'next/image';
import BuiltWith from './BuiltWith';
import Challenges from './Challenges';
import Content from './Content';
import SimilarProjects from './Projects';

const Project = () => {
  const config = {
    title: 'Team App website',
    description: `
      Full website design and build for a concept team collaboration platform. This website also includes a beautiful blog. I’ve built the site from scratch using Next.js and GraphCMS.
    `,
  };

  return (
    <section className="project__details mt-28 mid:mt-24 px-[10%] xl:px-0">
      <div className="flex flex-col justify-center">
        <Content {...config} />

        <div className="mt-20 m-auto shadow-portfolioCard projects__card">
          <Image
            src="/images/team.jpg"
            height={4622}
            width={1440}
            style={{ borderRadius: '8px' }}
            alt="random" //TODO
          />
        </div>
      </div>

      <Challenges />

      <BuiltWith />

      <SimilarProjects />
    </section>
  );
};

export default Project;
