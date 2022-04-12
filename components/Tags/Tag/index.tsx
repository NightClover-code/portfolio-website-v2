interface TagProps {
  tag: string;
  active: boolean;
}

const Tag: React.FC<TagProps> = ({ tag, active }) => {
  return (
    <button
      className={`border-2 border-black rounded-full px-4 py-[2px] text-[14px] font-semibold
    ${active ? 'text-offWhite bg-blue border-blue font-[400]' : ''}
    `}
    >
      {tag}
    </button>
  );
};

export default Tag;
