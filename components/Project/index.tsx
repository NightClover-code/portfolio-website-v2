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

        <div className="mt-4">
          {project.showcaseImgs.map(({ alt, height, url, width }) => (
            <div
              className="overflow-hidden mt-14 mid:mt-10 rounded-[8px] m-auto shadow-portfolioCard projects__card"
              key={v4()}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Image width={width} height={height} src={url} alt={alt} />
            </div>
          ))}
        </div>
      </div>

      <Challenges challenge={challenge!} />

      <BuiltWith technologies={technologies!} />

      {/* <SimilarProjects /> */}
    </section>
  );
};

export default Project;
