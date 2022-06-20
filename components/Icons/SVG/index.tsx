import Image from 'next/image';

interface WavesProps {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}

export const Waves: React.FC<WavesProps> = ({ left, right, bottom, top }) => (
  <div
    className={`absolute  z-[-1] tiny:hidden`}
    style={{ left, right, bottom, top }}
  >
    <Image src="/images/waves.svg" width={181} height={116} alt="waves" />
  </div>
);

export const CircleWaves: React.FC<{ width: number }> = ({ width }) => (
  <div className="absolute bottom-[-70px] right-[-50px] z-[-1] w-[250px] h-[250px] tiny:hidden">
    <Image
      src="/images/circle-waves.svg"
      width={width! < 500 ? 230 : 250}
      height={width! < 500 ? 230 : 250}
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