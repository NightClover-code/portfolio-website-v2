import Content from './Content';

const Project = () => {
  const config = {
    title: 'Team App website',
    description: `
      Full website design and build for a concept team collaboration platform. This website also includes a beautiful blog. I’ve built the site from scratch using Next.js and GraphCMS.
    `,
  };

  return (
    <section className="project__details mt-28 mid:mt-24">
      <Content {...config} />
    </section>
  );
};

export default Project;
