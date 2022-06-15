import { NextPage } from 'next';
import Contact from '../../components/Contact';
import SEO from '../../components/SEO';
import { seoConfigHome } from '../../utils';

const HomePage: NextPage = () => {
  return (
    <>
      <SEO {...seoConfigHome} />
      <>
        <Contact />
      </>
    </>
  );
};

export default HomePage;
