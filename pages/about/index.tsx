import { NextPage } from 'next';
import About from '../../components/About';
import SEO from '../../components/SEO';
import { seoConfigAbout } from '../../utils';

const AboutPage: NextPage = () => {
  return (
    <>
      <SEO {...seoConfigAbout} />
      <>
        <About />
      </>
    </>
  );
};

export default AboutPage;
