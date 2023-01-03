import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

import { PopoverProps } from "../../types";

import { PopoverContentStyled, PopoverStyled, PopoverTriggerStyled } from "./Popover.styles";

export default function Popover(props: PopoverProps): JSX.Element {
  const { css, trigger, children, type, align, width, minimal } = props;
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 250);
  }

  function handleOpen(): void {
    setIsOpen(true);
    setIsMounted(true);
  }

  function handleClick(): void {
    if (isOpen || isMounted) {
      setIsOpen(false);
      setIsMounted(false);
    } else if (type === "click" || !type) {
      handleOpen();
    }
  }

  function handleMouseEnter(): void {
    if (isOpen || isMounted) {
      setIsOpen(false);
      setIsMounted(false);
    } else if (type === "hover") {
      handleOpen();
    }
  }

  function handleMouseLeave(): void {
    if (type === "hover") {
      handleClose();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useOnClickOutside(ref, trigger !== "hover" ? (): void => handleClose() : (): void => {});

  return (
    <PopoverStyled>
      <PopoverTriggerStyled
        onClickCapture={(): void => {
          handleClick();
        }}
        onMouseEnter={(): void => {
          handleMouseEnter();
        }}
        onMouseLeave={(): void => {
          handleMouseLeave();
        }}>
        {trigger}
      </PopoverTriggerStyled>
      {isMounted && (
        <PopoverContentStyled
          ref={ref}
          animation={isOpen}
          css={{
            ...css,
            left: align === "left" ? "0" : "auto",
            maxWidth: width || "25rem",
            minWidth: width || "15rem",
            right: align === "right" ? "0" : "auto",
          }}
          minimal={minimal}>
          {children}
        </PopoverContentStyled>
      )}
    </PopoverStyled>
  );
}
