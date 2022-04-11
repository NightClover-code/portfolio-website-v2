const PrimaryButton: React.FC = ({ children }) => {
  return (
    <button className="relative mb-3 group">
      <div className="primary__btn">{children}</div>
      <div className="ghost__btn"></div>
    </button>
  );
};

export default PrimaryButton;
