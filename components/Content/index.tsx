interface ContentProps {
  category: string;
  description: string;
  withLine?: boolean;
  alignLeft?: boolean;
}

const Content: React.FC<ContentProps> = ({
  children,
  description,
  category,
  withLine,
  alignLeft,
}) => {
  return (
    <>
      <h4 className="text-[14px] uppercase tracking-[3px]">{category}</h4>
      <h1 className="mt-1">{children}</h1>
      <p
        className={`max-w-[400px] ${
          alignLeft ? '' : 'm-auto'
        } mt-2 text-offBlack`}
      >
        {description}
      </p>
      {withLine && <div className="w-[56px] h-[2px] block bg-black mt-8"></div>}
    </>
  );
};

export default Content;
