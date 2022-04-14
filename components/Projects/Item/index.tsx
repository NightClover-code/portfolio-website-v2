import Image from 'next/image';
import { useRef } from 'react';
import { useSpans } from '../../../hooks';

interface ItemInterface {
  height: number;
  width: number;
  url: string;
  imgHeight?: number;
  imgWidth?: number;
}

const PortolioItem: React.FC<ItemInterface> = ({
  width,
  height,
  imgHeight,
  imgWidth,
  url,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const spans = useSpans(height);

  return (
    <div
      className={`relative w-[${width}px] h-[${height}px] border-2 border-white`}
      style={{ gridRowEnd: `span ${spans}` }}
      ref={containerRef}
    >
      <Image
        src={`/images/portfolio/frontend/${url}`}
        // layout="fill"
        width={imgWidth || width}
        height={imgHeight || height}
        objectFit="cover"
        objectPosition="0 0"
        alt="random"
      />
    </div>
  );
};

export default PortolioItem;
