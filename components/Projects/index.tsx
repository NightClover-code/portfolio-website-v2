import Image from 'next/image';
import { v4 } from 'uuid';
import { portfolioItems } from '../../utils/data';
import Content from '../Content';
import Tags from '../Tags';

const Projects = () => {
  const projectsConfig = {
    description: `
      I spend most of time building awesome products, either for myself or
      my clients. Here are some of my greatest projects:
    `,
    category: 'Portfolio',
    withLine: true,
  };

  const tags = ['Frontend', 'Backend', 'FullStack', 'UI / UX'];

  return (
    <section className="projects__section mt-44 mb-10">
      <div className="text-center m-auto flex flex-col items-center">
        <Content {...projectsConfig}>
          My latest <span>work</span>
        </Content>

        <Tags tags={tags} />
      </div>

      <div className="grid grid-cols-3 gap-7 mt-16">
        {portfolioItems.map(({ height, width, url, span }) => {
          return (
            <div
              key={v4()}
              className={`relative w-[${width}px] h-[${height}px] ${
                span ? 'row-span-2' : ''
              }`}
            >
              <Image
                src={`/images/portfolio/${url}`}
                alt="any"
                layout="fill"
                objectFit="cover"
                objectPosition="0 0"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
