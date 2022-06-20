import { v4 } from 'uuid';
import { IconInterface } from '../../interfaces';

interface SocialsProps {
  Icons: IconInterface[];
  margin?: number;
}

const Socials: React.FC<SocialsProps> = ({ Icons, margin }) => {
  return (
    <div className="flex socials items-center">
      {Icons.map(({ Icon, href, mailto }) => {
        return (
          <div
            className={`mr-5 cursor-pointer`}
            style={{ marginRight: `${margin}px` }}
            key={v4()}
          >
            <a
              href={href ? href : `mailto:${mailto}`}
              target="_blank"
              rel="noreferrer"
            >
              {Icon}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
