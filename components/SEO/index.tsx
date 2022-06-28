import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" type="images/svg" href="/images/favicon.svg" />

      <meta name="description" content={description} />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      {keywords && <meta name="keywords" content={keywords} />}

      <meta name="author" content="Achraf Elmouhib" />
      <meta
        name="google-site-verification"
        content="9HJVggjWpsfNCddGtv1zT0GjC50nrJRYs1oMAof6r1o"
      />
    </Head>
  );
};

export default SEO;
