import { useRef, useState } from "react";

import { Icons } from "../../icons";
import { Button, Text, useEventListener, useOutsideClick, useScrollLock } from "../../index";
import { IDialog } from "../../types";
import Portal from "../Provider/ProviderPortal";

import {
  DialogContentStyled,
  DialogCoreStyled,
  DialogHeaderStyled,
  DialogOverlayStyled,
  DialogStyled,
  DialogTriggerStyled,
} from "./styles";

export default function Dialog({
  css,
  trigger,
  children,
  title,
  disabled,
  small,
  portal = true,
}: IDialog): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

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

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
  });

  useScrollLock(isMounted);

  useOutsideClick(ref, () => {
    if (isOpen) {
      handleClose();
    }
  });

  return (
    <DialogStyled>
      {trigger ? (
        <DialogTriggerStyled
          onClick={(e): void => {
            e.stopPropagation();
            if (!disabled) {
              handleClick();
            }
          }}>
          {trigger}
        </DialogTriggerStyled>
      ) : (
        "Missing trigger"
      )}
      {isMounted && (
        <Portal disabled={!portal}>
          <DialogOverlayStyled animation={isOpen}>
            <DialogCoreStyled ref={ref} animation={isOpen} css={css} small={small || false}>
              <DialogHeaderStyled>
                <Text as="h4">{title}</Text>
                <Button small theme="fill" onClick={(): void => handleClose()}>
                  <Icons.ArrowsInSimple />
                </Button>
              </DialogHeaderStyled>
              <DialogContentStyled>{children}</DialogContentStyled>
            </DialogCoreStyled>
          </DialogOverlayStyled>
        </Portal>
      )}
    </DialogStyled>
  );
}
