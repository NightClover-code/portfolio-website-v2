interface PrimaryButtonProps {
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
}) => {
  return (
    <button className={`relative mb-3 group ${className}`}>
      <div className="primary__btn">{children}</div>
      <div className="ghost__btn"></div>
    </button>
  );
};

export default PrimaryButton;
