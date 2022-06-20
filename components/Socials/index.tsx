import { v4 } from 'uuid';
import { IconInterface } from '../../interfaces';

interface SocialsProps {
  Icons: IconInterface[];
  marginRight?: number;
  marginTop?: number;
}

const Socials: React.FC<SocialsProps> = ({ Icons, marginRight, marginTop }) => {
  return (
    <div
      className="flex socials items-center"
      style={{ marginTop: marginTop && `${marginTop}px` }}
    >
      {Icons.map(({ Icon, href, mailto }) => {
        return (
          <div
            className={`mr-5 cursor-pointer`}
            style={{ marginRight }}
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
