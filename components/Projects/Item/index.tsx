import Illustration from './Illustration';
import Content from './Content';
import { portfolioItems } from '../../../utils';

interface ItemInterface {
  content: {
    title: string;
    description: string;
  };
  image: {
    imgSrc: string;
    width: number;
    height: number;
  };
}

const PortolioItem: React.FC<ItemInterface> = ({ content, image }) => {
  return (
    <div className="flex justify-between items-center mt-32">
      <Illustration {...image} />
      <Content {...content} />
    </div>
  );
};

export default PortolioItem;
