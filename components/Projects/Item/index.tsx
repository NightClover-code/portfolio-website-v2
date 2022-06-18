import Illustration, { IllustrationProps } from './Illustration';
import Content, { ContentProps } from './Content';
import { isEven } from '../../../utils';
import { useWindowWidth } from '../../../hooks';

interface ItemInterface {
  content: ContentProps;
  image: IllustrationProps;
  activeTag: string;
  order: number;
}

const PortolioItem: React.FC<ItemInterface> = ({
  content,
  image,
  order,
  activeTag,
}) => {
  const width = useWindowWidth();

  return (
    <div
      data-aos="fade-up"
      className={`project__item flex justify-between items-center mt-28 mid:mt-12 xs:mt-0 gap-x-20 mid:flex-col mid:items-start mid:mx-auto`}
    >
      {isEven(order) || width! < 1000 ? (
        <>
          <Content {...content} />
          <Illustration {...image} activeTag={activeTag} />
        </>
      ) : (
        <>
          <Illustration {...image} activeTag={activeTag} />
          <Content {...content} />
        </>
      )}
    </div>
  );
};

export default PortolioItem;
