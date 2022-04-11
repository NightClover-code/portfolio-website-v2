import { v4 } from 'uuid';

interface SocialsProps {
  Icons: React.FC[];
}

const Socials: React.FC<SocialsProps> = ({ Icons }) => {
  return (
    <div className="flex">
      {Icons.map(_Icon => {
        return <_Icon key={v4()} />;
      })}
    </div>
  );
};

export default Socials;
