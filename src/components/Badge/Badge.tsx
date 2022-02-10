import { keyframes } from '@stitches/react';
import { CSS } from '@stitches/react/types/css-util';
import { Circle } from 'phosphor-react';
import React, { ReactNode } from 'react';

import { styled } from '../../stitches.config';
import { Loading } from '../Loading';

export interface Props {
  children: ReactNode;
  css?: CSS;
  dot?: boolean | 'pulse';
  dotColor?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink';
  id?: string;
  inline?: boolean;
  inlineSpacer?: number;
  loader?: boolean;
  shadow?: boolean;
  theme?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink' | 'border';
}

export default function Badge({ children, css, dot, dotColor, id, inline = true, inlineSpacer = 0, loader, shadow, theme }: Props): JSX.Element {
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

  const Wrapper = styled('div', {
    lineHeight: 1.15,
    display: inline ? 'inline-block' : 'block',
    marginRight: inlineSpacer ? `${inlineSpacer}rem` : 0,
    textAlign: 'center',
    verticalAlign: 'middle',
    position: 'relative',
    transition: '$1',
    padding: '$2 calc($4 / 1.5)',
    borderRadius: '$3',
    fontSize: '1.55rem !important',
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
    border: `0.1rem solid ${theme === 'border' ? '$border200' : 'transparent'}`,
    boxShadow: shadow ? '$2' : 'none',
    '&:disabled': {
      opacity: 0.5,
      cursor: 'wait',
    },
  });

  const PulseWrapper = styled('div', {
    animation: `${pulseAnimation} 1.5s infinite`,
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '$1',
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

  return loader ? (
    <Wrapper
      id={id}
      css={{
        height: '$7',
      }}>
      <Loading />
    </Wrapper>
  ) : (
    <Wrapper css={css} id={id}>
      {dot &&
        (dot === 'pulse' ? (
          <PulseWrapper>
            <Circle weight='fill' size={10} style={{ marginRight: 3.33 }} />
          </PulseWrapper>
        ) : (
          <Circle weight='fill' size={10} style={{ marginRight: 3.33 }} />
        ))}
      {children}
    </Wrapper>
  );
}
