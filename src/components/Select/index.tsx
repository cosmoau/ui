import { useRef, useState } from "react";
import { useEventListener, useLockedBody, useOnClickOutside } from "usehooks-ts";

import { Input, Loading, Stack, Text } from "../../index";
import { SelectProps } from "../../types";

import {
  SelectStyled,
  SelectTriggerStyled,
  SelectGroupStyled,
  SelectItemStyled,
} from "./Select.styles";

export function Select(props: SelectProps): JSX.Element {
  const {
    options,
    css,
    onSelection,
    locked,
    selection,
    width,
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
      handleClose();
    }
  });

  useLockedBody(locked ? isOpen : false);

  // Filter options and sort alphabetically, sometimes options are not available on first render, so we need to check for that, sometimes filter isn't set, so the options should just be sorted alphabetically
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
      <SelectTriggerStyled
        key={selection || Math.random()}
        onClickCapture={(): void => handleTriggerClick()}>
        {trigger}
      </SelectTriggerStyled>
      {isMounted && (
        <SelectGroupStyled
          ref={ref}
          animation={isOpen}
          css={{
            maxWidth: width || "30rem",
            minWidth: width || "20rem",
          }}
          horizontal={horizontal}
          vertical={vertical}>
          {options.length > 6 && (
            <Stack bottom="small" top="small">
              <Input
                disabled={!options}
                placeholder="Search"
                submitValid={filter.length > 0}
                value={filter}
                onChange={(event): void => setFilter(event.target.value)}
              />
            </Stack>
          )}
          {loading ? (
            <Loading />
          ) : filteredOptions && filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <SelectItemStyled
                key={option.value + Math.random()}
                css={{
                  color: selection === (option.value || option.label) ? "$accent" : "$text",
                  ...(last &&
                    !filter && {
                      "&:last-child": {
                        borderTop: "0.1rem solid $border",
                        marginTop: "$medium",
                      },
                    }),
                }}
                onClick={(): void => handleSelection(option.value, option.label)}>
                {option.label}
              </SelectItemStyled>
            ))
          ) : (
            <Text accent as="p" css={{ padding: "$smallest $small" }}>
              No results found.
            </Text>
          )}
        </SelectGroupStyled>
      )}
    </SelectStyled>
  );
}
