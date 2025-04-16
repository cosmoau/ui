import { useEffect, useState, type JSX } from "react";

import {
  Input,
  Loading,
  Text,
  useBreakpoints,
  useEventListener,
  useOutsideClick,
  usePopper,
  useWindowDimensions,
} from "../../index";
import { ISelect } from "../../types";
import {
  SelectStyled,
  SelectTriggerStyled,
  SelectGroupStyled,
  SelectItemStyled,
  SelectFilterStyled,
  SelectEmptyStyled,
  SelectLabelStyled,
  SelectIconStyled,
} from "./styles";

export default function Select({
  css,
  disabled,
  filter,
  height,
  initial,
  label,
  last,
  loading,
  onSelection,
  options,
  trigger,
  triggerCSS,
  width,
  wrapperCSS,
}: ISelect): JSX.Element {
  const { contentRef, handleClick, handleClose, isMounted, isOpen, triggerRef } = usePopper();

  const { breakpoint } = useBreakpoints();
  const { height: windowHeight } = useWindowDimensions();

  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState("");
  const [selected, setSelected] = useState<string>(initial || "");

  useEffect(() => {
    if (!isOpen) {
      setSearch("");
      setFocused("");
    }
  }, [isOpen]);

  function handleSelection(value: string, label: string): void {
    setSelected(value);
    if (onSelection) {
      onSelection(value, label);
    }
    handleClose();
  }

  const deviceWidth = typeof window !== "undefined" ? Number(window?.innerWidth || 0) : 0;

  useOutsideClick(contentRef, () => handleClose());

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (breakpoint === "phone") {
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
    if (isOpen && event.key === "ArrowDown") {
      event.preventDefault();
      const index = options.findIndex((option) => option.value === focused);

      if (index < options.length - 1) {
        setFocused(options[index + 1].value);
      }
    }
    if (isOpen && event.key === "ArrowUp") {
      event.preventDefault();
      const index = options.findIndex((option) => option.value === focused);

      if (index > 0) {
        setFocused(options[index - 1].value);
      }
    }
    if (isOpen && event.key === "Enter") {
      event.preventDefault();
      const index = options.findIndex((option) => option.value === focused);

      if (index >= 0) {
        handleSelection(options[index].value, options[index].label);
      }
    }
  });

  const filteredOptions = options
    ? options.filter((option) => {
        if (search) {
          return option.label.toLowerCase().includes(search.toLowerCase());
        } else {
          return option;
        }
      })
    : [];

  return (
    <SelectStyled css={wrapperCSS}>
      <SelectTriggerStyled
        ref={triggerRef}
        css={triggerCSS}
        onClick={(e): void => {
          e.stopPropagation();
          if (!disabled) {
            handleClick();
          }
        }}>
        {trigger}
      </SelectTriggerStyled>
      {isMounted && (
        <SelectGroupStyled
          ref={contentRef}
          animation={isOpen}
          css={{
            height: height || "auto",
            maxHeight: windowHeight < 700 ? "50vh" : "70vh",
            maxWidth: width || "50rem",
            minWidth: width || filter ? "20rem" : "12.5rem",
            width: width || "auto",
            phone: {
              maxWidth: deviceWidth ? deviceWidth * 0.8 : "80vw",
            },
            ...css,
          }}>
          {label && (
            <SelectLabelStyled>
              <Text as="h5" bottom="none">
                {label}
              </Text>
            </SelectLabelStyled>
          )}
          {options.length > 10 && filter && (
            <SelectFilterStyled>
              <Input
                disabled={!options}
                name="select-filter"
                placeholder="Search..."
                submitValid={(): boolean => search.length > 0}
                value={search}
                onChange={(event): void => setSearch(event.target.value)}
              />
            </SelectFilterStyled>
          )}
          {loading ? (
            <Loading />
          ) : filteredOptions && filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <SelectItemStyled
                key={option.value}
                focused={option.value === focused && breakpoint !== "phone"}
                last={last && !search}
                selected={option.value === selected}
                onClick={(): void => handleSelection(option.value, option.label)}
                onMouseOver={(): void => {
                  if (breakpoint !== "phone" && focused !== "") {
                    setFocused(option.value);
                  }
                }}>
                {option.icon && option.iconPosition === "left" && (
                  <SelectIconStyled align="left">{option.icon}</SelectIconStyled>
                )}
                {option.label}
                {option.icon && option.iconPosition !== "left" && (
                  <SelectIconStyled align="right">{option.icon}</SelectIconStyled>
                )}
              </SelectItemStyled>
            ))
          ) : (
            <SelectEmptyStyled>No results</SelectEmptyStyled>
          )}
        </SelectGroupStyled>
      )}
    </SelectStyled>
  );
}
