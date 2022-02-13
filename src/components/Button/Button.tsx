import { CSS } from '@stitches/react/types/css-util';
import React, { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';

import { styled } from '../../stitches.config';
import { Loading } from '../Loading';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  css?: CSS;
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
  id?: string;
  inline?: boolean;
  inlineSpacer?: number;
  loader?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  theme?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink' | 'transparent' | 'dark';
}

export default function Button({ children, css, icon, iconPosition = 'left', id, inline = true, inlineSpacer = 0, loader, onClick, theme, ...props }: Props): JSX.Element {
  const Wrapper = styled('button', {
    display: inline ? 'inline-block' : 'block',
    marginRight: inlineSpacer ? `${inlineSpacer}rem` : 0,
    textAlign: 'center',
    alignContent: 'center',
    verticalAlign: 'middle',
    position: 'relative',
    transition: '$1',
    fontWeight: 'normal',
    padding: '$2 $4',
    borderRadius: '$1',
    ft: '$h5',
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
        ? '$navy200'
        : theme === 'purple'
        ? '$purple400'
        : theme === 'pink'
        ? '$pink400'
        : theme === 'transparent'
        ? 'transparent'
        : theme === 'dark'
        ? '$base100'
        : '$border100'
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
        : theme === 'dark'
        ? '$base100'
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
        : theme === 'transparent'
        ? '$base100'
        : theme === 'dark'
        ? '$baseContrast100'
        : '$base100',
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
          : theme === 'transparent'
          ? '$navy200'
          : theme === 'dark'
          ? '$base200'
          : '$navy300',
    },
  });

  const IconWrapper = styled('div', {
    display: 'inline-flex',
    verticalAlign: 'middle',
    marginRight: iconPosition === 'left' ? '$3' : 0,
    marginLeft: iconPosition === 'right' ? '$3' : 0,

    svg: {
      verticalAlign: 'middle',
      width: '2.1rem',
      height: '2.1rem',
    },
  });
  return loader ? (
    <Wrapper>
      <Loading />
    </Wrapper>
  ) : (
    <Wrapper {...props} css={css} id={id} onClick={onClick}>
      {icon && iconPosition && iconPosition === 'left' && <IconWrapper>{icon}</IconWrapper>}
      {children}
      {icon && iconPosition && iconPosition === 'right' && <IconWrapper>{icon}</IconWrapper>}
    </Wrapper>
  );
}
