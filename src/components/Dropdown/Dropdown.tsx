/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import React, { ReactNode, useRef, useState } from 'react';
import { useEventListener, useLockedBody, useOnClickOutside } from 'usehooks-ts';

import { DefaultProps } from '../../stitches.config';

import { DropdownStyled, DropdownTriggerStyled, DropdownGroupStyled, DropdownItemStyled } from './Dropdown.styles';

export interface Props extends DefaultProps {
  options: Array<{
    label: string;
    value: string;
  }>;

  align?: 'left' | 'right' | 'center';
  width?: number | string;
  actions?: any;
  trigger: ReactNode;
  active?: string;
  submenu?: boolean;
  locked?: boolean;
}

export default function Dropdown(props: Props): JSX.Element {
  const ref = useRef(null);
  const router = useRouter();

  const path = router?.pathname || '/';

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
    setTimeout(() => {
      setIsMounted(true);
    }, 25);
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
    router.push(value);
    handleClose();
  };

  const handleActions = (value: string, label: string): any => {
    props.actions(value, label);
    handleClose();
  };

  useOnClickOutside(ref, () => handleClose());

  useEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  });

  useLockedBody(props.locked ? isOpen : false);

  return (
    <DropdownStyled css={props.css} id={props.id}>
      <DropdownTriggerStyled key={props.active || Math.random()} onClickCapture={handleClick}>
        {props.trigger}
      </DropdownTriggerStyled>
      {isMounted && (
        <DropdownGroupStyled
          animation={isOpen}
          css={{
            left: props.align === 'left' ? '0' : 'auto',
            maxWidth: props.width || '15rem',
            minWidth: '15rem',
            right: props.align === 'right' ? '0' : 'auto',
          }}
          ref={ref}>
          {props.options.map(({ label, value }) =>
            props.submenu ? (
              <DropdownItemStyled
                css={{
                  opacity: path === value ? 0.44 : 1,
                }}
                key={value}
                submenu={true}>
                <a onClickCapture={(): void => handleNavigate(value)}>{label}</a>
              </DropdownItemStyled>
            ) : (
              <DropdownItemStyled
                css={{
                  opacity: props.active && props.active === value ? 0.44 : 1,
                }}
                key={value}
                onClickCapture={(): void => {
                  handleActions(value, label);
                }}
                submenu={false}>
                {label}
              </DropdownItemStyled>
            )
          )}
        </DropdownGroupStyled>
      )}
    </DropdownStyled>
  );
}
