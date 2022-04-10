import { NextPage } from 'next';
import SEO from '../components/SEO';
import { seoConfigHome } from '../utils/config';

const HomePage: NextPage = () => {
  return (
    <>
      <SEO {...seoConfigHome} />
      <div className="custom__container">home</div>
    </>
  );
};

export default HomePage;
