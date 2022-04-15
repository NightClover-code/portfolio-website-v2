import PrimaryButton from '../../Buttons/Primary';

interface ItemInterface {}

const PortolioItem: React.FC<ItemInterface> = () => {
  const config = {};

  return (
    <div className="flex">
      <div>
        <h4 className="text-[14px] uppercase tracking-[3px]">Latest work</h4>
        <h1 className="mt-2 text-[40px] max-w-[300px]">
          Team App website design
        </h1>
        <p className={`min-w-[400px] m-auto mt-4 text-offBlack`}>
          Full website design and build for a concept team collaboration
          platform. This website also includes a beautiful blog. I’ve built the
          site from sratch using NextJS and GraphCMS.
        </p>

        <PrimaryButton className="mt-8">See this project</PrimaryButton>
      </div>

      <div>{/* <Image /> */}</div>
    </div>
  );
};

export default PortolioItem;
