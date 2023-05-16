import { X } from "phosphor-react";
import { useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { useEventListener, useLockedBody, useOnClickOutside } from "usehooks-ts";

import { Button } from "../../index";
import { IDialog } from "../../types";

import {
  DialogContentStyled,
  DialogExitStyled,
  DialogOverlayStyled,
  DialogStyled,
  DialogTriggerStyled,
} from "./Dialog.styles";

export function Dialog(props: IDialog): JSX.Element {
  const { css, trigger, children, disabled, small } = props;
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

  useLockedBody(isMobile && isOpen);

  const deviceWidth = typeof window !== "undefined" ? Number(window?.innerWidth || 0) : 0;
  const deviceHeight = typeof window !== "undefined" ? Number(window?.innerHeight || 0) : 0;

  const stylings = small
    ? {
        height: deviceHeight < 900 ? "60%" : deviceHeight < 1200 ? "50%" : "40%",
        left: deviceWidth < 900 ? "5%" : deviceWidth < 1200 ? "25%" : "30%",
        top: deviceHeight < 900 ? "20%" : deviceHeight < 1200 ? "25%" : "25%",
        width: deviceWidth < 900 ? "90%" : deviceWidth < 1200 ? "50%" : "40%",
      }
    : {
        height: deviceHeight < 900 ? "90%" : deviceHeight < 1200 ? "70%" : "60%",
        left: deviceWidth < 900 ? "5%" : deviceWidth < 1200 ? "15%" : "20%",
        top: deviceHeight < 900 ? "5%" : deviceHeight < 1200 ? "15%" : "15%",
        width: deviceWidth < 900 ? "90%" : deviceWidth < 1200 ? "70%" : "60%",
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
          <DialogContentStyled
            ref={ref}
            animation={isOpen}
            css={{
              ...css,
              ...stylings,
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
