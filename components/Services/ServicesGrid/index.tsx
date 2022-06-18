import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { v4 } from 'uuid';
import { useWindowWidth } from '../../../hooks';
import { services } from '../../../utils';
import Service, { ServiceProps } from './Service';
import classNames from 'classnames';
import styles from './Services.module.css';

const ServicesGrid = () => {
  const [activeService, setService] = useState<ServiceProps>(services[0]);
  const [activeIndex, setIndex] = useState<number>(0);

  const _width = useWindowWidth();
  // const ref = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   gsap
  //     .timeline({ defaults: { ease: 'in', duration } })
  //     .from(ref.current, { opacity: 0 })
  //     .to(ref.current, { opacity: 100 });
  // }, [activeService]);

  const [animate, setAnimate] = useState(false);

  const handleClick = () => setAnimate(!animate);

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
                handleClick();
              }}
              active={activeService === _service ? true : false}
              {..._service}
            />
          );
        })}
      </div>

      <div className={classNames(styles.animate, animate && styles.grow)}>
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
