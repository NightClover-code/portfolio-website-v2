import Image from 'next/image';
import { DotsIcon } from '../../Icons/SVG/Dots';

const SimilarProjects = () => {
  return (
    <section className="simiar__projects__section mt-10">
      <h2 className="font-bold">Similar Projects</h2>

      <div className="flex relative mt-8 lg:flex-col">
        <div className="relative">
          <div className="shadow-portfolioCard projects__card">
            <Image
              width={452}
              height={452}
              src="/images/portfolio/frontend/team.svg"
              objectFit="cover"
              alt="random" //TODO
            />
          </div>

          <div className="absolute -bottom-8 -left-6 z-[-1] xs:hidden">
            <DotsIcon />
          </div>
        </div>

        <div className="relative ml-16 lg:ml-0 lg:mt-20">
          <div className="shadow-portfolioCard projects__card">
            <Image
              width={452}
              height={452}
              objectFit="cover"
              src="/images/portfolio/frontend/easybank.svg"
              alt="random" //TODO
            />
          </div>

          <div className="absolute -bottom-8 -left-6 z-[-1] xs:hidden">
            <DotsIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarProjects;
