import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/css/default.css';
import type { AppProps } from 'next/app';
import MainLayout from '../layouts/MainLayout';
import { useEffect } from 'react';
import { NavProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
    });
  }, []);

  return (
    <NavProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </NavProvider>
  );
}

export default MyApp;
