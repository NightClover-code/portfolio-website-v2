import Image from 'next/image';

interface WavesProps {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  className?: string;
}

export const Waves: React.FC<WavesProps> = ({ left, right, bottom, top }) => (
  <div
    className={`absolute  z-[-1] tiny:hidden`}
    style={{ left, right, bottom, top }}
  >
    <Image src="/images/waves.svg" width={181} height={116} alt="waves" />
  </div>
);

export const CircleWaves: React.FC<WavesProps> = ({
  left,
  right,
  bottom,
  top,
  className,
}) => (
  <div
    className={`absolute z-[-1] ${className}`}
    style={{ left, right, bottom, top }}
  >
    <Image
      src="/images/circle-waves.svg"
      width={250}
      height={250}
      layout="intrinsic"
      alt="circle-waves"
    />
  </div>
);

export const ArrowIcon: React.FC<{ color?: string }> = ({ color }) => (
  <svg
    width="35"
    height="15"
    viewBox="0 0 35 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.8889 0.395081L26 1.59467L31.5 6.5H0V7.8H31.5L26 12.7757L26.8889 13.9753L34.2963 7.1852L26.8889 0.395081Z"
      fill={color || '#B7B4B9'}
    />
  </svg>
);

export * from './Dots';
