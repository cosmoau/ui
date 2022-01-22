import classNames from 'classnames';
import { CaretDown, CaretUp } from 'phosphor-react';
import React, { useState } from 'react';

import { Column } from '../Column';
import { Section } from '../Section';

interface Options {
  id: number;
  heading: string;
  content: string;
}

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  options: Array<Options>;
  active?: number | boolean;
}

function Accordion({ className, style, options, active = false }: Props): JSX.Element {
  const [activeId, setActiveId] = useState(active);

  return (
    <div
      className={classNames('Accordion', {
        [`${className}`]: className,
      })}
      style={style}>
      {options &&
        options.map((a) => (
          <div className='item' key={a.id + a.heading}>
            <div
              className='heading'
              onClick={() => (activeId === a.id ? setActiveId(0) : setActiveId(a.id))}
              style={{ cursor: 'pointer' }}>
              <Section minimal alignment='center'>
                <Column base={80} phone={80}>
                  <h3>{a.heading}</h3>
                </Column>
                <Column base={20} phone={20} className='right'>
                  {activeId === a.id ? <CaretUp size={20} /> : <CaretDown size={20} />}
                </Column>
              </Section>
            </div>
            <div
              className={classNames('content', {
                _viewing: activeId === a.id,
              })}>
              <div className='children'>
                <h6>{a.content}</h6>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
export default Accordion;
