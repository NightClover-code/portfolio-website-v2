import { NextPage } from 'next';
import Contact from '../../components/Contact';
import SEO from '../../components/SEO';
import { seoConfigContact } from '../../utils';

const HomePage: NextPage = () => {
  return (
    <>
      <SEO {...seoConfigContact} />
      <>
        <Contact />
      </>
    </>
  );
};

export default HomePage;
