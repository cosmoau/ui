import { MagnifyingGlass } from "phosphor-react";
import { useRef, useState } from "react";
import { useEventListener, useLockedBody, useOnClickOutside } from "usehooks-ts";

import { Input, Loading } from "../../index";
import { SelectProps } from "../../types";

import {
  SelectStyled,
  SelectTriggerStyled,
  SelectGroupStyled,
  SelectItemStyled,
  SelectFilterStyled,
  SelectEmptyStyled,
  SelectLabelStyled,
  SelectIconStyled,
} from "./Select.styles";

export function Select(props: SelectProps): JSX.Element {
  const {
    options,
    css,
    onSelection,
    label,
    locked,
    selection,
    width,
    height,
    horizontal = "left",
    vertical = "bottom",
    trigger,
    loading,
    last,
  } = props;
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [filter, setFilter] = useState("");

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

  function handleTriggerClick(): void {
    if (isOpen || isMounted) {
      handleClose();
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
  useOnClickOutside(ref, handleClose);

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
  });

  useLockedBody(locked ? isOpen : false);

  const filteredOptions = options
    ? options.filter((option) => {
        if (filter) {
          return option.label.toLowerCase().includes(filter.toLowerCase());
        } else {
          return option;
        }
      })
    : [];

  return (
    <SelectStyled css={css}>
      <SelectTriggerStyled onClickCapture={(): void => handleTriggerClick()}>
        {trigger}
      </SelectTriggerStyled>
      {isMounted && (
        <SelectGroupStyled
          ref={ref}
          animation={isOpen}
          css={{
            maxHeight: height || "50rem",
            maxWidth: width || "50rem",
            minWidth: width || "25rem",
          }}
          horizontal={horizontal}
          vertical={vertical}>
          {label && <SelectLabelStyled>{label}</SelectLabelStyled>}
          {options.length > 10 && (
            <SelectFilterStyled>
              <Input
                disabled={!options}
                icon={<MagnifyingGlass />}
                reset
                resetFunction={(): void => setFilter("")}
                submitValid={filter.length > 0}
                value={filter}
                onChange={(event): void => setFilter(event.target.value)}
              />
            </SelectFilterStyled>
          )}
          {loading ? (
            <Loading />
          ) : filteredOptions && filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <SelectItemStyled
                key={option.value + Math.random()}
                last={last && !filter}
                selected={
                  selection && selection.find((item) => item === option.value) ? true : false
                }
                onClick={(): void => handleSelection(option.value, option.label)}>
                {option.icon && option.iconPosition !== "right" && (
                  <SelectIconStyled align="left">{option.icon}</SelectIconStyled>
                )}
                {option.label}
                {option.icon && option.iconPosition === "right" && (
                  <SelectIconStyled align="right">{option.icon}</SelectIconStyled>
                )}
              </SelectItemStyled>
            ))
          ) : (
            <SelectEmptyStyled>No results found.</SelectEmptyStyled>
          )}
        </SelectGroupStyled>
      )}
    </SelectStyled>
  );
}
