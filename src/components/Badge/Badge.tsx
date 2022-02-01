import type * as Stitches from '@stitches/react';
import { keyframes } from '@stitches/react';
import { Circle } from 'phosphor-react';
import React from 'react';

import { styled } from '../../stitches.config';
import { Loading } from '../Loading';

export interface Props {
  css?: Stitches.CSS;
  id?: string;
  theme?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink' | 'border';
  loader?: boolean;
  shadow?: boolean;
  dot?: boolean | 'pulse';
  dotColor?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink';
  children: React.ReactNode;
}

function Badge({ css, id, theme, loader, shadow, dot, dotColor, children }: Props): JSX.Element {
  const BadgeWrapper = styled('div', {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    transition: '$1',
    paddingTop: '$1',
    paddingBottom: '$1',
    paddingLeft: 'calc($2 / 1.5)',
    paddingRight: 'calc($2 / 1.5)',
    borderRadius: '$3',
    fontSize: '1.55rem !important',
    lineHeight: '1.25',
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
        : '$baseContrast100',
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
        : '$base100',
    border: `0.1rem solid ${theme === 'border' ? '$border100' : 'transparent'}`,
    boxShadow: shadow ? '$3' : 'none',
    '&:disabled': {
      opacity: 0.5,
      cursor: 'wait',
    },
  });

  const pulseAnimation = keyframes({
    '0%': {
      opacity: 0.5,
      transform: 'scale(0.95)',
    },
    '50%': {
      opacity: 1,
      transform: 'scale(1)',
    },
    '100%': {
      opacity: 0.5,
      transform: 'scale(0.95)',
    },
  });

  const BadgeLoaderWrapper = styled('div', {
    height: '2.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$3',
  });

  const BadgeDotWrapper = styled('div', {
    color: `${
      dotColor === 'red'
        ? '$red100'
        : dotColor === 'yellow'
        ? '$yellow100'
        : dotColor === 'green'
        ? '$green100'
        : dotColor === 'blue'
        ? '$blue100'
        : dotColor === 'navy'
        ? '$navy100'
        : dotColor === 'purple'
        ? '$purple100'
        : dotColor === 'pink'
        ? '$pink100'
        : 'inherit'
    }`,
  });

  const BadgePulseWrapper = styled('div', {
    animation: `${pulseAnimation} 1.5s infinite`,
  });

  return (
    <BadgeWrapper css={css} id={id}>
      {loader ? (
        <BadgeLoaderWrapper>
          <Loading />
        </BadgeLoaderWrapper>
      ) : (
        <>
          {dot && (
            <BadgeDotWrapper>
              {dot === 'pulse' ? (
                <BadgePulseWrapper>
                  <Circle weight='fill' size={10} style={{ marginRight: 3.33 }} />
                </BadgePulseWrapper>
              ) : (
                <Circle weight='fill' size={10} style={{ marginRight: 3.33 }} />
              )}
            </BadgeDotWrapper>
          )}
          {children}
        </>
      )}
    </BadgeWrapper>
  );
}

export default Badge;
