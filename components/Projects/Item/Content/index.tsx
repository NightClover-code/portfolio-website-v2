import PrimaryButton from '../../../Buttons/Primary';

export interface ContentProps {
  title: string;
  description: string;
}

const Content: React.FC<ContentProps> = ({ title, description }) => (
  <div>
    <h4 className="text-[14px] uppercase tracking-[3px]">Latest work</h4>
    <h1 className="mt-2 text-[40px] max-w-[300px] h1-queries">{title}</h1>
    <p className={`max-w-[400px] m-auto mt-4 text-offBlack`}>{description}</p>

    <PrimaryButton className="mt-8">See this project</PrimaryButton>
  </div>
);

export default Content;
