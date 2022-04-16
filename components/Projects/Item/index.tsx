import Illustration, { IllustrationProps } from './Illustration';
import Content, { ContentProps } from './Content';
import { isEven } from '../../../utils';

interface ItemInterface {
  content: ContentProps;
  image: IllustrationProps;
  order: number;
}

const PortolioItem: React.FC<ItemInterface> = ({ content, image, order }) => {
  return (
    <div className="flex justify-between items-center mt-32">
      {isEven(order) ? (
        <>
          <Content {...content} />

          <Illustration {...image} />
        </>
      ) : (
        <>
          <Illustration {...image} />
          <Content {...content} />
        </>
      )}
    </div>
  );
};

export default PortolioItem;
