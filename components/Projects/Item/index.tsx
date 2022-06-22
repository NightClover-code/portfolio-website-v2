import Illustration from './Illustration';
import Content from './Content';
import { isEven } from '../../../utils';
import { useWindowWidth } from '../../../hooks';
import { ContentInterface, ImageInterface } from '../../../interfaces';

interface ItemInterface {
  content: ContentInterface;
  homeImg: ImageInterface;
  activeTag: string;
  order: number;
}

const PortolioItem: React.FC<ItemInterface> = ({
  content,
  homeImg,
  order,
  activeTag,
}) => {
  const width = useWindowWidth();

  const imgConfig = { ...homeImg, activeTag };

  return (
    <div
      data-aos="fade-up"
      className={`project__item flex justify-between items-center mt-28 mid:mt-12 xs:mt-0 gap-x-20 mid:flex-col mid:items-start mid:mx-auto`}
    >
      {isEven(order) || width! < 1000 ? (
        <>
          <Content {...content} />
          <Illustration {...imgConfig} />
        </>
      ) : (
        <>
          <Illustration {...imgConfig} />
          <Content {...content} />
        </>
      )}
    </div>
  );
};

export default PortolioItem;
