import { useRouter } from 'next/router';
import { ReactNode, useRef, useState } from 'react';
import { useEventListener, useLockedBody, useOnClickOutside } from 'usehooks-ts';

import { Input, Loading, Stack, Text } from '../../index';
import { DefaultProps } from '../../stitches.config';

import {
  DropdownStyled,
  DropdownTriggerStyled,
  DropdownGroupStyled,
  DropdownItemStyled,
} from './Dropdown.styles';

interface Props extends DefaultProps {
  options: Array<{
    label: string;
    value: string;
  }>;
  align?: 'left' | 'right' | 'center';
  width?: number | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actions?: any;
  trigger: ReactNode;
  active?: string;
  submenu?: boolean;
  locked?: boolean;
  filter?: boolean;
  last?: boolean;
  loading?: boolean;
}

export default function Dropdown(props: Props): JSX.Element {
  const ref = useRef(null);
  const router = useRouter();

  const path = router?.pathname || '/';

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

  function handleClick(): void {
    if (isOpen || isMounted) {
      setIsOpen(false);
      setIsMounted(false);
    } else {
      handleOpen();
    }
  }

  const handleNavigate = (value: string): void => {
    router && router.push(value);
    handleClose();
  };

  const handleActions = (value: string, label: string): void => {
    if (props.actions) {
      props.actions(value, label);
    }
    handleClose();
  };

  useOnClickOutside(ref, () => handleClose());

  useEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  });

  useLockedBody(props.locked ? isOpen : false);

  const filteredOptions = props.filter
    ? props.options.filter((option) =>
        option.label.toLowerCase().includes(filter.toLowerCase())
      )
    : props.options;

  return (
    <DropdownStyled css={props.css} id={props.id}>
      <DropdownTriggerStyled
        key={props.active || Math.random()}
        onClickCapture={handleClick}>
        {props.trigger}
      </DropdownTriggerStyled>
      {isMounted && (
        <DropdownGroupStyled
          animation={isOpen}
          css={{
            left: props.align === 'left' ? '0' : 'auto',
            maxWidth: (props.width || '30rem') + '!important',
            minWidth: (props.width || '20rem') + '!important',
            right: props.align === 'right' ? '0' : 'auto',
          }}
          ref={ref}>
          {props.filter && (
            <Stack bottom={'2'} top={'1'}>
              <Input
                disabled={!props.options}
                onChange={(e): void => setFilter(e.target.value)}
                placeholder='Search'
              />
            </Stack>
          )}
          {props.loading ? (
            <Loading />
          ) : !props.options || filteredOptions.length === 0 ? (
            <Text accent as='p' css={{ padding: '$2 $3 $1 $3' }}>
              No results found.
            </Text>
          ) : (
            filteredOptions.map(({ label, value }) =>
              props.submenu ? (
                <DropdownItemStyled
                  css={{
                    ...(props.last &&
                      !props.filter && {
                        '&:last-child': {
                          borderTop: '0.1rem solid $border',
                          marginTop: '$4',
                        },
                      }),
                    color: path === value ? '$accent !important' : '$text',
                  }}
                  key={value}
                  submenu={true}>
                  <a onClickCapture={(): void => handleNavigate(value)}>{label}</a>
                </DropdownItemStyled>
              ) : (
                <DropdownItemStyled
                  css={{
                    ...(props.last &&
                      !props.filter && {
                        '&:last-child': {
                          borderTop: '0.1rem solid $border',
                          marginTop: '$4',
                        },
                      }),
                    color: props.active && props.active === value ? '$accent' : '$text',
                  }}
                  key={value}
                  onClickCapture={(): void => {
                    handleActions(value, label);
                  }}
                  submenu={false}>
                  {label}
                </DropdownItemStyled>
              )
            )
          )}
        </DropdownGroupStyled>
      )}
    </DropdownStyled>
  );
}
