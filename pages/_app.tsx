import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/css/default.css';
import type { AppProps } from 'next/app';
import MainLayout from '../layouts/MainLayout';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
    });
  }, []);

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
