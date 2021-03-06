import Link from 'next/link';
import { useRef } from 'react';

export interface ServiceProps {
  title: string;
  description: string;
  Icon: React.FC<{ color?: string }>;
  active?: boolean;
  onClick?: () => any;
}

const Service: React.FC<ServiceProps> = ({
  title,
  description,
  Icon,
  active,
  onClick,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={`cursor-pointer transition-colors border-2 ${
        active ? 'border-blue bg-blue' : 'border-black'
      } rounded-lg px-6 py-6 xs:py-3 xs:px-4`}
      ref={ref}
      data-aos={active && 'fade-in'}
      onClick={onClick}
    >
      <div
        className={`flex items-center justify-between ${
          active ? 'text-white' : ''
        }`}
      >
        <h2 className="leading-[40px] xs:text-[20px]">{title}</h2>
        <Icon color={active ? '#FCFDFF' : '#0D0D0D'} />
      </div>
      <div className={`flex items-end justify-between`}>
        <p
          className={`mt-2 mid:mt-0 max-w-[320px] xs:max-w-[77%] leading-[24px] xs:leading-[22px] text-[16px] xs:text-[13px] ${
            active ? 'text-offWhite' : ''
          }`}
        >
          {description}
        </p>
        <Link href="/contact" passHref>
          <span
            className={`xs:text-[11px] text-[14px] underline text-offBlack cursor-pointer  ${
              active ? 'text-offWhite' : ''
            }`}
          >
            Learn more
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Service;
