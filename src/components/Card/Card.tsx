import type * as Stitches from '@stitches/react';
import React, { ReactNode } from 'react';

import { styled } from '../../stitches.config';

export interface Props {
  border?: boolean;
  children: ReactNode;
  css?: Stitches.CSS;
  id?: string;
  image?: ReactNode;
  imageHeight?: string;
  loader?: boolean;
  minimal?: boolean;
  theme?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink' | 'transparent';
}

export default function Card({
  css,
  id,
  theme,
  loader,
  border,
  image,
  imageHeight,
  minimal,
  children,
}: Props): JSX.Element {
  const Wrapper = styled('div', {
    padding: minimal ? 0 : image ? 0 : 'calc($3 / 1.25)',
    height: '100%',
    display: 'block',
    borderRadius: '$2',
    transition: '$1',
    color: 'inherit',
    opacity: loader ? 0.5 : 1,
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
        ? '$navy200'
        : theme === 'purple'
        ? '$purple300'
        : theme === 'pink'
        ? '$pink300'
        : theme === 'transparent'
        ? 'transparent'
        : '$baseContrast100',
    boxShadow: border ? 0 : '$1',
    border: border
      ? `0.1rem solid ${
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
            : '$border200'
        }`
      : 'none',

    '&:hover': {
      boxShadow: '$2',
    },
  });

  const ImageWrapper = styled('div', {
    height: imageHeight || '15rem',
    width: '100%',
    backgroundColor: '$baseContrast200',
    borderTopLeftRadius: '$2',
    borderTopRightRadius: '$2',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  });

  const ImageChildrenWrapper = styled('div', {
    padding: '$2',
  });

  return (
    <Wrapper css={css} id={id}>
      {image ? (
        <>
          <ImageWrapper>{image}</ImageWrapper>

          <ImageChildrenWrapper>{children}</ImageChildrenWrapper>
        </>
      ) : (
        children
      )}
    </Wrapper>
  );
}
