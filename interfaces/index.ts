import React, { Dispatch, SetStateAction } from 'react';

export interface ActiveTag {
  category: string;
  tag: string;
}

export interface TagsState {
  activeTags: ActiveTag[];
  setActive: Dispatch<SetStateAction<ActiveTag[]>>;
}

export interface IconInterface {
  Icon: JSX.Element;
  href?: string;
  mailto?: string;
}
