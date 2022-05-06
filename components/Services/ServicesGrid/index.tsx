import Image from 'next/image';
import { useState } from 'react';
import { v4 } from 'uuid';
import { useWindowWidth } from '../../../hooks';
import { services } from '../../../utils';
import Service, { ServiceProps } from './Service';

const ServicesGrid = () => {
  const [activeService, setService] = useState<ServiceProps>(services[0]);
  const [activeIndex, setIndex] = useState<number>(0);

  const _width = useWindowWidth();

  return (
    <div className="grid grid-cols-2 gap-x-12 mt-16 mid:mt-12 xs:mt-10 mid2:grid-cols-[600px] justify-center lg:grid-cols-1">
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

      <div className="mid2:mt-10">
        <Image
          src={`/images/services/${services[activeIndex].imgSrc}`}
          width={600}
          height={_width! < 1000 ? 500 : 540}
          objectFit="cover"
          alt="any" //TODO
        />
      </div>
    </div>
  );
};

export default ServicesGrid;
