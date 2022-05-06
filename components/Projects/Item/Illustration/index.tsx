import Image from 'next/image';

export interface IllustrationProps {
  width: number;
  height: number;
  imgSrc: string;
}

const Illustration: React.FC<IllustrationProps> = ({
  width,
  height,
  imgSrc,
}) => {
  return (
    <div className={`relative`}>
      <div className="relative mt-12 mid:mt-14 xs:mt-10 projects__card shadow-portfolioCard">
        <Image
          src={`/images/portfolio/${imgSrc}`}
          width={width}
          height={height}
          alt="team" //TODO
        />
      </div>

      <div className="absolute -bottom-8 -left-6 z-[-1] xs:hidden">
        <Image
          src="/images/dots.svg"
          width={130}
          height={257}
          alt="dots" //TODO
        />
      </div>
    </div>
  );
};

export default Illustration;
