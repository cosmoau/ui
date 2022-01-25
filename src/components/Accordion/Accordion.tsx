import type * as Stitches from '@stitches/react';
import classNames from 'classnames';
import { CaretDown, CaretUp } from 'phosphor-react';
import React, { useState } from 'react';

import { styled } from '../../stitches.config';
import { Column } from '../Column';
import { Section } from '../Section';

interface Options {
  id: number;
  heading: string;
  content: string;
}

export interface Props {
  className?: string;
  css?: Stitches.CSS;
  options: Array<Options>;
  active?: number | boolean;
}

function Accordion({ className, css, options, active = false }: Props): JSX.Element {
  const [activeId, setActiveId] = useState(active);

  const AccordionWrapper = styled('div', {
    width: '100%',

    '*': {
      userSelect: 'contain',
    },
  });

  const AccordionItem = styled('div', {
    paddingTop: '$2',
    paddingBottom: '$2',
    transition: 'all 0.2s ease-in-out',
    borderBottom: '0.1rem solid $navy200',
    '&:first-of-type': {
      paddingTop: 0,
    },
    '&:last-of-type': {
      borderBottom: 0,
      paddingBottom: 0,
    },
  });

  const AccordionContent = styled('div', {
    overflow: 'hidden',
    maxHeight: 0,
    transition: 'max-height 0.2s ease-in-out',

    '&.active': {
      maxHeight: '$5',
    },
  });

  return (
    <AccordionWrapper
      className={classNames('Accordion', {
        [`${className}`]: className,
      })}
      css={css}>
      {options.map((option) => (
        <AccordionItem
          key={option.id}
          onClick={() => {
            if (activeId === option.id) {
              setActiveId(false);
            } else {
              setActiveId(option.id);
            }
          }}>
          <Section alignment='center'>
            <Column minimal baseWidth={80} phoneWidth={80}>
              <h3>{option.heading}</h3>
            </Column>
            <Column
              minimal
              baseWidth={20}
              phoneWidth={20}
              css={{
                textAlign: 'right',
              }}>
              {activeId === option.id ? <CaretUp size={20} /> : <CaretDown size={20} />}
            </Column>
          </Section>
          <AccordionContent className={activeId === option.id ? 'active' : ''}>
            <Section>
              <Column minimal>
                <h6>{option.content}</h6>
              </Column>
            </Section>
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionWrapper>
  );
}

export default Accordion;
