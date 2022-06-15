import Image from 'next/image';

const SimilarProjects = () => {
  return (
    <section className="simiar__projects__section mt-10">
      <h2 className="font-bold">Similar Projects</h2>

      <div className="flex relative mt-8 ">
        <div className="relative">
          <div className="shadow-portfolioCard projects__card">
            <Image
              width={452}
              height={452}
              src="/images/portfolio/frontend/team.svg"
              alt="random" //TODO
            />
          </div>

          <div className="absolute -bottom-8 -left-6 z-[-1] xs:hidden">
            <Image
              src="/images/dots.svg"
              width={130}
              height={257}
              alt="dots" //TODO
            />
          </div>
        </div>

        <div className="relative ml-16">
          <div className="shadow-portfolioCard projects__card">
            <Image
              width={452}
              height={452}
              src="/images/portfolio/frontend/easybank.svg"
              alt="random" //TODO
            />
          </div>

          <div className="absolute -bottom-8 -left-6 z-[-1] xs:hidden">
            <Image
              src="/images/dots.svg"
              width={130}
              height={257}
              alt="dots" //TODO
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarProjects;
