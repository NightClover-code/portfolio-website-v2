import { NextPage } from 'next';
import Project from '../components/Project';
import SEO from '../components/SEO';

import { seoConfigHome } from '../utils';

const HomePage: NextPage = () => {
  return (
    <>
      <SEO {...seoConfigHome} />
      <>
        <Project />
      </>
    </>
  );
};

export default HomePage;
