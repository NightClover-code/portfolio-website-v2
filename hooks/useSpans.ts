import { useState, useEffect } from 'react';

export const useSpans = (height: number) => {
  const [spans, setSpans] = useState<number>(0);

  useEffect(() => setSpans(Math.ceil(height / 25 + 1)), [height]);

  return spans;
};
