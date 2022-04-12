import { NextPage } from 'next';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import SEO from '../components/SEO';
import { seoConfigHome } from '../utils/config';

const HomePage: NextPage = () => {
  return (
    <>
      <SEO {...seoConfigHome} />
      <>
        <Hero />
        <Projects />
      </>
    </>
  );
};

export default HomePage;
