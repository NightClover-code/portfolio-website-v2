import { RichText } from '@graphcms/rich-text-react-renderer';
import { v4 } from 'uuid';
import { Raw } from '../../../interfaces';

const BuiltWith: React.FC<{ technologies: Raw[] }> = ({ technologies }) => {
  return (
    <section className="built__with__section mt-12">
      <h2 className="font-bold">Built With</h2>

      <div className="ml-14 mt-2 builtWith">
        <RichText content={technologies[0].raw.children} key={v4()} />
      </div>
    </section>
  );
};

export default BuiltWith;
