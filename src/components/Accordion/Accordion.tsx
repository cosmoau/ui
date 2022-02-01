import type * as Stitches from '@stitches/react';
import { keyframes } from '@stitches/react';
import { ArrowDown, ArrowUp } from 'phosphor-react';
import React, { useState } from 'react';

import { styled } from '../../stitches.config';
import { Column } from '../Column';
import { Section } from '../Section';
import { Heading } from '../Typography';

interface Options {
  id: number;
  heading: string;
  content: string;
}

export interface Props {
  className?: string;
  id?: string;
  css?: Stitches.CSS;
  options: Array<Options>;
  active?: number | boolean;
}

function Accordion({ css, id, options, active = false }: Props): JSX.Element {
  const [activeId, setActiveId] = useState(active);

  const handleClick = (id: number) => {
    if (id === activeId) {
      setActiveId(false);
    } else {
      setActiveId(id);
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

  const AccordionWrapper = styled('div', {
    width: '100%',

    '*': {
      userSelect: 'contain',
    },
  });

  const AccordionItem = styled('div', {
    display: 'block',
    cursor: 'pointer',
    paddingTop: 'calc($2 / 2.5)',

    '&:first-child': {
      paddingTop: 0,
    },
  });

  const AccordionContent = styled('div', {
    transition: '$1',
    overflow: 'hidden',

    '&.open': {
      animation: `${slideDown} .5s cubic-bezier(0.87, 0, 0.13, 1)`,
      transition: '$1',
      color: 'inherit',
      overflow: 'hidden',
      marginTop: 'calc($2 / 1)',
      paddingTop: '$1',
      borderTop: '1px solid $border200',
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
    <AccordionWrapper css={css} id={id}>
      {options.map(({ id, heading, content }) => (
        <AccordionItem key={id} onClick={() => handleClick(id)}>
          <Section alignment='center'>
            <Column minimal baseWidth={80} phoneWidth={80}>
              <Heading
                level={3}
                css={{
                  userSelect: 'none',
                }}>
                {heading}
              </Heading>
            </Column>
            <Column minimal baseWidth={20} phoneWidth={20} align='right'>
              {activeId === id ? <ArrowUp size={22} /> : <ArrowDown size={22} />}
            </Column>
          </Section>
          <AccordionContent className={activeId === id ? 'open' : 'closed'}>
            <Section>
              <Column minimal>
                <Heading level={6}>{content}</Heading>
              </Column>
            </Section>
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionWrapper>
  );
}

export default Accordion;
