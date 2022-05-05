import Image from 'next/image';
import { useWindowWidth } from '../../../../hooks';

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
  const _width = useWindowWidth();

  return (
    <div className={`relative portfolio:mt-14`}>
      <div className="relative mt-12">
        <Image
          src={`/images/portfolio/${imgSrc}`}
          width={_width! < 1000 ? 820 : width}
          height={_width! < 1000 ? height * 1.4 : height}
          objectFit="cover"
          alt="team" //TODO
        />
      </div>

      <div className="absolute -bottom-8 -left-6 z-[-1]">
        <Image
          src="/images/dots.svg"
          width={_width! < 600 ? 100 : 130}
          height={_width! < 600 ? 200 : 257}
          alt="dots" //TODO
        />
      </div>
    </div>
  );
};

export default Illustration;
