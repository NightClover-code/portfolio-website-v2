import { v4 } from 'uuid';

interface SocialsProps {
  Icons: React.FC[];
  margin?: number;
}

const Socials: React.FC<SocialsProps> = ({ Icons, margin }) => {
  return (
    <div className="flex socials items-center">
      {Icons.map(_Icon => {
        return (
          <div
            className={`mr-5 cursor-pointer`}
            style={{ marginRight: `${margin}px` }}
            key={v4()}
          >
            <_Icon />
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
