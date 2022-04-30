import Illustration, { IllustrationProps } from './Illustration';
import Content, { ContentProps } from './Content';
import { isEven } from '../../../utils';
import { useWindowWidth } from '../../../hooks';

interface ItemInterface {
  content: ContentProps;
  image: IllustrationProps;
  order: number;
}

const PortolioItem: React.FC<ItemInterface> = ({ content, image, order }) => {
  const width = useWindowWidth();

  return (
    <div
      className={`flex justify-between items-center mt-32 gap-x-20 portfolio:flex-col portfolio:items-start`}
    >
      {isEven(order) || width! < 970 ? (
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
