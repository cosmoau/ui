import { useRef, useState } from "react";

import { useEventListener, useOutsideClick } from "../../index";
import { IMenu } from "../../types";

import { MenuGroupStyled, MenuItemStyled, MenuStyled, MenuTriggerStyled, MenuContentStyled } from "./styles";

export default function Menu({ css, trigger, options, initial, onSelection, children }: IMenu): JSX.Element {
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

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
  });

  useOutsideClick(ref, () => handleClose());

  return (
    <MenuStyled css={css}>
      <MenuTriggerStyled
        onClick={(e): void => {
          e.stopPropagation();
          handleClick();
        }}>
        {trigger}
      </MenuTriggerStyled>

      {isMounted && (
        <MenuGroupStyled ref={ref} animation={isOpen}>
          {options.map((option) => (
            <MenuItemStyled
              key={option.value}
              selected={initial === option.value ? true : false}
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
