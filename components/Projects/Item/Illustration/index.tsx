import Image from 'next/image';
import { useContext } from 'react';
import { TagsContext } from '../../../../context';

export interface IllustrationProps {
  width: number;
  height: number;
  imgSrc: string;
}

const Illustration: React.FC<IllustrationProps> = ({
  width,
  height,
  imgSrc,
}) => {
  const category = 'Portfolio';

  const { activeTags } = useContext(TagsContext);

  const [activeTag] = activeTags.filter(_tag => _tag.category === category);

  return (
    <div className={`relative`}>
      <div
        className="relative mid:mt-14 xs:mt-10 projects__card"
        style={{
          boxShadow:
            activeTag.tag !== 'Backend'
              ? '0px 4px 40px rgba(0, 0, 0, 0.07)'
              : '',
        }}
      >
        <Image
          src={`/images/portfolio/${imgSrc}`}
          width={width}
          height={height}
          alt="team" //TODO
        />
      </div>

      {activeTag.tag !== 'Backend' && (
        <div className="absolute -bottom-8 -left-6 z-[-1] xs:hidden">
          <Image
            src="/images/dots.svg"
            width={130}
            height={257}
            alt="dots" //TODO
          />
        </div>
      )}
    </div>
  );
};

export default Illustration;
