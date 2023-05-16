import { X } from "phosphor-react";
import { useRef, useState } from "react";
import { useEventListener, useLockedBody, useOnClickOutside } from "usehooks-ts";

import { Button, Text } from "../../index";
import { IDialog } from "../../types";

import {
  DialogContentStyled,
  DialogCoreStyled,
  DialogHeaderStyled,
  DialogOverlayStyled,
  DialogStyled,
  DialogTriggerStyled,
} from "./Dialog.styles";

export function Dialog(props: IDialog): JSX.Element {
  const { css, trigger, children, title, disabled, small } = props;
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

  useOnClickOutside(ref, () => handleClose());

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
  });

  useLockedBody(isOpen);

  const innerWidth = typeof window !== "undefined" ? Number(window?.innerWidth || 0) : 0;
  const innerHeight = typeof window !== "undefined" ? Number(window?.innerHeight || 0) : 0;
  const content = ref?.current?.clientHeight || 0;

  const sizing = {
    height: "auto",
    left: {
      default: innerWidth < 900 ? "5%" : innerWidth < 1200 ? "10%" : "15%",
      small: innerWidth < 900 ? "10%" : innerWidth < 1200 ? "20%" : "27.5%",
    },
    maxHeight: {
      default: innerWidth < 900 ? "85%" : innerWidth < 1200 ? "70%" : "50%",
      small: innerWidth < 900 ? "70%" : innerWidth < 1200 ? "50%" : "30%",
    },
    top: content && innerHeight > 0 ? (innerHeight - content) / 2 : "10rem",
    width: {
      default: innerWidth < 900 ? "90%" : innerWidth < 1200 ? "80%" : "70%",
      small: innerWidth < 900 ? "80%" : innerWidth < 1200 ? "60%" : "45%",
    },
  };

  return (
    <DialogStyled>
      <DialogTriggerStyled
        onClickCapture={(): void => {
          if (!disabled) {
            handleClick();
          }
        }}>
        {trigger}
      </DialogTriggerStyled>
      {isMounted && (
        <DialogOverlayStyled animation={isOpen}>
          <DialogCoreStyled
            ref={ref}
            animation={isOpen}
            css={{
              height: "auto",
              left: small ? sizing.left.small : sizing.left.default,
              maxHeight: small ? sizing.maxHeight.small : sizing.maxHeight.default,
              minHeight: "10%",
              top: sizing.top,
              width: small ? sizing.width.small : sizing.width.default,
              ...css,
            }}>
            <DialogHeaderStyled>
              <Text as="h4">{title}</Text>

              <Button icon={<X />} small onClick={(): void => handleClose()}>
                Close
              </Button>
            </DialogHeaderStyled>
            <DialogContentStyled>{children}</DialogContentStyled>
          </DialogCoreStyled>
        </DialogOverlayStyled>
      )}
    </DialogStyled>
  );
}
