/* eslint-disable jsx-a11y/anchor-is-valid */
import type * as Stitches from '@stitches/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useRef } from 'react';

import { styled } from '../../stitches.config';
import { Outsider } from '../Outsider';

export interface Props {
  css?: Stitches.CSS;
  options: Array<{
    value: string;
    name: string;
    icon?: React.ReactNode;
  }>;
  trigger: React.ReactNode;
  passKey: string;
  align?: 'left' | 'right' | 'center';
}

export default function Submenu({ css, options, trigger, passKey, align = 'left' }: Props): JSX.Element {
  const router = useRouter();
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const path = (router && router.pathname) || '/';

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  Outsider(ref, () => {
    setIsOpen(false);
  });

  const SubmenuWrapper = styled('div', {
    position: 'relative',
    display: 'inline-flex',
  });

  const SubmenuTrigger = styled('div', {
    display: 'inline-block',
    position: 'relative',
  });

  const SubmenuGroupWrapper = styled('div', {
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
    width: '100%',
    minWidth: '15rem',
    maxWidth: '60rem',
    zIndex: 9999,
    webkitoverflowscrolling: 'touch',
    left: align === 'left' ? '0' : align === 'right' ? 'auto' : '50%',
    right: align === 'right' ? '0' : align === 'left' ? 'auto' : '50%',
  });

  const SubmenuItemWrapper = styled('div', {
    display: 'flex',
    textAlign: 'left',
    transition: '$1',
    padding: 'calc($2 / 1.8)',
    borderBottom: '0.1rem solid $navy300',
    cursor: 'pointer',
    fontSize: '1.6rem',

    a: {
      display: 'block',
      width: '100%',
    },

    '&:hover': {
      backgroundColor: '$navy300',
    },

    '&:last-child': {
      borderBottom: 0,
    },

    '&.active': {
      backgroundColor: '$navy400',

      '&:hover': {
        backgroundColor: '$navy300',
      },
    },
  });

  const SubmenuIconWrapper = styled('div', {
    display: 'inline-flex',
    alignItems: 'center',
    width: 'auto',
    marginRight: '$2',
    height: '100%',
    position: 'relative',
    verticalAlign: 'middle',
  });

  return (
    <SubmenuWrapper css={css} key={passKey} ref={ref}>
      <SubmenuTrigger onClick={handleClick}>{trigger}</SubmenuTrigger>
      {isOpen && (
        <SubmenuGroupWrapper>
          {options.map(({ value, name, icon }) => (
            <SubmenuItemWrapper key={value} className={path === value ? 'active' : ''}>
              <Link href={value || '#'}>
                <a
                  onClickCapture={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                  }}>
                  {icon ? (
                    <SubmenuIconWrapper>
                      {icon}&nbsp; {name}
                    </SubmenuIconWrapper>
                  ) : (
                    name
                  )}
                </a>
              </Link>
            </SubmenuItemWrapper>
          ))}
        </SubmenuGroupWrapper>
      )}
    </SubmenuWrapper>
  );
}
