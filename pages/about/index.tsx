import { NextPage } from 'next';
import About from '../../components/About';
import SEO from '../../components/SEO';
import { seoConfigHome } from '../../utils';

const AboutPage: NextPage = () => {
  return (
    <>
      <SEO {...seoConfigHome} />
      <>
        <About />
      </>
    </>
  );
};

export default AboutPage;
