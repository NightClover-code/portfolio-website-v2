import Image from 'next/image';
import { ProjectItemInterface } from '../../interfaces';
import BuiltWith from './BuiltWith';
import Challenges from './Challenges';
import Content from './Content';

interface ProjectProps {
  project: ProjectItemInterface;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const { richTitle, description, link } = project.content;

  const contentConfig = {
    richTitle,
    description,
    link,
  };

  return (
    <section className="project__details mt-28 mid:mt-24 px-[10%] xl:px-0">
      <div className="flex flex-col justify-center">
        <Content {...contentConfig} />

        <div className="overflow-hidden rounded-[8px] mt-20 m-auto shadow-portfolioCard projects__card">
          <Image
            src="/images/showcase/frontend/team.webp"
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
