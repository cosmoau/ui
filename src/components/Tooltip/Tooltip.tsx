import classNames from 'classnames';
import React, { useRef, useState } from 'react';

import { Outsider } from '../Outsider';

export interface Props {
  className?: string;
  css?: Stitches.CSS;
  triggerActive: React.ReactNode | string;
  triggerInactive?: React.ReactNode | string;
  triggerKey: string | number;
  triggerDisplay?: string;
  triggerAlignment?: string;
  children: React.ReactNode;
}

function Tooltip({
  className,
  style,
  triggerActive,
  triggerInactive = triggerActive,
  triggerKey,
  triggerDisplay = 'inline',
  triggerAlignment = 'left',
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
          className={classNames('Tooltip-trigger', {
            [triggerDisplay]: triggerDisplay,
          })}
          onClickCapture={(e) => {
            e.persist();
            setVisibility('_active');
          }}
          key={`${triggerKey}-B`}>
          {triggerActive}
        </div>
      ) : (
        <div
          className={classNames('Tooltip-trigger', {
            [triggerDisplay]: triggerDisplay,
          })}
          onClickCapture={(e) => {
            e.persist();
            setVisibility('_inactive');
          }}
          key={`${triggerKey}-C`}>
          {triggerInactive || triggerActive}
        </div>
      )}
      <div
        className={classNames('Tooltip', {
          [`${className}`]: className,
          [`${visibility}`]: visibility,
          [`${triggerAlignment}`]: visibility,
        })}
        ref={ref}
        key={triggerKey}
        css={css}>
        {visibility === '_active' ? (
          <div
            className='children'
            onClickCapture={(e) => {
              e.persist();
              setVisibility('_inactive');
            }}>
            {children}
          </div>
        ) : null}
      </div>
    </>
  );
}
export default Tooltip;
