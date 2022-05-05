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
    <div className="grid grid-cols-2 gap-x-12 mt-16 mid2:grid-cols-[650px] mid:grid-cols-1 justify-center">
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

      <div
        className="relative mid2:mt-10"
        style={{ height: _width! < 1000 ? _width! * 0.7 : 500 }}
      >
        <Image
          src={`/images/services/${services[activeIndex].imgSrc}`}
          layout="fill"
          objectFit="cover"
          alt="any" //TODO
        />
      </div>
    </div>
  );
};

export default ServicesGrid;
