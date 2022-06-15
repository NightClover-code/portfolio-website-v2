import PrimaryButton from '../../Buttons/Primary';
import SecondaryButton from '../../Buttons/Secondary';

interface ContentProps {
  title: string;
  description: string;
}

const Content: React.FC<ContentProps> = ({ description, title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h4 className="text-[16px]">Project Showcase</h4>
      <h1 className="mt-2 xs:text-[36px] text-[40px] text-center">
        <span>Team</span> App website
      </h1>
      <p
        className={`m-auto mt-4 text-offBlack max-w-[520px] text-center text-[17px]`}
      >
        {description}
      </p>

      <div className="flex mt-8">
        <PrimaryButton className="mr-3">Live site</PrimaryButton>
        <SecondaryButton className="ml-3">View code</SecondaryButton>
      </div>
    </div>
  );
};

export default Content;
