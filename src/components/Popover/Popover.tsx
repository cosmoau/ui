import { ReactNode, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

import { DefaultProps } from "../../stitches.config";

import { PopoverContentStyled, PopoverStyled, PopoverTriggerStyled } from "./Popover.styles";

interface Props extends DefaultProps {
  children: ReactNode;
  type?: "click" | "hover";
  align?: "left" | "right" | "center";
  trigger: ReactNode;
  minimal?: boolean;
  width?: number | string;
}

export default function Popover(props: Props): JSX.Element {
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
    } else if (props.type === "click" || !props.type) {
      handleOpen();
    }
  }

  function handleMouseEnter(): void {
    if (isOpen || isMounted) {
      setIsOpen(false);
      setIsMounted(false);
    } else if (props.type === "hover") {
      handleOpen();
    }
  }

  function handleMouseLeave(): void {
    if (props.type === "hover") {
      handleClose();
    }
  }

  useOnClickOutside(
    ref,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    props.trigger !== "hover" ? (): void => handleClose() : (): void => {}
  );

  return (
    <PopoverStyled>
      <PopoverTriggerStyled
        onClickCapture={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {props.trigger}
      </PopoverTriggerStyled>
      {isMounted && (
        <PopoverContentStyled
          animation={isOpen}
          css={{
            ...props.css,
            left: props.align === "left" ? "0" : "auto",
            maxWidth: props.width || "25rem",
            minWidth: props.width || "15rem",
            right: props.align === "right" ? "0" : "auto",
          }}
          minimal={props.minimal}
          ref={ref}>
          {props.children}
        </PopoverContentStyled>
      )}
    </PopoverStyled>
  );
}
