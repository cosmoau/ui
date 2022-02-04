import type * as Stitches from '@stitches/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useRef, ReactNode } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { styled } from '../../stitches.config';
import { Heading } from '../Typography';

export interface Props {
  align?: 'left' | 'right' | 'center';
  css?: Stitches.CSS;
  hover?: boolean;
  id?: string;
  options: Array<{
    icon?: ReactNode;
    name: string;
    value: string;
  }>;
  passKey: string;
  trigger: ReactNode;
  width?: number;
}

export default function Submenu({
  align = 'left',
  css,
  hover,
  id,
  options,
  passKey,
  trigger,
  width,
}: Props): JSX.Element {
  const router = useRouter();
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const path = (router && router.pathname) || '/';

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  const Wrapper = styled('div', {
    position: 'relative',
    display: 'inline-flex',
  });

  const Trigger = styled('div', {
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    appearance: 'none',
    outline: 'none',
    userSelect: 'none',
    transition: '$1',
    '&:hover': {
      color: 'inherit',
      opacity: hover ? 0.7 : 1,
    },
  });

  const GroupWrapper = styled('div', {
    background: '$baseContrast100',
    borderRadius: '$2',
    border: '0.1rem solid $border100',
    boxShadow: '$3',
    boxSizing: 'border-box',
    overflowY: 'auto',
    position: 'absolute',
    padding: '$2',
    top: '120%',
    maxHeight: '50rem',
    width: '100%',
    minWidth: width ? `${width}rem` : '15rem',
    maxWidth: width ? `${width}rem` : '80rem',
    zIndex: '$dropdown',
    webkitoverflowscrolling: 'touch',
    left: align === 'right' ? 'auto' : 0,
    right: align === 'right' ? 0 : 'auto',
  });

  const ItemWrapper = styled('div', {
    display: 'flex',
    textAlign: 'left',
    transition: '$1',
    padding: '$3',
    borderBottom: '0.1rem solid $navy300',
    cursor: 'pointer',
    fontSize: '1.5rem',
    borderRadius: '$1',

    a: {
      display: 'block',
      width: '100%',
    },

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
    marginRight: '$3',
    height: '100%',
    position: 'relative',
    verticalAlign: 'middle',
    alignSelf: 'center',
  });

  return (
    <Wrapper css={css} id={id} key={passKey} ref={ref}>
      <Trigger onClick={handleClick}>{trigger}</Trigger>
      {isOpen && (
        <GroupWrapper>
          {options.map(({ value, name, icon }) => (
            <ItemWrapper key={value} className={path === value ? 'active' : ''}>
              <Link href={value || '#'}>
                <a
                  href={value || '#'}
                  onClickCapture={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                  }}>
                  {icon ? (
                    <IconWrapper>
                      {icon}&nbsp;{' '}
                      <Heading level={5} inline>
                        {name}
                      </Heading>
                    </IconWrapper>
                  ) : (
                    <Heading level={6}>{name}</Heading>
                  )}
                </a>
              </Link>
            </ItemWrapper>
          ))}
        </GroupWrapper>
      )}
    </Wrapper>
  );
}
