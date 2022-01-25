/* eslint jsx-a11y/anchor-is-valid: "off" */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export interface Props {
  href: string;
  activeClassName: string;
  defaultClassName?: string;
  passHref?: boolean;
  children: React.ReactNode;
}

function ActiveLink({ href, activeClassName, defaultClassName = '_inactive', passHref, children }: Props): JSX.Element {
  const router = useRouter();
  const path = (router && router.pathname) || '/';

  return passHref ? (
    <Link href={href || '#'} passHref>
      <div className={path === href ? activeClassName : defaultClassName}>{children}</div>
    </Link>
  ) : (
    <Link href={href || '#'}>
      <a className={path === href ? activeClassName : defaultClassName}>{children}</a>
    </Link>
  );
}
export default ActiveLink;
