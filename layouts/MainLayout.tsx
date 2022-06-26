import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileHeader from '../components/MobileHeader';
import { useContext } from 'react';
import { NavContext } from '../context';

const MainLayout: React.FC = ({ children }) => {
  const { isNavOpen } = useContext(NavContext);

  return (
    <div className="app__container wrapper">
      <div className="custom__container">
        <div className={`${isNavOpen ? 'block translate-x-6' : 'hidden'}`}>
          <MobileHeader />
        </div>

        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
