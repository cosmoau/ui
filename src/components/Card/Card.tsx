import { CSS } from '@stitches/react/types/css-util';
import React, { ReactNode } from 'react';

import CardStyles from './Card.styles';

export interface Props {
  border?: boolean;
  children: ReactNode;
  css?: CSS;
  extra?: boolean;
  id?: string;
  image?: ReactNode;
  imageHeight?: string;
  loader?: boolean;
  minimal?: boolean;
  theme?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink' | 'transparent';
}

const { Wrapper, ImageWrapper, ImageChildrenWrapper } = CardStyles();

export default function Card({ css, extra, id, theme, loader, border, image, imageHeight, minimal, children }: Props): JSX.Element {
  return image ? (
    <Wrapper border={border} css={css} id={id} loader={loader} padding={minimal ? 'none' : image ? 'none' : !image && extra ? 'extra' : 'default'} theme={theme || 'default'}>
      <ImageWrapper
        css={{
          height: imageHeight || '15rem',
        }}>
        {image}
      </ImageWrapper>
      <ImageChildrenWrapper padding={minimal ? 'none' : extra ? 'extra' : 'default'}>{children}</ImageChildrenWrapper>
    </Wrapper>
  ) : (
    <Wrapper css={css} id={id}>
      {children}
    </Wrapper>
  );
}
