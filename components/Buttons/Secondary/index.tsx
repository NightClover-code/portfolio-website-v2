interface SecondaryButtonProps {
  className?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  className,
}) => {
  return (
    <button className={`relative mb-3 group ${className}`}>
      <div className="secondary__btn">{children}</div>
      <div className="ghost__btn"></div>
    </button>
  );
};

export default SecondaryButton;
