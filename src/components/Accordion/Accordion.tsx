import type * as Stitches from '@stitches/react';
import { CaretDown, CaretUp } from 'phosphor-react';
import React, { useState } from 'react';

import { styled } from '../../Theme';
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

  const AccordionWrapper = styled('div', {
    width: '100%',

    '*': {
      userSelect: 'contain',
    },
  });

  const AccordionItem = styled('div', {
    display: 'block',
    cursor: 'pointer',
    paddingTop: '$1',

    '&:first-child': {
      paddingTop: 0,
    },
  });

  const AccordionContent = styled('div', {
    transition: '$1',
    maxHeight: 0,
    overflow: 'hidden',

    ['&.active']: {
      maxHeight: '100%',
      transition: '$1',
      bt: '$navy300',
      mt: '$1',
      ptb: 'calc($1 / 2)',
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
              {activeId === id ? <CaretUp /> : <CaretDown />}
            </Column>
          </Section>
          <AccordionContent className={activeId === id ? 'active' : ''}>
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
