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
      className={`block w-[${width}px] h-[${height}px] border-2 border-white ${
        span ? 'row-span-2' : ''
      }`}
    >
      <img
        src={`/images/portfolio/frontend/${url}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        // width={width}
        // height={height}
        // layout="fill"
        // objectFit="cover"
        // objectPosition="0 0"
        alt="random"
      />
    </div>
  );
};

export default PortolioItem;
