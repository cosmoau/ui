import { useEventListener, useOutsideClick, usePopper } from "../../index";
import { IPopover } from "../../types";

import { PopoverStyled, PopoverContentStyled, PopoverTriggerStyled } from "./styles";

export default function Popover({
  css,
  trigger,
  children,
  disabled,
  minimal = false,
  small = false,
}: IPopover): JSX.Element {
  const { triggerRef, popoverRef, isOpen, isMounted, handleClick, handleClose } = usePopper();

  useOutsideClick(popoverRef, () => handleClose());

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
  });

  return (
    <PopoverStyled css={css}>
      <PopoverTriggerStyled
        ref={triggerRef}
        onClick={(e): void => {
          e.stopPropagation();
          if (!disabled) {
            handleClick();
          }
        }}>
        {trigger}
      </PopoverTriggerStyled>

      {isMounted && (
        <PopoverContentStyled ref={popoverRef} animation={isOpen} minimal={minimal} small={small}>
          {children}
        </PopoverContentStyled>
      )}
    </PopoverStyled>
  );
}
