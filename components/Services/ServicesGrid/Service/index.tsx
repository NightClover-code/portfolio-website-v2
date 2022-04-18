interface ServiceProps {
  title: string;
  description: string;
  Icon: React.FC;
}

const Service: React.FC<ServiceProps> = ({ title, description, Icon }) => {
  return (
    <div className="border-2 border-black rounded-lg px-6 py-3">
      <div className="flex items-center justify-between">
        <h2>{title}</h2>
        <Icon />
      </div>
      <div className="flex items-end justify-between">
        <p className="max-w-[367px] leading-[24px] mt-1">{description}</p>
        <span className="text-[14px] underline text-offBlack cursor-pointer">
          Learn more
        </span>
      </div>
    </div>
  );
};

export default Service;
