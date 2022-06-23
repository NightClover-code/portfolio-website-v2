import Link from 'next/link';

interface PrimaryLinkProps {
  className?: string;
  link: string;
}

const PrimaryLink: React.FC<PrimaryLinkProps> = ({
  children,
  className,
  link,
}) => {
  return (
    <Link href={`/${link}`} passHref>
      <button type="submit" className={`relative mb-3 group ${className}`}>
        <div className="primary__btn">{children}</div>
        <div className="ghost__btn"></div>
      </button>
    </Link>
  );
};

export default PrimaryLink;
