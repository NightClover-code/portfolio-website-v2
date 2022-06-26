import { useState } from 'react';
import { v4 } from 'uuid';
import { ProjectInterface } from '../../interfaces';
import Content from '../Content';
import Tags from '../Tags';
import PortolioItem from './Item';

interface ProjectsProps {
  projects: ProjectInterface[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const tags = ['Frontend', 'Backend', 'FullStack'];

  const [activeTag, setActive] = useState<string>('Frontend');

  const config = {
    description: `
      I spend most of time building awesome products, either for myself or
      my clients. Here are some of my greatest projects:
    `,
    category: 'Portfolio',
    withLine: true,
  };

  const tagsConfig = {
    tags,
    activeTag,
    setActive,
  };

  return (
    <section className="projects__section global-mt mb-10">
      <div className="center__content" data-aos="fade-up">
        <Content {...config}>
          My latest <span>work</span>
        </Content>

        <Tags {...tagsConfig} />
      </div>

      <div className="grid grid-cols-1 gap-y-12 mid:mt-8 xs:mt-16 xs:gap-y-14">
        {projects.map(({ category, projectItems }) => {
          return category === activeTag
            ? projectItems.map((_item, i) => (
                <PortolioItem
                  order={i}
                  key={v4()}
                  activeTag={activeTag}
                  {..._item}
                />
              ))
            : '';
        })}
      </div>
    </section>
  );
};

export default Projects;
