import type * as Stitches from '@stitches/react';
import React, { useState, useRef, ReactNode } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { styled } from '../../stitches.config';
import { Button } from '../Button';
import { Loading } from '../Loading';

export interface Props {
  actions: any;
  align?: 'left' | 'right' | 'center';
  css?: Stitches.CSS;
  id?: string;
  label: string | ReactNode;
  options: Array<{
    icon?: ReactNode;
    name: string;
    value: string;
  }>;
  passKey: string;
  width?: number;
}

export default function Dropdown({
  actions,
  align = 'left',
  css,
  id,
  label,
  options,
  passKey,
  width,
}: Props): JSX.Element {
  const ref = useRef(null);
  const [isShown, setIsShown] = useState(false);

  const handleClick = (): void => {
    setIsShown(!isShown);
  };

  const handleActions = (value: string, name: string) => {
    actions(value, name);
    setIsShown(false);
  };

  useOnClickOutside(ref, () => {
    setIsShown(false);
  });

  const Wrapper = styled('div', {
    position: 'relative',
    display: 'inline-flex',
  });

  const GroupWrapper = styled('div', {
    background: '$baseContrast100',
    borderRadius: '$2',
    border: '0.1rem solid $border100',
    boxShadow: '$3',
    boxSizing: 'border-box',
    overflowY: 'auto',
    position: 'absolute',
    padding: 'calc($2 / 2)',
    top: '120%',
    maxHeight: '50rem',
    width: '100%',
    minWidth: width ? `${width}rem` : '15rem',
    maxWidth: width ? `${width}rem` : '80rem',
    zIndex: '$dropdown - 1',
    webkitoverflowscrolling: 'touch',
    left: align === 'right' ? 'auto' : 0,
    right: align === 'right' ? 0 : 'auto',
  });

  const ItemWrapper = styled('div', {
    display: 'flex',
    textAlign: 'left',
    transition: '$1',
    padding: 'calc($2 / 2)',
    borderBottom: '0.1rem solid $navy300',
    cursor: 'pointer',
    fontSize: '1.7rem',
    borderRadius: '$1',

    '&:hover': {
      backgroundColor: '$navy400',
    },

    '&:last-child': {
      borderBottom: 0,
    },

    '&.active': {
      backgroundColor: '$navy300',

      '&:hover': {
        backgroundColor: '$navy400',
      },
    },
  });

  const IconWrapper = styled('div', {
    display: 'inline-flex',
    alignItems: 'center',
    width: 'auto',
    marginRight: '$2',
    height: '100%',
    position: 'relative',
    verticalAlign: 'middle',
    alignSelf: 'center',
  });

  return (
    <Wrapper css={css} id={id} key={passKey} ref={ref}>
      <Button onClick={handleClick}>{label || <Loading />}</Button>
      {isShown && (
        <GroupWrapper>
          {options.map((option) => (
            <ItemWrapper
              className={label === option.name ? 'active' : 'inactive'}
              key={option.value}
              onClick={() => handleActions(option.value, option.name)}>
              {option.icon && <IconWrapper>{option.icon}</IconWrapper>}
              {option.name}
            </ItemWrapper>
          ))}
        </GroupWrapper>
      )}
    </Wrapper>
  );
}
