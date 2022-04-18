import Image from 'next/image';
import Service from './Service';

const ServicesGrid = () => {
  return (
    <div className="flex">
      <div className="grid">
        <Service />
        <Service />
        <Service />
      </div>

      <Image
        src="/images/portfolio/frontend/team.jpg"
        width={551}
        height={497}
        alt="any" //TODO
      />
    </div>
  );
};

export default ServicesGrid;
