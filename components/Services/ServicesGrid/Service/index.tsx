export interface ServiceProps {
  title: string;
  description: string;
  Icon: React.FC<{ color?: string }>;
  active?: boolean;
  onClick?: () => any;
}

const Service: React.FC<ServiceProps> = ({
  title,
  description,
  Icon,
  active,
  onClick,
}) => {
  return (
    <div
      className={`cursor-pointer border-2 ${
        active ? 'border-blue bg-blue' : 'border-black'
      } rounded-lg px-6 py-3`}
      onClick={onClick}
    >
      <div
        className={`flex items-center justify-between ${
          active ? 'text-white' : ''
        }`}
      >
        <h2>{title}</h2>
        <Icon color={active ? '#FCFDFF' : '#0D0D0D'} />
      </div>
      <div className={`flex items-end justify-between`}>
        <p
          className={`max-w-[320px] leading-[24px] text-[16px] ${
            active ? 'text-offWhite' : ''
          }`}
        >
          {description}
        </p>
        <span
          className={`text-[14px] underline text-offBlack cursor-pointer  ${
            active ? 'text-offWhite' : ''
          }`}
        >
          Learn more
        </span>
      </div>
    </div>
  );
};

export default Service;
