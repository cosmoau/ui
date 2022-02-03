import type * as Stitches from '@stitches/react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { styled } from '../../stitches.config';

export interface Props extends LinkProps {
  children: ReactElement;
  css?: Stitches.CSS;
  cssActive: Stitches.CSS;
  cssInactive: Stitches.CSS;
  id?: string;
}

export default function Active({ children, css, cssActive, cssInactive, href, id }: Props): JSX.Element {
  const router = useRouter();
  const path = (router && router.pathname) || '/';

  const Wrapper = styled('a', {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      color: 'inherit',
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
    <Link href={href} passHref {...children.props}>
      <Wrapper css={css} id={id} className={path === href ? 'active' : 'inactive'}>
        {children}
      </Wrapper>
    </Link>
  );
}
