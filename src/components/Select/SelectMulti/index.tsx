import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Icons } from "../../../icons";
import {
  Input,
  Loading,
  Text,
  useBreakpoints,
  useEventListener,
  useOutsideClick,
  usePopper,
  useWindowDimensions,
} from "../../../index";
import { ISelectMulti } from "../../../types";
import {
  SelectStyled,
  SelectTriggerStyled,
  SelectGroupStyled,
  SelectItemStyled,
  SelectFilterStyled,
  SelectEmptyStyled,
  SelectLabelStyled,
  SelectIconStyled,
} from "../styles";

export default function SelectMulti({
  options,
  css,
  onSelection,
  label,
  disabled,
  initial,
  width,
  height,
  limit,
  trigger,
  loading,
  reset = true,
  filter,
}: ISelectMulti): JSX.Element {
  const { triggerRef, contentRef, isOpen, isMounted, handleClick, handleClose } = usePopper();

  const { breakpoint } = useBreakpoints();
  const { height: windowHeight } = useWindowDimensions();

  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState("");
  const [selected, setSelected] = useState<Array<{ label: string; value: string }>>(initial || []);

  useEffect(() => {
    if (!isOpen) {
      setSearch("");
      setFocused("");
    }
  }, [isOpen]);

  function handleSelection(option: { label: string; value: string }): void {
    const selectionIndex = selected.findIndex((item) => item.value === option.value);
    let newSelectedItems;

    if (selectionIndex === -1) {
      if (!limit || selected.length < limit) {
        newSelectedItems = [...selected, option];
        setSelected(newSelectedItems);
        if (onSelection) {
          onSelection(newSelectedItems);
        }
      } else {
        toast(`Maximum selections reached (${limit}).`);
      }
    } else {
      newSelectedItems = [
        ...selected.slice(0, selectionIndex),
        ...selected.slice(selectionIndex + 1),
      ];
      setSelected(newSelectedItems);
      if (onSelection) {
        onSelection(newSelectedItems);
      }
    }
  }

  function handleReset(): void {
    setSelected([]);
    if (onSelection) {
      onSelection([]);
    }
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
        handleSelection(options[index]);
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
    <SelectStyled css={css}>
      <SelectTriggerStyled
        ref={triggerRef}
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
            phone: {
              maxWidth: deviceWidth ? deviceWidth * 0.8 : "80vw",
            },
            width: width || "auto",
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
                placeholder="Search..."
                reset
                resetFunction={(): void => setSearch("")}
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
                selected={selected.findIndex((item) => item.value === option.value) !== -1}
                onClick={(): void => handleSelection(option)}
                onMouseOver={(): void => {
                  if (breakpoint !== "phone" && focused !== "") {
                    setFocused(option.value);
                  }
                }}>
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
          {reset && selected.length > 0 && (
            <SelectItemStyled
              key="reset"
              last
              onClick={(): void => handleReset()}
              onMouseOver={(): void => {
                if (breakpoint !== "phone" && focused !== "") {
                  setFocused("");
                }
              }}>
              Reset
              <SelectIconStyled align="right">
                <Icons.XCircle />
              </SelectIconStyled>
            </SelectItemStyled>
          )}
        </SelectGroupStyled>
      )}
    </SelectStyled>
  );
}
