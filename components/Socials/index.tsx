import { v4 } from 'uuid';

interface SocialsProps {
  Icons: React.FC[];
}

const Socials: React.FC<SocialsProps> = ({ Icons }) => {
  return (
    <div className="flex">
      {Icons.map(_Icon => {
        return (
          <div className="mr-4 cursor-pointer" key={v4()}>
            <_Icon />
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
