import Image from 'next/image';

export interface IllustrationProps {
  width: number;
  height: number;
  imgSrc: string;
  activeTag?: string;
}

const Illustration: React.FC<IllustrationProps> = ({
  width,
  height,
  imgSrc,
  activeTag,
}) => {
  return (
    <div className={`relative`}>
      <div
        className="relative mid:mt-14 xs:mt-10 projects__card"
        style={{
          boxShadow:
            activeTag !== 'Backend' ? '0px 4px 40px rgba(0, 0, 0, 0.07)' : '',
        }}
      >
        <Image
          src={`/images/portfolio/${imgSrc}`}
          width={width}
          height={height}
          alt="team" //TODO
        />
      </div>

      {activeTag !== 'Backend' && (
        <div className="absolute -bottom-8 -left-6 z-[-1] xs:hidden">
          <Image
            src="/images/dots.svg"
            width={130}
            height={257}
            alt="dots" //TODO
          />
        </div>
      )}
    </div>
  );
};

export default Illustration;
