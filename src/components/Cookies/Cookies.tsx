import type * as Stitches from '@stitches/react';
import { parseCookies, setCookie } from 'nookies';
import { X } from 'phosphor-react';
import React, { useEffect, useState } from 'react';

import { breakpoints, styled } from '../../stitches.config';
import { Card } from '../Card';
import { Heading } from '../Typography';

export interface Props {
  css?: Stitches.CSS;
  href?: string;
  token?: string;
}

export default function Cookies({
  css,
  href = 'https://cosmogroup.io/legal/privacy',
  token = 'cooookies',
}: Props): JSX.Element {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const cookies = parseCookies();
    if (cookies[token] === 'true') {
      setIsShown(false);
    } else {
      setIsShown(true);
    }
  }, [token]);

  const handleAccept = () => {
    setCookie(null, token, 'true', {
      maxAge: 365 * 24 * 60 * 60,
      path: '/',
    });

    setIsShown(false);
  };

  const Wrapper = styled('div', {
    position: 'fixed',
    transition: '$1',
    zIndex: '$cookies',
    bottom: '$2',
    left: 0,
    right: 0,
    maxWidth: '100%',
    margin: 'auto',
    textAlign: 'center',

    [breakpoints.phone]: {
      maxWidth: '95%',
    },
  });

  return (
    <>
      {isShown && (
        <Wrapper
          css={{
            ...css,
          }}>
          <Card
            border
            css={{
              ptb: 'calc($2 / 2)',
              textAlign: 'center',
              display: 'inline-flex',
              boxShadow: '$4',

              '*': {
                color: '$base100',
              },
            }}>
            <Heading level={5} inline inlineSpacer={1}>
              🍪
            </Heading>
            <Heading level={5} inline inlineSpacer={1}>
              We use anonymous cookies.{' '}
              <a href={href || '#'}>
                <b>Learn more</b>
              </a>
            </Heading>
            <Heading level={5} inline>
              <X onClick={handleAccept} />
            </Heading>
          </Card>
        </Wrapper>
      )}
    </>
  );
}
