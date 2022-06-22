export const isEven = (n: number) => n % 2 === 0;

export const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

  function mq(query: any) {
    return typeof window !== 'undefined' && window.matchMedia(query).matches;
  }

  if (
    'ontouchstart' in window ||
    (window?.DocumentTouch && document instanceof Document)
  )
    return true;
  const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join(
    ''
  ); // include the 'heartz' - https://git.io/vznFH
  return mq(query);
};

export * from './data';
export * from './config';
export * from './portfolio-data';
