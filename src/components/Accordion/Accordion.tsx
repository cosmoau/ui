import type * as Stitches from '@stitches/react';
import { keyframes } from '@stitches/react';
import { ArrowDown, ArrowUp } from 'phosphor-react';
import { useState } from 'react';

import { styled } from '../../stitches.config';
import { Column } from '../Column';
import { Section } from '../Section';
import { Heading } from '../Typography';

interface Options {
  content: string;
  heading: string;
  id: number;
}

export interface Props {
  active?: number | boolean;
  css?: Stitches.CSS;
  id?: string;
  options: Array<Options>;
}

export default function Accordion({ active = false, css, id, options }: Props): JSX.Element {
  const [idIsActive, setIdIsActive] = useState(active);

  const handleClick = (id: number) => {
    if (id === idIsActive) {
      setIdIsActive(false);
    } else {
      setIdIsActive(id);
    }
  };

  const slideDown = keyframes({
    from: { maxHeight: 0, opacity: 0 },
    to: { maxHeight: '50rem', opacity: 1 },
  });

  const slideUp = keyframes({
    from: { maxHeight: '40rem', opacity: 1 },
    to: { maxHeight: 0, opacity: 0 },
  });

  const Wrapper = styled('div', {
    width: '100%',

    '*': {
      userSelect: 'contain',
    },
  });

  const ItemWrapper = styled('div', {
    cursor: 'pointer',
    display: 'block',
    paddingTop: 'calc($2 / 2.5)',

    '&:first-child': {
      paddingTop: 0,
    },
  });

  const ContentWrapper = styled('div', {
    overflow: 'hidden',
    transition: '$1',

    '&.open': {
      animation: `${slideDown} .3s cubic-bezier(0.87, 0, 0.13, 1)`,
      color: 'inherit',
      transition: '$1',
      overflow: 'hidden',
      marginTop: '$1',
      paddingTop: '$1',
      borderTop: '1px solid $navy300',
    },
    '&.closed': {
      color: 'transparent',
      maxHeight: 0,
      transition: '$1',
      overflow: 'hidden',
      animation: `${slideUp} .4s cubic-bezier(0.87, 0, 0.13, 1)`,
    },
  });

  return (
    <Wrapper css={css} id={id}>
      {options.map(({ id, heading, content }) => (
        <ItemWrapper key={id} onClick={() => handleClick(id)}>
          <Section alignment='center'>
            <Column minimal width={80} widthPhone={80}>
              <Heading
                level={3}
                css={{
                  userSelect: 'none',
                }}>
                {heading}
              </Heading>
            </Column>
            <Column minimal width={20} widthPhone={20} align='right'>
              {idIsActive === id ? <ArrowUp size={22} /> : <ArrowDown size={22} />}
            </Column>
          </Section>
          <ContentWrapper className={idIsActive === id ? 'open' : 'closed'}>
            <Section>
              <Column minimal>
                <Heading level={6}>{content}</Heading>
              </Column>
            </Section>
          </ContentWrapper>
        </ItemWrapper>
      ))}
    </Wrapper>
  );
}
