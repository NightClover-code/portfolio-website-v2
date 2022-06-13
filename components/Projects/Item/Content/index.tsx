import PrimaryButton from '../../../Buttons/Primary';

export interface ContentProps {
  title: string;
  description: string;
}

const Content: React.FC<ContentProps> = ({ title, description }) => (
  <div>
    <h4 className="text-[14px] uppercase tracking-[3px]">Latest work</h4>
    <h1 className="mt-2 text-[40px] max-w-[300px] xs:text-[36px] xs:leading-[46px]">
      {title}
    </h1>
    <p className={`max-w-[370px] mt-4 text-offBlack`}>{description}</p>

    <PrimaryButton className="mt-8">See this project</PrimaryButton>
  </div>
);

export default Content;
