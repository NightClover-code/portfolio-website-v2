import Image from 'next/image';
import { v4 } from 'uuid';
import { ProjectItemInterface } from '../../interfaces';
import BuiltWith from './BuiltWith';
import Challenges from './Challenges';
import Content from './Content';

interface ProjectProps {
  project: ProjectItemInterface;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const { richTitle, description, link, challenge, technologies } =
    project.content;

  const contentConfig = {
    richTitle,
    description,
    link,
  };

  return (
    <section className="project__details mt-28 mid:mt-24 px-[10%] xl:px-0">
      <div className="flex flex-col justify-center">
        <Content {...contentConfig} />

        {project.showcaseImgs.map(({ alt, height, url, width }) => (
          <div
            className="overflow-hidden rounded-[8px] mt-20 m-auto shadow-portfolioCard projects__card"
            key={v4()}
          >
            <Image width={width} height={height} src={url} alt={alt} />
          </div>
        ))}
      </div>

      <Challenges challenge={challenge!} />

      <BuiltWith technologies={technologies!} />

      {/* <SimilarProjects /> */}
    </section>
  );
};

export default Project;
