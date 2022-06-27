import Link from 'next/link';
import SEO from '../components/SEO';
import { seoConfigHome } from '../utils';

const NotFound = () => {
  return (
    <>
      <SEO {...seoConfigHome} />
      <div className="mt-24 text-[17px] font-bold">
        <p className="font-bold text-[17px] ">
          We couldn&apos;t find the page you were looking for. This is either
          because:
        </p>
        <ul className="mt-4 list-disc ml-10">
          <li>
            There is an error in the URL entered into your web browser. Please
            check the URL and try again.
          </li>
          <li>The page you are looking for has been moved or deleted.</li>
        </ul>
        <p className="font-bold text-[17px] mt-4">
          You can return to our homepage by{' '}
          <span className="hover:underline">
            <Link href="/" passHref>
              clicking here.
            </Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default NotFound;
