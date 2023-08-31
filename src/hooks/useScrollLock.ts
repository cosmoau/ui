import { useEffect, useState } from "react";

type UseScrollLockOutput = [boolean, (locked: boolean) => void];

export default function useScrollLock(initialLocked = false, rootId = "root"): UseScrollLockOutput {
  const [locked, setLocked] = useState(initialLocked);

  useEffect(() => {
    if (!locked) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";

    const root = document.getElementById(rootId);
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;

    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
      }
    };
  }, [locked, rootId]);

  useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked);
    }
  }, [initialLocked]);

  return [locked, setLocked];
}
