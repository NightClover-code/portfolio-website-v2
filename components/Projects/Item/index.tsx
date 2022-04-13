import Image from 'next/image';

interface ItemInterface {
  height: number;
  width: number;
  span?: boolean;
}

const PortolioItem: React.FC<ItemInterface> = ({ width, height, span }) => {
  return (
    <div className={`border-2 border-gray ${span ? 'row-span-2' : ''}`}>
      <Image
        src="/images/portfolio/frontend/team.jpg"
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
