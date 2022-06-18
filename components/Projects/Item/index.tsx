import Illustration, { IllustrationProps } from './Illustration';
import Content, { ContentProps } from './Content';
import { isEven } from '../../../utils';
import { useWindowWidth } from '../../../hooks';
import { useEffect, useRef, useState } from 'react';
import { ActiveTag } from '../../../interfaces';
import gsap from 'gsap';

interface ItemInterface {
  content: ContentProps;
  image: IllustrationProps;
  activeTag: ActiveTag;
  order: number;
}

const PortolioItem: React.FC<ItemInterface> = ({
  content,
  image,
  order,
  activeTag,
}) => {
  const width = useWindowWidth();

  useEffect(() => {
    // gsap.to('.project__item', 1, { y: 100 });
    // gsap.to('.project__item', 1, { y: 0 });
  }, [activeTag.category]);

  return (
    <div
      className={`project__item flex justify-between items-center mt-28 mid:mt-12 xs:mt-0 gap-x-20 mid:flex-col mid:items-start mid:mx-auto`}
    >
      {isEven(order) || width! < 1000 ? (
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
