interface TagProps {
  tag: string;
}

const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <button className="border-2 border-black rounded-full px-4 py-[2px] text-[14px] font-semibold">
      {tag}
    </button>
  );
};

export default Tag;
