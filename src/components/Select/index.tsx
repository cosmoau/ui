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

  function handleFilter(): Array<{
    label: string;
    value: string;
  }> {
    if (filter) {
      return options.filter((option) => option.label.toLowerCase().includes(filter.toLowerCase()));
    }
    return options;
  }

  useOnClickOutside(ref, handleClose);

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      handleClose();
    }
  });

  useLockedBody(locked ? isOpen : false);

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
          {filter && (
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
          ) : handleFilter().length ? (
            handleFilter().map((option) => (
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
            <Text accent as="p" css={{ padding: "$b $small $smallest $small" }}>
              No results found.
            </Text>
          )}
        </SelectGroupStyled>
      )}
    </SelectStyled>
  );
}
