import { ReactNode, useRef, useState } from 'react';
import { useEventListener, useLockedBody, useOnClickOutside } from 'usehooks-ts';

import { Input, Loading, Stack, Text } from '../../index';
import { DefaultProps } from '../../stitches.config';

import { SelectStyled, SelectTriggerStyled, SelectGroupStyled, SelectItemStyled } from './Select.styles';

interface Props extends DefaultProps {
  options: Array<{
    label: string;
    value: string;
  }>;
  align?: 'left' | 'right' | 'center';
  width?: number | string;
  selection?: string;
  onSelection?: (value: string, label: string) => void;
  trigger: ReactNode;
  locked?: boolean;
  filter?: boolean;
  last?: boolean;
  loading?: boolean;
}

export default function Select(props: Props): JSX.Element {
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [filter, setFilter] = useState('');

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
    if (props.onSelection) {
      props.onSelection(value, label);
    }
    handleClose();
  }

  function handleFilter(): Array<{
    label: string;
    value: string;
  }> {
    if (props.filter) {
      return props.options.filter((option) => option.label.toLowerCase().includes(filter.toLowerCase()));
    }
    return props.options;
  }

  useOnClickOutside(ref, handleClose);

  useEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  });

  useLockedBody(props.locked ? isOpen : false);

  return (
    <SelectStyled css={props.css}>
      <SelectTriggerStyled key={props.selection || Math.random()} onClickCapture={handleTriggerClick}>
        {props.trigger}
      </SelectTriggerStyled>
      {isMounted && (
        <SelectGroupStyled
          animation={isOpen}
          css={{
            left: props.align === 'left' ? '0' : 'auto',
            maxWidth: props.width || '30rem',
            minWidth: props.width || '20rem',
            right: props.align === 'right' ? '0' : 'auto',
          }}
          ref={ref}>
          {props.filter && (
            <Stack bottom={'2'} top={'1'}>
              <Input
                disabled={!props.options}
                onChange={(event): void => setFilter(event.target.value)}
                placeholder='Search'
                submitValid={filter.length > 0}
                value={filter}
              />
            </Stack>
          )}
          {props.loading ? (
            <Loading />
          ) : handleFilter().length ? (
            handleFilter().map((option) => (
              <SelectItemStyled
                css={{
                  color: props.selection === (option.value || option.label) ? '$accent' : '$text',
                  ...(props.last &&
                    !props.filter && {
                      '&:last-child': {
                        borderTop: '0.1rem solid $border',
                        marginTop: '$4',
                      },
                    }),
                }}
                key={option.value + Math.random()}
                onClick={(): void => handleSelection(option.value, option.label)}>
                {option.label}
              </SelectItemStyled>
            ))
          ) : (
            <Text accent as='p' css={{ padding: '$2 $3 $1 $3' }}>
              No results found.
            </Text>
          )}
        </SelectGroupStyled>
      )}
    </SelectStyled>
  );
}

export function Dropdown(props: Props): JSX.Element {
  console.warn('Dropdown was renamed. Please use Select instead.');
  return <Select {...props} />;
}
