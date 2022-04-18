import Image from 'next/image';
import { useState } from 'react';
import Service from './Service';

const ServicesGrid = () => {
  // const [activeService, setTag] = useState<string>();

  return (
    <div className="grid grid-cols-2 gap-x-12 mt-16">
      <div className="grid grid-cols-1 gap-y-8">
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
