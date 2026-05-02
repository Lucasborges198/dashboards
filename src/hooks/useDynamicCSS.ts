import { useEffect } from 'react';

export const useDynamicCSS = (cssString: string) => {
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = cssString;
    document.head.appendChild(styleEl);

    return () => {
      if (document.head.contains(styleEl)) {
        document.head.removeChild(styleEl);
      }
    };
  }, [cssString]);
};
