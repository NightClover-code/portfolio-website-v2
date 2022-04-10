import Header from '../components/Header';
// import Footer from '../components/Footer';

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="app__container wrapper">
      <div className="custom__container">
        <Header />
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default MainLayout;
