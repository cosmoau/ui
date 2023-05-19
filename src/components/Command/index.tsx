import { X } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { useEventListener, useOnClickOutside } from "usehooks-ts";

import { Button } from "../../index";
import { ICommand } from "../../types";

import {
  CommandContentStyled,
  CommandExitStyled,
  CommandOverlayStyled,
  CommandStyled,
} from "./Command.styles";

export function Command(props: ICommand): JSX.Element {
  const { css, children } = props;
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

  useOnClickOutside(ref, () => handleClose());

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
    if ((event.metaKey || event.ctrlKey) && event.key === "k") {
      event.preventDefault();
      if (isOpen) {
        handleClose();
      } else {
        handleOpen();
      }
    }
  });

  return (
    <CommandStyled>
      {isMounted && (
        <CommandOverlayStyled animation={isOpen}>
          <CommandContentStyled ref={ref} animation={isOpen} css={css}>
            <CommandExitStyled onClick={(): void => handleClose()}>
              <Button icon={<X />} small theme="minimal">
                Close
              </Button>
            </CommandExitStyled>
            {children}
          </CommandContentStyled>
        </CommandOverlayStyled>
      )}
    </CommandStyled>
  );
}
