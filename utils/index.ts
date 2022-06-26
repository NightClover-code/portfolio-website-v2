import jump from 'jump.js';
import { JumpOptions } from '../interfaces';

export const isEven = (n: number) => n % 2 === 0;

export const smoothJump = (jumpOptions: JumpOptions) =>
  jump(jumpOptions.jumpVal!, {
    duration: jumpOptions.duration,
    offset: -100,
  });

export * from './data';
export * from './config';
