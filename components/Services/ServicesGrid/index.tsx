import Image from 'next/image';
import Service from './Service';

const ServicesGrid = () => {
  return (
    <div className="flex justify-between">
      <div className="grid">
        <Service />
        <Service />
        <Service />
      </div>

      <div className="relative w-[551px] h-[497px]">
        <Image
          src="/images/portfolio/frontend/team.jpg"
          layout="fill"
          objectFit="cover"
          alt="any" //TODO
        />
      </div>
    </div>
  );
};

export default ServicesGrid;
