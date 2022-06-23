import { RichText } from '@graphcms/rich-text-react-renderer';
import { v4 } from 'uuid';
import { Challenge } from '../../../interfaces';

const Challenges: React.FC<{ challenge: Challenge }> = ({ challenge }) => {
  return (
    <section className="challenges__section mt-16 max-w-[726px]">
      <h2 className="font-bold">The Challenge</h2>

      <div className="mt-2">
        <RichText content={challenge.description.raw.children} />
      </div>

      <p className="mt-3 font-bold">Here were some challenges: </p>

      <div className="ml-10 mt-4">
        {challenge.challenges.map(el => (
          <li key={v4()} className="mb-2">
            {el}
          </li>
        ))}
      </div>
    </section>
  );
};

export default Challenges;
