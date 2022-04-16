import Image from 'next/image';

export interface IllustrationProps {
  width: number;
  height: number;
  imgSrc: string;
}

const Illustration: React.FC<any> = ({ width, height, imgSrc }) => (
  <div className="relative shadow-portfolioCard max-w-[570px] max-h-[570px]">
    <div>
      <Image
        src={`/images/portfolio/${imgSrc}`}
        width={width}
        height={height}
        objectFit="cover"
        alt="team" //TODO
      />
    </div>

    <div className="absolute -bottom-8 -left-6 z-[-1]">
      <Image
        src="/images/dots.svg"
        width={130}
        height={257}
        alt="dots" //TODO
      />
    </div>
  </div>
);

export default Illustration;
