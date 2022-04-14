import Image from 'next/image';
import { useRef } from 'react';

interface ItemInterface {
  height: number;
  width: number;
  url: string;
  span?: boolean;
}

const PortolioItem: React.FC<ItemInterface> = ({
  width,
  height,
  span,
  url,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // const spans;

  return (
    <div
      className={`relative w-[${width}px] h-[${height}px] border-2 border-faded ${
        span ? 'row-span-2' : ''
      }`}
    >
      <Image
        src={`/images/portfolio/frontend/${url}`}
        // width={width}
        // height={height}
        layout="fill"
        objectFit="cover"
        objectPosition="0 0"
        alt="random"
      />
    </div>
  );
};

export default PortolioItem;
