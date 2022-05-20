import { Dispatch, SetStateAction } from 'react';

export interface ActiveTag {
  category: string;
  tag: string;
}

export interface TagsState {
  activeTags: ActiveTag[];
  setActive: Dispatch<SetStateAction<ActiveTag[]>>;
}

const activeTags = [
  { category: 'Portfolio', tag: 'Frontend' },
  { category: 'Skills', tag: 'All skills' },
];
