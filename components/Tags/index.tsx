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
  const { activeTags, setActive } = useContext(TagsContext);

  const [activeTag] = activeTags.filter(_tag => _tag.category === category);

  return (
    <div className={`flex mt-9 gap-x-[14px] xs:gap-x-[12px] ${className}`}>
      {tags.map(_tag => {
        return (
          <div
            key={v4()}
            onClick={() => {
              setActive(
                activeTags.map(_tag_ =>
                  _tag_.category === category ? { category, tag: _tag } : _tag_
                )
              );
            }}
          >
            <Tag tag={_tag} active={activeTag.tag === _tag ? true : false} />
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
