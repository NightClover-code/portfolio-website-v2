import { v4 } from 'uuid';
import Tag from './Tag';

interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <div className={`flex mt-8 gap-[14px]`}>
      {tags.map(_tag => {
        return <Tag tag={_tag} key={v4()} />;
      })}
    </div>
  );
};

export default Tags;
