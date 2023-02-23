import { X } from "phosphor-react";
import { useRef, useState } from "react";
import { useEventListener, useLockedBody, useOnClickOutside } from "usehooks-ts";

import { Button } from "../../index";
import { DialogProps } from "../../types";

import {
  DialogContentStyled,
  DialogExitStyled,
  DialogOverlayStyled,
  DialogStyled,
  DialogTriggerStyled,
} from "./Dialog.styles";

export function Dialog(props: DialogProps): JSX.Element {
  const { css, trigger, children, locked = true, width } = props;
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
    } else {
      handleOpen();
    }
  }

  useOnClickOutside(ref, () => handleClose());

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      handleClose();
    }
  });

  useLockedBody(locked ? isOpen : false);

  return (
    <DialogStyled>
      <DialogTriggerStyled onClickCapture={(): void => handleClick()}>
        {trigger}
      </DialogTriggerStyled>
      {isMounted && (
        <DialogOverlayStyled animation={isOpen}>
          <DialogContentStyled
            ref={ref}
            animation={isOpen}
            css={{
              width: width ? width : "auto",
              ...css,
            }}>
            <DialogExitStyled onClick={(): void => handleClose()}>
              <Button icon={<X />} small theme="minimal">
                Close
              </Button>
            </DialogExitStyled>
            {children}
          </DialogContentStyled>
        </DialogOverlayStyled>
      )}
    </DialogStyled>
  );
}
