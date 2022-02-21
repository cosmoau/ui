import { CSS } from '@stitches/react/types/css-util';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

import { styled } from '../../stitches.config';

export interface Props extends LinkProps {
  children: ReactNode;
  css?: CSS;
  cssActive?: CSS;
  cssInactive?: CSS;
  hover?: boolean;
  id?: string;
}

export default function Active({ children, css, cssActive, cssInactive, hover, href, id, ...props }: Props): JSX.Element {
  const router = useRouter();
  const path = router?.pathname || '/';

  const Wrapper = styled('a', {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      color: 'inherit',
      opacity: hover ? 0.7 : 1,
    },
    '&:focus': {
      color: 'inherit',
    },
    '&.inactive': {
      ...(cssInactive || {
        color: '$navy100',
      }),
    },
    '&.active': {
      ...(cssActive || {
        color: 'inherit',
      }),
    },
  });

  return (
    <Link href={href} passHref {...props}>
      <Wrapper className={path === href ? 'active' : 'inactive'} css={css} id={id}>
        {children}
      </Wrapper>
    </Link>
  );
}
