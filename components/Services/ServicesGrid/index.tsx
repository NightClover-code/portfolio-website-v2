import Image from 'next/image';
import { useState } from 'react';
import { v4 } from 'uuid';
import { useWindowWidth } from '../../../hooks';
import { services } from '../../../utils';
import Service, { ServiceProps } from './Service';

const ServicesGrid = () => {
  const [activeService, setService] = useState<ServiceProps>(services[0]);
  const [activeIndex, setIndex] = useState<number>(0);

  const width = useWindowWidth();

  return (
    <div className="grid grid-cols-2 gap-x-12 mt-16 mid:grid-cols-1">
      <div className="grid grid-cols-1 gap-y-8">
        {services.map((_service, i) => {
          return (
            <Service
              key={v4()}
              onClick={() => {
                setService(_service);
                setIndex(i);
              }}
              active={activeService === _service ? true : false}
              {..._service}
            />
          );
        })}
      </div>

      <div className="relative h-[500px]">
        <Image
          src={`/images/portfolio${services[activeIndex].imgSrc}`}
          layout="fill"
          objectFit="cover"
          alt="any" //TODO
        />
      </div>
    </div>
  );
};

export default ServicesGrid;
