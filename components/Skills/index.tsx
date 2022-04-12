import Content from '../Content';
import Tags from '../Tags';

const Skills = () => {
  const contentConfig = {
    category: 'Skills',
    description: `
      I always enjoy learning new things. 
      Especially the technologies that will get you a fast, modern and secure website.
      `,
    alignLeft: true,
  };

  const tags = ['Frontend', 'Backend', 'UI / UX'];

  return (
    <section className="skills__section">
      <Content {...contentConfig}>
        <h1>
          Technological <span>Skills</span>
        </h1>
      </Content>

      <Tags tags={tags} />
    </section>
  );
};

export default Skills;
