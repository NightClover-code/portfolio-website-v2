import { v4 } from 'uuid';
import Tag from './Tag';

interface TagsProps {
  tags: string[];
  setActive: any;
  activeTag: string;
  className?: string;
}

const Tags: React.FC<TagsProps> = ({
  tags,
  className,
  activeTag,
  setActive,
}) => {
  return (
    <div className={`flex mt-9 gap-x-[14px] xs:gap-x-[12px] ${className}`}>
      {tags.map(_tag => {
        return (
          <div key={v4()} onClick={() => setActive(_tag)}>
            <Tag tag={_tag} active={activeTag === _tag ? true : false} />
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
