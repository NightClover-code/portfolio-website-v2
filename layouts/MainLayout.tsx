import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileHeader from '../components/MobileHeader';
import { useContext } from 'react';
import { NavContext } from '../context';

const MainLayout: React.FC = ({ children }) => {
  const { isNavOpen } = useContext(NavContext);

  return (
    <div className={`app__container wrapper`}>
      <MobileHeader />
      <div
        className={`${isNavOpen ? 'overlay' : ''} relative custom__container`}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
