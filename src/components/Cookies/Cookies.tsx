import type * as Stitches from '@stitches/react';
import JSConfetti from 'js-confetti';
import { parseCookies, setCookie } from 'nookies';
import { X } from 'phosphor-react';
import React, { useEffect, useState } from 'react';

import { breakpoints, styled } from '../../stitches.config';
import { Card } from '../Card';
import { Heading } from '../Typography';

export interface Props {
  css?: Stitches.CSS;
  token?: string;
  href?: string;
}

function Cookies({ css, token = 'cooookies', href = 'https://cosmogroup.io/legal/privacy' }: Props): JSX.Element {
  const [show, setShow] = useState(false);
  const jsConfetti = new JSConfetti();

  useEffect(() => {
    const cookies = parseCookies();
    if (cookies[token] === 'true') {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [token]);

  const handleAccept = () => {
    setCookie(null, token, 'true', {
      maxAge: 365 * 24 * 60 * 60,
      path: '/',
    });
    jsConfetti.addConfetti({
      emojis: ['🍪'],
    });
    setShow(false);
  };

  const CookiesWrapper = styled('div', {
    position: 'fixed',
    transition: '$1',
    zIndex: '$zIndexCookies',
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
      {show && (
        <CookiesWrapper
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
            <X
              onClick={handleAccept}
              style={{
                cursor: 'pointer',
              }}
            />
          </Card>
        </CookiesWrapper>
      )}
    </>
  );
}

export default Cookies;
