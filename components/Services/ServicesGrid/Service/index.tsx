import { DesignIcon, DevelopmentIcon } from '../../../Icons/Services';

const Service = () => {
  return (
    <div className="border-2 border-black rounded-lg px-6 py-3">
      <div className="flex items-center justify-between">
        <h2>Design</h2>
        <DevelopmentIcon />
      </div>
      <div className="flex items-end justify-between">
        <p className="max-w-[367px] leading-[24px] mt-1">
          I’ll start by making a suitable design for your website.
        </p>
        <span className="text-[14px] underline text-offBlack cursor-pointer">
          Learn more
        </span>
      </div>
    </div>
  );
};

export default Service;
