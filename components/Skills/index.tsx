import { useContext } from 'react';
import { v4 } from 'uuid';
import { TagsContext } from '../../context';
import { skills } from '../../utils';
import Content from '../Content';
import Tags from '../Tags';
import Skill from './Skill';

const Skills = () => {
  const category = 'Skills';

  const contentConfig = {
    category: 'Skills',
    description: `
      I always enjoy learning new things. 
      Especially the technologies that will get you a fast, modern and secure website.
      `,
    alignLeft: true,
  };

  const tags = ['All skills', 'Frontend', 'Backend'];

  const { activeTags } = useContext(TagsContext);

  const [activeTag] = activeTags.filter(_tag => _tag.category === category);

  return (
    <section className="skills__section global-mt flex items-center justify-between mb-20 gap-x-12 mid:flex-col mid:items-start mid:w-[600px] mid:mx-auto lg:w-full">
      <div>
        <Content {...contentConfig}>
          Technological <span>Skills</span>
        </Content>

        <Tags tags={tags} className="xs:mt-8" category="Skills" />
      </div>

      <div className="w-[48%] mid:mt-4 xs:mt-4 mid:w-full">
        {skills.map(_item => {
          return _item.category === activeTag.tag
            ? _item.items.map((_item_, i) => <Skill {..._item_} key={v4()} />)
            : '';
        })}
      </div>
    </section>
  );
};

export default Skills;
