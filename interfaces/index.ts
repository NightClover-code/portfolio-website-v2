import { Dispatch, SetStateAction } from 'react';

export interface PortfolioState {
  activeTag: string;
  setActive: Dispatch<SetStateAction<string>>;
}
