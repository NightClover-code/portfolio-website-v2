import Content from '../Content';
import Tags from '../Tags';
import TechSkills from './TechSkills';

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
    <section className="skills__section mt-44 flex items-center justify-between mb-20">
      <div>
        <Content {...contentConfig}>
          Technological <span>Skills</span>
        </Content>

        <Tags tags={tags} />
      </div>

      <TechSkills />
    </section>
  );
};

export default Skills;
