import Illustration, { IllustrationProps } from './Illustration';
import Content, { ContentProps } from './Content';

interface ItemInterface {
  content: ContentProps;
  image: IllustrationProps;
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
