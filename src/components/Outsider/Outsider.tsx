import { RefObject, useEffect } from 'react';

type AnyEvent = MouseEvent | TouchEvent;

// eslint-disable-next-line no-unused-vars
function Outsider<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: any) => void): void {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default Outsider;
