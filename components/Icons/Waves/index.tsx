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
