interface TagProps {
  tag: string;
  active: boolean;
}

const Tag: React.FC<TagProps> = ({ tag, active }) => {
  return (
    <button
      className={`border-[1px] border-black rounded-full px-4 py-1 text-[14px] xs:text-[12px] font-semibold leading-[20px] xs:leading-[16px] xs:px-3
    ${active ? 'text-offWhite bg-blue border-blue font-[400]' : ''}
    `}
    >
      {tag}
    </button>
  );
};

export default Tag;
