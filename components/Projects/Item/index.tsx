import Illustration from './Illustration';
import Content from './Content';

interface ItemInterface {}

const PortolioItem: React.FC<ItemInterface> = () => {
  const config = {};

  return (
    <div className="flex justify-between items-center mt-32">
      <Illustration />
      <Content />
    </div>
  );
};

export default PortolioItem;
