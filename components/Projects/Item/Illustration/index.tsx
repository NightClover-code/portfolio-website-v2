import Image from 'next/image';
import { ArrowIcon } from '../../../Icons';

export interface IllustrationProps {
  width: number;
  height: number;
  imgSrc: string;
  activeTag?: string;
}

const Illustration: React.FC<IllustrationProps> = ({
  width,
  height,
  imgSrc,
  activeTag,
}) => {
  return (
    <div className={`relative cursor-pointer group`}>
      <div
        className="relative mid:mt-14 xs:mt-10 projects__card smooth group-hover:-translate-y-2 group-hover:translate-x-2"
        style={{
          boxShadow:
            activeTag !== 'Backend' ? '0px 4px 40px rgba(0, 0, 0, 0.07)' : '',
        }}
      >
        <Image
          src={`/images/portfolio/${imgSrc}`}
          width={width}
          height={height}
          alt="team" //TODO
        />
      </div>

      <div className="overflow-hidden opacity-0 group-hover:opacity-100 flex items-center absolute -bottom-8 right-0 transition-opacity duration-200">
        <h5 className="font-bold -translate-x-10 group-hover:translate-x-0 smooth text-[14px] mr-4 text-[#BAB7BC]">
          See this project
        </h5>

        <div className="mt-[6px] -translate-x-10 group-hover:translate-x-0 smooth">
          <ArrowIcon />
        </div>
      </div>

      {activeTag !== 'Backend' && (
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
