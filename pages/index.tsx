import { NextPage } from 'next';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import Projects from '../components/Projects';
import SEO from '../components/SEO';
import Services from '../components/Services';
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
        <Services />
        <Instagram />
      </>
    </>
  );
};

export default HomePage;
