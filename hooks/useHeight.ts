import { MutableRefObject, useState, useEffect } from 'react';
import { useWindowWidth } from '../useWindowWidth';

export const useHeight = (
  containerRef: MutableRefObject<HTMLDivElement | null>
) => {
  const [height, setHeight] = useState<number>(0);
  const width = useWindowWidth();

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.clientHeight + 60);
    }
  }, [width, containerRef]);

  return height;
};
