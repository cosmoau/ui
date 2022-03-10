import { CSS } from '@stitches/react/types/css-util';
import React, { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';

import { Element } from '../Layout';
import { Loading } from '../Loading';

import ButtonStyles from './Button.styles';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  css?: CSS;
  disabled?: boolean;
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
  id?: string;
  inline?: boolean;
  inlineSpacer?: 1 | 2 | 3 | 4 | 5 | 6;
  loader?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  theme?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink' | 'transparent' | 'dark';
}

const { Wrapper, IconWrapper } = ButtonStyles();

export default function Button({ children, css, disabled, icon, iconPosition = 'left', id, inline = true, inlineSpacer, loader, onClick, theme, ...props }: Props): JSX.Element {
  return (
    <Wrapper {...props} css={css} disabled={disabled} id={id || undefined} inline={inline} inlineSpacer={inlineSpacer || 'default'} onClick={onClick} theme={theme || 'default'}>
      {icon && iconPosition && iconPosition === 'left' && <IconWrapper iconPosition={iconPosition}>{icon}</IconWrapper>}
      <Element>{loader ? <Loading /> : children}</Element>
      {icon && iconPosition && iconPosition === 'right' && <IconWrapper iconPosition={iconPosition}>{icon}</IconWrapper>}
    </Wrapper>
  );
}
