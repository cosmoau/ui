import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

import { PopoverProps } from "../../types";

import { PopoverContentStyled, PopoverStyled, PopoverTriggerStyled } from "./Popover.styles";

export function Popover(props: PopoverProps): JSX.Element {
  const { css, trigger, children, type, horizontal, vertical, width, minimal } = props;
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

  const deviceWidth = typeof window !== "undefined" ? Number(window?.innerWidth || 0) : 0;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useOnClickOutside(ref, trigger !== "hover" ? (): void => handleClose() : (): void => {});

  return (
    <PopoverStyled css={css}>
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
            maxWidth: width || "50rem",
            phone: {
              maxWidth: deviceWidth > 600 ? width : deviceWidth * 0.8,
            },
            width: width || "auto",
          }}
          horizontal={horizontal}
          minimal={minimal}
          vertical={vertical}>
          {children}
        </PopoverContentStyled>
      )}
    </PopoverStyled>
  );
}
