import type { JSX } from "react";

import { useEventListener, useOutsideClick, usePopper } from "../../index";
import { IPopover } from "../../types";

import { PopoverStyled, PopoverContentStyled, PopoverTriggerStyled } from "./styles";

export default function Popover({
  css,
  trigger,
  children,
  disabled,
  minimal = false,
  triggerCSS,
  wrapperCSS,
  small = false,
}: IPopover): JSX.Element {
  const { triggerRef, contentRef, isOpen, isMounted, handleClick, handleClose } = usePopper();

  useOutsideClick(contentRef, () => handleClose());

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
  });

  return (
    <PopoverStyled css={wrapperCSS}>
      <PopoverTriggerStyled
        ref={triggerRef}
        css={triggerCSS}
        onClick={(e): void => {
          e.stopPropagation();
          if (!disabled) {
            handleClick();
          }
        }}>
        {trigger}
      </PopoverTriggerStyled>

      {isMounted && (
        <PopoverContentStyled
          ref={contentRef}
          animation={isOpen}
          css={css}
          minimal={minimal}
          small={small}>
          {children}
        </PopoverContentStyled>
      )}
    </PopoverStyled>
  );
}
