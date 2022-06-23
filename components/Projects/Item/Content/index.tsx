import { ContentInterface } from '../../../../interfaces';
import PrimaryLink from '../../../Buttons/PrimaryLink';

interface ContentProps extends ContentInterface {
  slug: string;
}

const Content: React.FC<ContentProps> = ({ title, description, slug }) => {
  return (
    <div>
      <h4 className="text-[14px] uppercase tracking-[3px]">Latest work</h4>
      <h1 className="mt-2 text-[40px] max-w-[300px] xs:text-[36px] xs:leading-[46px]">
        {title}
      </h1>
      <p className={`max-w-[375px] mt-4 text-offBlack`}>{description}</p>

      <PrimaryLink className="mt-8" link={slug}>
        See this project
      </PrimaryLink>
    </div>
  );
};

export default Content;
