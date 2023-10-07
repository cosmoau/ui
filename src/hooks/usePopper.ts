import { createPopper, type StrictModifiers } from "@popperjs/core";
import { useState, useEffect, useRef } from "react";

export default function usePopper(): {
  contentRef: { current: null | HTMLDivElement };
  handleClick: () => void;
  handleClose: () => void;
  isMounted: boolean;
  isOpen: boolean;
  triggerRef: { current: null | HTMLDivElement };
} {
  const triggerRef = useRef(null);
  const contentRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [popper, setPopper] = useState<ReturnType<typeof createPopper>>();

  useEffect(() => {
    if (triggerRef.current && contentRef.current) {
      setPopper(
        createPopper<StrictModifiers>(triggerRef.current, contentRef.current, {
          modifiers: [
            {
              name: "preventOverflow",
              options: {
                padding: 20,
              },
            },
            {
              name: "flip",
              options: {
                padding: 20,
              },
            },
            {
              name: "offset",
              options: {
                offset: [0, 10],
              },
            },
            {
              name: "computeStyles",
            },
          ],
        }),
      );
    }
  }, [triggerRef, contentRef, isOpen]);

  function handleOpen(): void {
    setIsOpen(true);
    setIsMounted(true);
    setTimeout(() => {
      popper?.update();
    }, 250);
  }

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
      popper?.destroy();
    }, 150);
  }

  function handleClick(): void {
    if (isOpen || isMounted) {
      setIsOpen(false);
      setIsMounted(false);
    } else {
      handleOpen();
    }
  }

  return {
    contentRef,
    handleClick,
    handleClose,
    isMounted,
    isOpen,
    triggerRef,
  };
}
