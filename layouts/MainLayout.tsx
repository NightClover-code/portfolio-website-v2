import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileHeader from '../components/MobileHeader';
import { useContext } from 'react';
import { NavContext } from '../context';

const MainLayout: React.FC = ({ children }) => {
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = e.target as HTMLInputElement;
    if (isNavOpen && el.tagName !== 'DIV' && el.tagName !== 'UL') {
      setIsNavOpen(false);
    }
  };

  return (
    <div className={`app__container wrapper`} onClick={onClickHandler}>
      <MobileHeader />

      <div className={`custom__container`}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
