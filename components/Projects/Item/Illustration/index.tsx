import Image from 'next/image';

const Illustration = () => (
  <div className="relative shadow-portfolioCard max-w-[570px] max-h-[570px]">
    <div>
      <Image
        src="/images/portfolio/frontend/team.svg"
        width={570}
        height={570}
        objectFit="cover"
        alt="team" //TODO
      />
    </div>

    <div className="absolute -bottom-8 -left-6 z-[-1]">
      <Image
        src="/images/dots.svg"
        width={130}
        height={257}
        alt="dots" //TODO
      />
    </div>
  </div>
);

export default Illustration;
