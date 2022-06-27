import { RichText } from '@graphcms/rich-text-react-renderer';
import { ContentInterface } from '../../../interfaces';
import PrimaryButton from '../../Buttons/Primary';
import SecondaryButton from '../../Buttons/Secondary';

interface ContentProps extends ContentInterface {}

const Content: React.FC<ContentProps> = ({ description, richTitle, link }) => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      data-aos="fade-up"
    >
      <h4 className="text-[16px] text-center">Project Showcase</h4>
      <div className="richTitle__container mt-2">
        <RichText content={richTitle?.raw.children} />
      </div>
      <p
        className={`m-auto mt-4 text-offBlack max-w-[500px] text-center text-[17px]`}
      >
        {description}
      </p>

      <div className="flex mt-8">
        {link?.website && (
          <a href={link.website} target="_blank" rel="noreferrer">
            <PrimaryButton className="mr-3">Live site</PrimaryButton>
          </a>
        )}

        {link?.github && (
          <a href={link.github} target="_blank" rel="noreferrer">
            <SecondaryButton className="ml-3">View code</SecondaryButton>
          </a>
        )}
      </div>
    </div>
  );
};

export default Content;
