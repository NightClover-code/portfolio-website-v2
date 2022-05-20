import { createContext, useState } from 'react';
import { PortfolioState } from '../interfaces';

export const PortfolioContext = createContext<PortfolioState>({
  activeTag: '',
  setActive: () => '',
});

export const NavProvider: React.FC = ({ children }) => {
  const [activeTag, setActive] = useState<string>('');

  return (
    <PortfolioContext.Provider value={{ activeTag, setActive }}>
      {children}
    </PortfolioContext.Provider>
  );
};
