import Image from 'next/image';

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
  return (
    <div
      className={`relative w-[${width}px] h-[${height}px] border-2 border-faded ${
        span ? 'row-span-2' : ''
      }`}
    >
      <Image
        src={`/images/portfolio/frontend/${url}`}
        width={width}
        height={height}
        objectFit="cover"
        objectPosition="0 0"
        alt="random"
      />
    </div>
  );
};

export default PortolioItem;
