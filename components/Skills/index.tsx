import Content from '../Content';
import Tags from '../Tags';
import SkillsGrid from './SkillsGrid';

const Skills = () => {
  const contentConfig = {
    category: 'Skills',
    description: `
      I always enjoy learning new things. 
      Especially the technologies that will get you a fast, modern and secure website.
      `,
    alignLeft: true,
  };

  const tags = ['All skills', 'Frontend', 'Backend'];

  return (
    <section className="skills__section mt-44 flex items-center justify-between mb-20 gap-x-12 mid:flex-col mid:items-start mid:w-[600px] mid:mx-auto lg:w-full">
      <div>
        <Content {...contentConfig}>
          Technological <span>Skills</span>
        </Content>

        <Tags tags={tags} />
      </div>

      <SkillsGrid />
    </section>
  );
};

export default Skills;
