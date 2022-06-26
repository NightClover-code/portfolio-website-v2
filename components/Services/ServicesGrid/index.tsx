import Image from 'next/image';
import { useState } from 'react';
import { v4 } from 'uuid';
import { services } from '../../../utils';
import Service, { ServiceProps } from './Service';

const ServicesGrid = () => {
  const [activeService, setService] = useState<ServiceProps>(services[0]);
  const [activeIndex, setIndex] = useState<number>(0);

  const { imgSrc } = services[activeIndex];

  return (
    <div
      data-aos="fade-up"
      className="grid grid-cols-2 gap-x-12 mt-16 mid:mt-12 xs:mt-10 mid2:grid-cols-[600px] justify-center lg:grid-cols-1"
    >
      <div className="grid grid-cols-1 gap-y-8 xs:gap-y-6">
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

      <div className="relative mid2:mt-10 mid2:h-[500px] lg:h-[400px] xs:h-[300px]">
        <Image
          src={`/images/services/${imgSrc}`}
          layout="fill"
          objectFit="cover"
          alt="any" //TODO
        />
      </div>
    </div>
  );
};

export default ServicesGrid;
