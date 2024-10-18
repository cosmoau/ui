import { useRef, useState } from "react";

import { Icons } from "../../icons";
import { Button, Text, useEventListener, useOutsideClick, useScrollLock } from "../../index";
import { IMenu } from "../../types";

import {
  MenuGroupStyled,
  MenuItemStyled,
  MenuStyled,
  MenuTriggerStyled,
  MenuContentStyled,
  MenuIconStyled,
  MenuSubItemStyled,
  MenuSubGroupStyled,
  MenuHeaderStyled,
} from "./styles";

export default function Menu({
  css,
  trigger,
  options,
  initial,
  onSelection,
  children,
  full,
  logo,
}: IMenu): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [subMenu, setSubMenu] = useState<string | null>(null);

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

  useScrollLock(isMounted);
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
        <MenuGroupStyled ref={ref} animation={isOpen} full={full ? true : false}>
          {full && (
            <MenuHeaderStyled>
              {logo ?? (
                <Text as="h4" inline="auto">
                  Menu
                </Text>
              )}

              <Button small onClick={(): void => handleClose()}>
                <Icons.ArrowsInSimple weight="regular" />
              </Button>
            </MenuHeaderStyled>
          )}
          {options.map((option) => (
            <>
              <MenuItemStyled
                key={option.value}
                selected={initial === option.value || subMenu === option.value}
                onClick={(): void => {
                  if (option.sub) {
                    setSubMenu(subMenu === option.value ? null : option.value);
                  } else {
                    setSubMenu(null);
                    handleSelection(option.value, option.label);
                  }
                }}>
                {option.label}{" "}
                {option.sub && (
                  <MenuIconStyled open={subMenu === option.value}>
                    <Icons.CaretDown />
                  </MenuIconStyled>
                )}
              </MenuItemStyled>
              {option.sub && subMenu === option.value && (
                <MenuSubGroupStyled>
                  {option.sub.map((subOption) => (
                    <MenuSubItemStyled
                      key={subOption.value}
                      selected={initial === subOption.value ? true : false}
                      onClick={(): void => {
                        handleSelection(subOption.value, subOption.label);
                      }}>
                      {subOption.label}
                    </MenuSubItemStyled>
                  ))}
                </MenuSubGroupStyled>
              )}
            </>
          ))}

          {children && <MenuContentStyled>{children}</MenuContentStyled>}
        </MenuGroupStyled>
      )}
    </MenuStyled>
  );
}
