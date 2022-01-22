import classNames from 'classnames';
import { parseCookies, setCookie } from 'nookies';
import React, { useState } from 'react';

import { Button } from '../Button';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  link: string;
}

function Cookies({ className, style, link = '#' }: Props): JSX.Element {
  const cookies = parseCookies();
  const [visibility, setVisibility] = useState(cookies.stickyicky);

  function handleCookiesVal() {
    setVisibility('approved');
    setCookie(null, 'stickyicky', 'approved', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
  }

  if (visibility === 'approved') return <></>;
  return (
    <div
      className={classNames('Cookies', {
        [`${className}`]: className,
      })}
      id='Cookies'
      style={style}>
      <h5 className='inline-spacer'>
        🍪&nbsp;We use cookies inline with our{' '}
        <a className='border-bottom' href={link} target='_blank' rel='noreferrer'>
          privacy policy
        </a>
      </h5>
      <Button onClick={handleCookiesVal}>Hide</Button>
    </div>
  );
}
export default Cookies;
