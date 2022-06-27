import { useState } from 'react';
import { v4 } from 'uuid';
import { SkillInterface } from '../../interfaces';
import Content from '../Content';
import Tags from '../Tags';
import Skill from './Skill';

interface SkillsProps {
  skills: SkillInterface[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const tags = ['All skills', 'Frontend', 'Backend'];

  const [activeTag, setActive] = useState<string>('All skills');

  const contentConfig = {
    category: 'Skills',
    description: `
      I always enjoy learning new things. 
      Especially the technologies that will get you a fast, modern and secure website.
      `,
    alignLeft: true,
  };

  const tagsConfig = {
    tags,
    activeTag,
    setActive,
  };

  return (
    <section className="skills__section global-mt flex items-center justify-between mb-20 gap-x-12 mid:flex-col mid:items-start mid:w-[600px] mid:mx-auto lg:w-full">
      <div data-aos="fade-right">
        <Content {...contentConfig}>
          Technological <span>Skills</span>
        </Content>

        <Tags className="xs:mt-8" {...tagsConfig} />
      </div>

      <div
        className="w-[48%] mid:mt-4 xs:mt-4 mid:w-full skills"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {skills.map(({ category, skillItems }) => {
          return category === activeTag
            ? skillItems.map(_item => <Skill {..._item} key={v4()} />)
            : '';
        })}
      </div>
    </section>
  );
};

export default Skills;
