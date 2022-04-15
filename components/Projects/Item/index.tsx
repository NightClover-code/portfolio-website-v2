import Image from 'next/image';
import PrimaryButton from '../../Buttons/Primary';

interface ItemInterface {}

const PortolioItem: React.FC<ItemInterface> = () => {
  const config = {};

  return (
    <div className="flex justify-between items-center mt-28">
      <div>
        <h4 className="text-[14px] uppercase tracking-[3px]">Latest work</h4>
        <h1 className="mt-2 text-[40px] max-w-[300px]">
          Team App website design
        </h1>
        <p className={`max-w-[400px] m-auto mt-4 text-offBlack`}>
          Full website design and build for a concept team collaboration
          platform. This website also includes a beautiful blog. I’ve built the
          site from sratch using NextJS and GraphCMS.
        </p>

        <PrimaryButton className="mt-8">See this project</PrimaryButton>
      </div>

      <div className="relative">
        <div>
          <Image
            src="/images/portfolio/frontend/team.svg"
            width={600}
            height={600}
            objectFit="cover"
            alt="team" //TODO
          />
        </div>

        <div className="absolute bottom-3 left-2 z-[-1]">
          <Image
            src="/images/dots.svg"
            width={130}
            height={257}
            alt="dots" //TODO
          />
        </div>
      </div>
    </div>
  );
};

export default PortolioItem;
