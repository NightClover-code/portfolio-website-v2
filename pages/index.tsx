import { NextPage } from 'next';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import SEO from '../components/SEO';
import Skills from '../components/Skills';
import { seoConfigHome } from '../utils/config';

const HomePage: NextPage = () => {
  return (
    <>
      <SEO {...seoConfigHome} />
      <>
        <Hero />
        <Projects />
        <Skills />
      </>
    </>
  );
};

export default HomePage;
