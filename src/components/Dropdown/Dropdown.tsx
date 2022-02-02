import type * as Stitches from '@stitches/react';
import React, { useState, useRef } from 'react';

import { styled } from '../../stitches.config';
import { Button } from '../Button';
import { Loading } from '../Loading';
import { Outsider } from '../Outsider';

export interface Props {
  css?: Stitches.CSS;
  options: Array<{
    value: string;
    name: string;
    icon?: React.ReactNode;
  }>;
  label: string | React.ReactNode;
  passKey: string;
  actions: any;
  align?: 'left' | 'right' | 'center';
}

function Dropdown({ css, options, label, passKey, actions, align = 'left' }: Props): JSX.Element {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  const handleActions = (value: string, name: string) => {
    actions(value, name);
    setIsOpen(false);
  };

  Outsider(ref, () => {
    setIsOpen(false);
  });

  const DropdownWrapper = styled('div', {
    position: 'relative',
    display: 'inline-flex',
  });

  const DropdownGroupWrapper = styled('div', {
    background: '$baseContrast100',
    borderRadius: '$2',
    border: '0.1rem solid $border100',
    boxShadow: '$3',
    boxSizing: 'border-box',
    overflowY: 'auto',
    position: 'absolute',
    padding: 'calc($2 / 1.5)',
    marginTop: 'calc($4 / 1.2)',
    maxHeight: '50rem',
    width: 'fit-content',
    minWidth: '20rem',
    maxWidth: '50rem',
    zIndex: 9999,
    webkitoverflowscrolling: 'touch',
    left: align === 'left' ? '0' : align === 'right' ? 'auto' : '50%',
    right: align === 'right' ? '0' : align === 'left' ? 'auto' : '50%',
    transform: align === 'left' ? 'translateX(-100%)' : align === 'right' ? 'translateX(100%)' : 'translateX(-50%)',
  });

  const DropdownItemWrapper = styled('div', {
    display: 'flex',
    textAlign: 'left',
    transition: '$1',
    padding: 'calc($2 / 1.8)',
    borderBottom: '0.1rem solid $navy300',
    cursor: 'pointer',
    fontSize: '1.6rem',

    '&:hover': {
      backgroundColor: '$navy400',
    },

    '&:last-child': {
      borderBottom: 0,
    },

    '&.active': {
      backgroundColor: '$navy400',

      '&:hover': {
        backgroundColor: '$navy400',
      },
    },
  });

  const DropdownIconWrapper = styled('div', {
    display: 'inline-flex',
    alignItems: 'center',
    width: 'auto',
    marginRight: '$2',
    height: '100%',
    position: 'relative',
    verticalAlign: 'middle',
  });

  return (
    <DropdownWrapper css={css} key={passKey} ref={ref}>
      <Button onClick={handleClick}>{label || <Loading />}</Button>
      {isOpen && (
        <DropdownGroupWrapper>
          {options.map((option) => (
            <DropdownItemWrapper
              className={label === option.name ? 'active' : 'inactive'}
              key={option.value}
              onClick={() => handleActions(option.value, option.name)}>
              {option.icon && <DropdownIconWrapper>{option.icon}</DropdownIconWrapper>}
              {option.name}
            </DropdownItemWrapper>
          ))}
        </DropdownGroupWrapper>
      )}
    </DropdownWrapper>
  );
}

export default Dropdown;
