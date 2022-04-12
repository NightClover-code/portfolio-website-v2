interface ContentProps {
  category: string;
  description: string;
}

const Content: React.FC<ContentProps> = ({
  children,
  description,
  category,
}) => {
  return (
    <>
      <h4 className="text-[14px] uppercase tracking-[3px]">{category}</h4>
      <h1 className="mt-1">{children}</h1>
      <p className="max-w-[400px] m-auto mt-2 text-offBlack">{description}</p>
    </>
  );
};

export default Content;
