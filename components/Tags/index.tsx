import { useState } from 'react';
import { v4 } from 'uuid';
import Tag from './Tag';

interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  const [activeTag, setTag] = useState<string>(tags[0]);

  return (
    <div className={`flex mt-8 gap-[14px]`}>
      {tags.map(_tag => {
        return (
          <div key={v4()} onClick={() => setTag(_tag)}>
            <Tag tag={_tag} active={activeTag === _tag ? true : false} />
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
