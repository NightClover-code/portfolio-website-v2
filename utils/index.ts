import jump from 'jump.js';
import { Dispatch, SetStateAction } from 'react';
import { JumpOptions } from '../interfaces';

export const isEven = (n: number) => n % 2 === 0;

export const smoothJump = (jumpOptions: JumpOptions) =>
  jump(jumpOptions.jumpVal!, {
    duration: jumpOptions.duration,
    offset: -100,
  });

export const hideNav = (setIsNavOpen: Dispatch<SetStateAction<boolean>>) => {
  window.addEventListener('resize', (e: any) => {
    if (e.target.innerWidth > 1000) {
      setIsNavOpen(false);
    }
  });
};

export const disableScroll = (isNavOpen: boolean) => {
  if (isNavOpen) {
    document.body.classList.add('disable__scroll');
  } else {
    document.body.classList.remove('disable__scroll');
  }
};

export * from './data';
export * from './config';
