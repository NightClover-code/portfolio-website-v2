import Illustration from './Illustration';
import Content from './Content';
import { isEven } from '../../../utils';
import { useWindowWidth } from '../../../hooks';
import { ProjectItem } from '../../../interfaces';

interface ItemInterface extends ProjectItem {
  activeTag: string;
  order: number;
}

const PortolioItem: React.FC<ItemInterface> = ({
  content,
  homeImg,
  order,
  slug,
  activeTag,
}) => {
  const width = useWindowWidth();

  const imgConfig = { ...homeImg, activeTag, slug };

  const contentConfig = { ...content, slug };

  return (
    <div
      data-aos="fade-up"
      className={`project__item flex justify-between items-center mt-28 mid:mt-12 xs:mt-0 gap-x-20 mid:flex-col mid:items-start mid:mx-auto`}
    >
      {isEven(order) || width! < 1000 ? (
        <>
          <Content {...contentConfig} />
          <Illustration {...imgConfig} />
        </>
      ) : (
        <>
          <Illustration {...imgConfig} />
          <Content {...contentConfig} />
        </>
      )}
    </div>
  );
};

export default PortolioItem;
