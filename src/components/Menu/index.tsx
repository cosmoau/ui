import { useRef, useState } from "react";
import { useEventListener, useOnClickOutside } from "usehooks-ts";

import { IMenu } from "../../types";

import { MenuGroupStyled, MenuItemStyled, MenuStyled, MenuTriggerStyled, MenuContentStyled } from "./styles";

export default function Menu({ css, trigger, options, selection, onSelection, children }: IMenu): JSX.Element {
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

  function handleSelection(value: string, label: string): void {
    if (onSelection) {
      onSelection(value, label);
    }
    handleClose();
  }

  useOnClickOutside(ref, () => handleClose());

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
  });

  return (
    <MenuStyled css={css}>
      <MenuTriggerStyled
        onClickCapture={(): void => {
          handleClick();
        }}>
        {trigger}
      </MenuTriggerStyled>

      {isMounted && (
        <MenuGroupStyled ref={ref} animation={isOpen}>
          {options.map((option) => (
            <MenuItemStyled
              key={option.value}
              selected={selection === option.value ? true : false}
              onClick={(): void => {
                handleSelection(option.value, option.label);
              }}>
              {option.label}
            </MenuItemStyled>
          ))}

          {children && <MenuContentStyled>{children}</MenuContentStyled>}
        </MenuGroupStyled>
      )}
    </MenuStyled>
  );
}
