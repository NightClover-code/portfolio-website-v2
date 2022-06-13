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
      <div className="relative mt-12 mid:mt-14 xs:mt-10 projects__card">
        <Image
          src={`/images/portfolio/${imgSrc}`}
          width={width}
          height={height}
          alt="team" //TODO
        />
      </div>

      {activeTag.tag === 'Frontend' && (
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
