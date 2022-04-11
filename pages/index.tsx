import { NextPage } from 'next';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import { seoConfigHome } from '../utils/config';

const HomePage: NextPage = () => {
  return (
    <>
      <SEO {...seoConfigHome} />
      <>
        <Hero />
      </>
    </>
  );
};

export default HomePage;
