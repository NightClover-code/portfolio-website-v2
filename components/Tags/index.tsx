import { useContext, useState } from 'react';
import { v4 } from 'uuid';
import { TagsContext } from '../../context';
import Tag from './Tag';

interface TagsProps {
  tags: string[];
  category: string;
  className?: string;
}

const Tags: React.FC<TagsProps> = ({ tags, className, category }) => {
  const [activeTag, setTag] = useState<string>(tags[0]);
  const { activeTags, setActive } = useContext(TagsContext);

  return (
    <div className={`flex mt-9 gap-x-[14px] xs:gap-x-[12px] ${className}`}>
      {tags.map(_tag => {
        const newTags = activeTags.map(_tag_ =>
          _tag_.category === category ? { category, tag: _tag } : _tag_
        );

        return (
          <div
            key={v4()}
            onClick={() => {
              setTag(_tag), setActive(newTags);
            }}
          >
            <Tag tag={_tag} active={activeTag === _tag ? true : false} />
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
