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

        <div className="overflow-hidden rounded-[8px] mt-20 m-auto shadow-portfolioCard projects__card">
          <Image
            src="/images/showcase/frontend/team.png"
            height={4620}
            width={1440}
            alt="random" //TODO
          />
        </div>
      </div>

      <Challenges />

      <BuiltWith />

      {/* <SimilarProjects /> */}
    </section>
  );
};

export default Project;
