import { CSS } from '@stitches/react/types/css-util';
import { parseCookies, setCookie } from 'nookies';
import { X } from 'phosphor-react';
import React, { useEffect, useState } from 'react';

import { Card } from '../Card';
import { Heading } from '../Typography';

import CookiesStyles from './Cookies.styles';

export interface Props {
  css?: CSS;
  href?: string;
  token?: string;
}

const { Wrapper } = CookiesStyles();

export default function Cookies({ css, href = 'https://cosmogroup.io/legal/privacy', token = 'cooookies' }: Props): JSX.Element {
  const [isShown, setIsShown] = useState(false as boolean);

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

  return (
    isShown && (
      <Wrapper css={css}>
        <Card
          border
          css={{
            ptb: '$3',
            textAlign: 'center',
            display: 'inline-flex',
            boxShadow: '$3',

            '*': {
              color: '$base100',
            },
          }}>
          <Heading inline inlineSpacer={1} level={5}>
            🍪
          </Heading>
          <Heading inline inlineSpacer={1} level={5}>
            We use cookies.{' '}
            <a href={href}>
              <b>Learn more</b>
            </a>
          </Heading>
          <Heading inline level={5}>
            <X onClick={handleAccept} />
          </Heading>
        </Card>
      </Wrapper>
    )
  );
}
