import { useRef, useState } from "react";

import { Icons } from "../../icons";
import { Button, Text, useEventListener, useOutsideClick, useScrollLock } from "../../index";
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
  const ref = useRef<HTMLDivElement>(null);

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

  useOutsideClick(ref, () => handleClose());

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
  });

  useScrollLock(isMounted);

  const innerWidth = typeof window !== "undefined" ? Number(window?.innerWidth || 0) : 0;
  const innerHeight = typeof window !== "undefined" ? Number(window?.innerHeight || 0) : 0;
  const content = ref?.current?.clientHeight || 0;

  const sizing = {
    height: "auto",
    left: {
      default: innerWidth < 900 ? "5%" : innerWidth < 1800 ? "15%" : "25%",
      small: innerWidth < 900 ? "5%" : innerWidth < 1800 ? "25%" : "30%",
    },
    maxHeight: {
      default: innerWidth < 900 ? "80%" : innerWidth < 1800 ? "75%" : "60%",
      small: innerWidth < 900 ? "70%" : innerWidth < 1800 ? "65%" : "50%",
    },
    minHeight: "10%",
    top: content && innerHeight > 0 ? (innerHeight - content) / 2 : "10rem",
    width: {
      default: innerWidth < 900 ? "90%" : innerWidth < 1800 ? "70%" : "50%",
      small: innerWidth < 900 ? "90%" : innerWidth < 1800 ? "50%" : "40%",
    },
  };

  return (
    <DialogStyled>
      {trigger ? (
        <DialogTriggerStyled
          onClickCapture={(): void => {
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
              ...(!lightbox && {
                height: sizing.height,
                left: small ? sizing.left.small : sizing.left.default,
                maxHeight: small ? sizing.maxHeight.small : sizing.maxHeight.default,
                minHeight: sizing.minHeight,
                top: sizing.top,
                width: small ? sizing.width.small : sizing.width.default,
              }),
              ...css,
            }}
            lightbox={lightbox}>
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
