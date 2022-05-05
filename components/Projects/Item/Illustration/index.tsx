import Image from 'next/image';
import { useWindowWidth } from '../../../../hooks';

export interface IllustrationProps {
  width: number;
  height: number;
  imgSrc: string;
}

const Illustration: React.FC<any> = ({ width, height, imgSrc }) => {
  const _width = useWindowWidth();

  const containerWidth = _width! < 1000 ? 820 : width;
  const containerHeight = _width! < 1000 ? height * 1.4 : height;

  return (
    <div className={`relative portfolio:mt-14`}>
      <div className="relative mt-12">
        <Image
          src={`/images/portfolio/${imgSrc}`}
          width={containerWidth}
          height={containerHeight}
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
};

export default Illustration;
