import { CSS } from '@stitches/react/types/css-util';
import React, { ReactNode } from 'react';

import TypographyStyles from './Typography.styles';

const { HeadingOneWrapper, HeadingTwoWrapper, HeadingThreeWrapper, HeadingFourWrapper, HeadingFiveWrapper, HeadingSixWrapper } = TypographyStyles();

export interface Props {
  align?: 'left' | 'center' | 'right' | 'justify' | 'initial' | 'inherit';
  bottom?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: ReactNode;
  css?: CSS;
  id?: string;
  inline?: boolean;
  inlineSpacer?: 1 | 2 | 3 | 4 | 5 | 6;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  top?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export default function Heading({ align = 'inherit', bottom, children, css, id, inline = false, inlineSpacer, level, top }: Props): JSX.Element {
  const Wrapper =
    level === 1
      ? HeadingOneWrapper
      : level === 2
      ? HeadingTwoWrapper
      : level === 3
      ? HeadingThreeWrapper
      : level === 4
      ? HeadingFourWrapper
      : level === 5
      ? HeadingFiveWrapper
      : HeadingSixWrapper;

  return (
    <Wrapper
      bottom={bottom}
      css={{
        textAlign: align,
        ...css,
      }}
      id={id}
      inline={inline}
      inlineSpacer={inlineSpacer || 'default'}
      top={top}>
      {children}
    </Wrapper>
  );
}
