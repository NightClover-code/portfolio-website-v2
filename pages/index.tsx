import { GetStaticProps, NextPage } from 'next';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import Projects from '../components/Projects';
import SEO from '../components/SEO';
import Services from '../components/Services';
import Skills from '../components/Skills';
import { projectsQuery } from '../graphql';
import { ProjectInterface } from '../interfaces';
import { client } from '../lib';
import { seoConfigHome } from '../utils';

interface HomeProps {
  projects: ProjectInterface[];
}

const HomePage: NextPage<HomeProps> = ({ projects }) => {
  return (
    <>
      <SEO {...seoConfigHome} />
      <>
        <Hero />
        <Projects projects={projects} />
        <Skills />
        <Services />
        <Instagram />
      </>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: projectsQuery,
  });

  const projects = data.projects;

  return {
    props: {
      projects,
    },
  };
};

export default HomePage;
