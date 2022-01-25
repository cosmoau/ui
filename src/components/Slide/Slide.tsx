import classNames from 'classnames';
import { X } from 'phosphor-react';
import React, { useRef, useState } from 'react';

import { Column } from '../Column';
import { Outsider } from '../Outsider';
import { Section } from '../Section';

export interface Props {
  className?: string;
  css?: Stitches.CSS;
  triggerActive: React.ReactNode | string;
  triggerInactive?: React.ReactNode | string;
  triggerKey: string | number;
  triggerDisplay?: string;
  children: React.ReactNode;
}

function Slide({
  className,
  style,
  triggerActive,
  triggerInactive = triggerActive,
  triggerKey,
  triggerDisplay = 'inline',
  children,
}: Props): JSX.Element {
  const ref = useRef(null);

  const [visibility, setVisibility] = useState('_inactive');

  function handler(): void {
    setVisibility('_inactive');
  }

  Outsider(ref, handler);
  return (
    <>
      {visibility === '_inactive' ? (
        <div
          className={triggerDisplay}
          onClickCapture={(e) => {
            e.persist();
            setVisibility('_active');
          }}
          key={`${triggerKey}-B`}
          style={{ cursor: 'pointer' }}>
          {triggerActive}
        </div>
      ) : (
        <div
          className={triggerDisplay}
          onClickCapture={(e) => {
            e.persist();
            setVisibility('_inactive');
          }}
          key={`${triggerKey}-C`}
          style={{ cursor: 'pointer' }}>
          {triggerInactive || triggerActive}
        </div>
      )}
      <div
        className={classNames('Slide', {
          [`${className}`]: className,
          [`${visibility}`]: visibility,
        })}
        ref={ref}
        key={triggerKey}
        css={css}>
        {visibility === '_active' ? (
          <>
            <div className='exit' onClick={() => setVisibility('_inactive')} key={`${triggerKey}-D`}>
              <X size={22} />
            </div>
            <Section className='padding-top-3 padding-bottom-3'>
              <Column>{children}</Column>
            </Section>
          </>
        ) : null}
      </div>
    </>
  );
}
export default Slide;
