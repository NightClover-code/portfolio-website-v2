import Image from 'next/image';

export interface IllustrationProps {
  width: number;
  height: number;
  imgSrc: string;
}

const Illustration: React.FC<any> = ({ width, height, imgSrc }) => (
  <div className={`relative portfolio:mt-14`}>
    <div
      style={{
        maxWidth: `${width}px`,
        maxHeight: `${height}px`,
      }}
    >
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
