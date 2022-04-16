interface TagProps {
  tag: string;
  active: boolean;
}

const Tag: React.FC<TagProps> = ({ tag, active }) => {
  return (
    <button
      className={`border-[1px] border-black rounded-full px-4 py-1 text-[14px] font-semibold leading-[20px]
    ${active ? 'text-offWhite bg-blue border-blue font-[400]' : ''}
    `}
    >
      {tag}
    </button>
  );
};

export default Tag;
