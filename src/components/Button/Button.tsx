import type * as Stitches from '@stitches/react';
import classNames from 'classnames';
import React from 'react';

import { styled } from '../../stitches.config';
import { Loading } from '../Loading';

export interface Props {
  className?: string;
  css?: Stitches.CSS;
  id?: string;
  theme?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink' | 'transparent';
  loader?: boolean;
  icon?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

function Button({ className, css, id, theme, loader, icon, onClick, children }: Props): JSX.Element {
  const ButtonWrapper = styled('button', {
    // resets
    appearance: 'none',
    outline: 'none',
    cursor: 'pointer',
    margin: 0,
    width: 'auto',
    font: '$untitled',
    webkitFontSmoothing: 'inherit',
    mozOsxFontSmoothing: 'inherit',
    webkitAppearance: 'none',
    overflow: 'visible',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '&::-moz-focus-inner': {
      border: 0,
      padding: 0,
      outline: 0,
      outlineOffset: 0,
    },
    '&:focus': {
      outline: 0,
    },
    // custom
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    verticalAlign: 'middle',
    position: 'relative',
    transition: '$1',
    paddingTop: 'calc($2 / 4)',
    fontWeight: '$1',
    paddingBottom: 'calc($2 / 4)',
    paddingLeft: '$2',
    paddingRight: '$2',
    borderRadius: '$1',
    fontSize: '1.7rem',
    border: `0.1rem solid ${
      theme === 'red'
        ? '$red400'
        : theme === 'yellow'
        ? '$yellow400'
        : theme === 'green'
        ? '$green400'
        : theme === 'blue'
        ? '$blue400'
        : theme === 'navy'
        ? '$navy400'
        : theme === 'purple'
        ? '$purple400'
        : theme === 'pink'
        ? '$pink400'
        : theme === 'transparent'
        ? 'transparent'
        : '$dark300'
    }`,
    backgroundColor:
      theme === 'red'
        ? '$red300'
        : theme === 'yellow'
        ? '$yellow300'
        : theme === 'green'
        ? '$green300'
        : theme === 'blue'
        ? '$blue300'
        : theme === 'navy'
        ? '$navy300'
        : theme === 'purple'
        ? '$purple300'
        : theme === 'pink'
        ? '$pink300'
        : theme === 'transparent'
        ? 'transparent'
        : '$light100',
    color:
      theme === 'red'
        ? '$red100'
        : theme === 'yellow'
        ? '$yellow100'
        : theme === 'green'
        ? '$green100'
        : theme === 'blue'
        ? '$blue100'
        : theme === 'navy'
        ? '$navy100'
        : theme === 'purple'
        ? '$purple100'
        : theme === 'pink'
        ? '$pink100'
        : '$dark100',
    boxShadow: '$1',
    '&:disabled': {
      opacity: 0.5,
      cursor: 'wait',
    },
    '&:hover': {
      backgroundColor:
        theme === 'red'
          ? '$red200'
          : theme === 'yellow'
          ? '$yellow200'
          : theme === 'green'
          ? '$green200'
          : theme === 'blue'
          ? '$blue200'
          : theme === 'navy'
          ? '$navy200'
          : theme === 'purple'
          ? '$purple200'
          : theme === 'pink'
          ? '$pink200'
          : '$navy300',
    },
  });

  const ButtonIconWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    marginRight: 'calc($2 / 2)',
  });

  return (
    <ButtonWrapper className={classNames(className)} css={css} id={id} onClick={onClick}>
      {loader ? (
        <Loading />
      ) : (
        <>
          {icon && <ButtonIconWrapper>{icon}</ButtonIconWrapper>}
          {children}
        </>
      )}
    </ButtonWrapper>
  );
}

export default Button;
