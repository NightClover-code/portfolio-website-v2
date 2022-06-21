export const isEven = (n: number) => n % 2 === 0;

export const isTouchDevice = () => {
  if (global.window) {
    return window.matchMedia('(pointer: coarse)').matches;
  }
};

export * from './data';
export * from './config';
export * from './portfolio-data';
