import { createContext, useState } from 'react';
import { ActiveTag, TagsState } from '../interfaces';

export const TagsContext = createContext<TagsState>({
  activeTags: [],
  setActive: () => '',
});

export const NavProvider: React.FC = ({ children }) => {
  const [activeTags, setActive] = useState<ActiveTag[]>([]);

  return (
    <TagsContext.Provider value={{ activeTags, setActive }}>
      {children}
    </TagsContext.Provider>
  );
};
