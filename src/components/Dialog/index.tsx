import { X } from "phosphor-react";
import { useRef, useState } from "react";
import { useEventListener, useLockedBody, useOnClickOutside } from "usehooks-ts";

import { Button, Text } from "../../index";
import { IDialog } from "../../types";

import {
  DialogContentStyled,
  DialogExitStyled,
  DialogOverlayStyled,
  DialogStyled,
  DialogTriggerStyled,
} from "./Dialog.styles";

export function Dialog(props: IDialog): JSX.Element {
  const { css, trigger, children, title, disabled, small } = props;
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
      event.preventDefault();
      handleClose();
    }
  });

  useLockedBody(isOpen);

  const device = typeof window !== "undefined" ? Number(window?.innerWidth || 0) : 0;

  const sizing = {
    height: {
      default: device < 900 ? "85%" : device < 1200 ? "80%" : "75%",
      small: device < 800 ? "50%" : device < 1200 ? "50%" : "45%",
    },
    left: {
      default: device < 900 ? "5%" : device < 1200 ? "10%" : "15%",
      small: device < 900 ? "10%" : device < 1200 ? "20%" : "27.5%",
    },
    top: {
      default: device < 900 ? "7.5%" : device < 1200 ? "10%" : "12.5%",
      small: device < 900 ? "25%" : device < 1200 ? "25%" : "27.5%",
    },
    width: {
      default: device < 900 ? "90%" : device < 1200 ? "80%" : "70%",
      small: device < 900 ? "80%" : device < 1200 ? "60%" : "45%",
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
          <DialogExitStyled onClick={(): void => handleClose()}>
            <Button
              css={{
                backgroundColor: "$background",
              }}
              icon={<X />}
              small>
              Close
            </Button>
          </DialogExitStyled>
          <DialogContentStyled
            ref={ref}
            animation={isOpen}
            css={{
              height: small ? sizing.height.small : sizing.height.default,
              left: small ? sizing.left.small : sizing.left.default,
              top: small ? sizing.top.small : sizing.top.default,
              width: small ? sizing.width.small : sizing.width.default,
              ...css,
            }}>
            {title && <Text as="h4">{title}</Text>}

            {children}
          </DialogContentStyled>
        </DialogOverlayStyled>
      )}
    </DialogStyled>
  );
}
