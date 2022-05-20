import { createContext, useState } from 'react';
import { ActiveTag, TagsState } from '../interfaces';

const defaultTags = [
  { category: 'Portfolio', tag: 'Frontend' },
  { category: 'Skills', tag: 'All skills' },
];

export const TagsContext = createContext<TagsState>({
  activeTags: defaultTags,
  setActive: () => {},
});

export const TagsProvider: React.FC = ({ children }) => {
  const [activeTags, setActive] = useState<ActiveTag[]>(defaultTags);

  return (
    <TagsContext.Provider value={{ activeTags, setActive }}>
      {children}
    </TagsContext.Provider>
  );
};
