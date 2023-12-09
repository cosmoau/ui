import { useMemo, useRef, useState } from "react";

import { Icons } from "../../icons";
import { Button, Text, useEventListener, useOutsideClick, useScrollLock, useWindowDimensions } from "../../index";
import { IDialog } from "../../types";

import {
  DialogContentStyled,
  DialogCoreStyled,
  DialogHeaderStyled,
  DialogOverlayStyled,
  DialogStyled,
  DialogTriggerStyled,
} from "./styles";

export default function Dialog({ css, trigger, children, title, disabled, small, lightbox }: IDialog): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { width: windowWidth } = useWindowDimensions();

  const width = useMemo(() => {
    if (windowWidth < 900) {
      return "90%";
    } else if (windowWidth < 1800) {
      return small ? "50%" : "70%";
    } else {
      return small ? "40%" : "50%";
    }
  }, [windowWidth, small]);

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
      ) : !lightbox ? (
        "Missing trigger"
      ) : (
        children
      )}
      {isMounted && (
        <DialogOverlayStyled animation={isOpen}>
          <DialogCoreStyled
            ref={ref}
            animation={isOpen}
            css={{
              width,
              ...css,
            }}
            small={small || false}>
            <DialogHeaderStyled lightbox={lightbox}>
              <Text accent={lightbox} as={lightbox ? "small" : "h4"} inline={lightbox ? "smaller" : undefined}>
                {title}
              </Text>
              <Button small theme={lightbox ? "default" : "fill"} onClick={(): void => handleClose()}>
                <Icons.X />
              </Button>
            </DialogHeaderStyled>
            <DialogContentStyled lightbox={lightbox}>{children}</DialogContentStyled>
          </DialogCoreStyled>
        </DialogOverlayStyled>
      )}
    </DialogStyled>
  );
}
