interface PrimaryButtonProps {
  className?: string;
  link?: string;
  onClick?: any;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`relative mb-3 group ${className}`}
    >
      <div className="primary__btn">{children}</div>
      <div className="ghost__btn"></div>
    </button>
  );
};

export default PrimaryButton;
