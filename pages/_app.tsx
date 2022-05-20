import '../styles/css/default.css';
import type { AppProps } from 'next/app';
import MainLayout from '../layouts/MainLayout';
import { TagsProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TagsProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </TagsProvider>
  );
}

export default MyApp;
