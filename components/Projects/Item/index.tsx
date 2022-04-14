import Image from 'next/image';

interface ItemInterface {
  url: string;
  span?: boolean;
}

const PortolioItem: React.FC<ItemInterface> = ({ span, url }) => {
  return (
    <div
      className={`relative block min-h-[350px] border-2 border-faded ${
        span ? 'row-span-2' : ''
      }`}
    >
      <Image
        src={`/images/portfolio/frontend/${url}`}
        layout="fill"
        objectFit="cover"
        objectPosition="0 0"
        alt="random" //TODO
      />
    </div>
  );
};

export default PortolioItem;
