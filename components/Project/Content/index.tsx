import { RichText } from '@graphcms/rich-text-react-renderer';
import { ContentInterface } from '../../../interfaces';
import PrimaryButton from '../../Buttons/Primary';
import SecondaryButton from '../../Buttons/Secondary';

interface ContentProps extends ContentInterface {}

const Content: React.FC<ContentProps> = ({ description, richTitle, link }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h4 className="text-[16px] text-center">Project Showcase</h4>
      <div className="richTitle__container">
        <RichText content={richTitle?.raw.children} />
      </div>
      <p
        className={`m-auto mt-4 text-offBlack max-w-[520px] text-center text-[17px]`}
      >
        {description}
      </p>

      <div className="flex mt-8">
        {link?.website && (
          <PrimaryButton className="mr-3">
            <a href={link.website} target="_blank" rel="noreferrer">
              Live site
            </a>
          </PrimaryButton>
        )}

        {link?.github && (
          <SecondaryButton className="ml-3">
            <a href={link.github} target="_blank" rel="noreferrer">
              View code
            </a>
          </SecondaryButton>
        )}
      </div>
    </div>
  );
};

export default Content;
