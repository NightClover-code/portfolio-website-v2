import { GetStaticProps, NextPage } from 'next';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import Projects from '../components/Projects';
import SEO from '../components/SEO';
import Services from '../components/Services';
import Skills from '../components/Skills';
import { projectsQuery, skillsQuery } from '../graphql';
import { ProjectInterface, SkillInterface } from '../interfaces';
import { client } from '../lib';
import { seoConfigHome } from '../utils';

interface HomeProps {
  projects: ProjectInterface[];
  skills: SkillInterface[];
}

const HomePage: NextPage<HomeProps> = ({ projects, skills }) => {
  return (
    <>
      <SEO {...seoConfigHome} />
      <>
        <Hero />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Services />
        <Instagram />
      </>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { projects },
  } = await client.query({
    query: projectsQuery,
  });

  const {
    data: { skills },
  } = await client.query({
    query: skillsQuery,
  });

  return {
    props: {
      projects,
      skills,
    },
  };
};

export default HomePage;
