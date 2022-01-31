import type * as Stitches from '@stitches/react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { styled } from '../../Theme';

export interface Props extends LinkProps {
  css?: Stitches.CSS;
  id?: string;
  activeCSS: Stitches.CSS;
  inactiveCSS: Stitches.CSS;
  children: React.ReactElement;
}

function Active({ css, id, href, activeCSS, inactiveCSS, children }: Props) {
  const router = useRouter();
  const path = (router && router.pathname) || '/';

  const LinkWrapper = styled('a', {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      color: 'inherit',
    },
    '&:focus': {
      color: 'inherit',
    },
    '&.inactive': {
      ...(inactiveCSS || {
        color: '$navy100',
      }),
    },
    '&.active': {
      ...(activeCSS || {
        color: 'inherit',
      }),
    },
  });

  return (
    <Link href={href} passHref {...children.props}>
      <LinkWrapper css={css} id={id} className={path === href ? 'active' : 'inactive'}>
        {children}
      </LinkWrapper>
    </Link>
  );
}

export default Active;
