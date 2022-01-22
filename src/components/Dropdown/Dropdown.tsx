import classNames from 'classnames';
import { Circle } from 'phosphor-react';
import React, { useState, useRef } from 'react';

import { Button } from '../Button';
import { Loading } from '../Loading';
import { Outsider } from '../Outsider';

interface Options {
  value: string;
  name: string;
}

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  options: Array<Options>;
  optionsKey: string;
  optionsHandler: any;
  optionsLabel: string | React.ReactNode;
  optionsWidth?: string;
  optionsAlignment?: string;
}

function Dropdown({
  className,
  style,
  options,
  optionsKey,
  optionsHandler,
  optionsLabel = <Loading />,
  optionsWidth = 'auto',
  optionsAlignment = 'left',
}: Props): JSX.Element {
  const ref = useRef(null);

  const [visibility, setVisibility] = useState('_inactive');

  function handler(): void {
    setVisibility('_inactive');
  }

  function preHandler({ inValue, inName }: { inValue: string; inName: string }): void {
    optionsHandler(inValue, inName);
    setVisibility('_inactive');
  }

  Outsider(ref, handler);

  return (
    <div
      className={classNames('Dropdown', {
        [`${className}`]: className,
      })}
      ref={ref}
      key={`${optionsKey}-A`}
      id={optionsKey}
      style={style}>
      {visibility === '_inactive' ? (
        <div
          onClickCapture={(e) => {
            e.persist();
            setVisibility('_active');
          }}
          key={`${optionsKey}-B`}>
          <Button isLoading={!optionsLabel}>{optionsLabel}</Button>
        </div>
      ) : (
        <div
          onClickCapture={(e) => {
            e.persist();
            setVisibility('_inactive');
          }}
          key={`${optionsKey}-C`}>
          <Button isLoading={!optionsLabel} theme='navy'>
            {optionsLabel}
          </Button>
        </div>
      )}
      <div
        className={classNames('child', {
          [`${optionsAlignment}`]: optionsAlignment,
          [`${visibility}`]: visibility,
        })}
        style={{ minWidth: optionsWidth }}>
        {options.map((option) => (
          <div
            className='option'
            onClick={() => preHandler({ inValue: option.value, inName: option.name })}
            key={option.value}>
            {optionsLabel === option.name ? (
              <div className='_selected'>
                <Circle
                  size={16}
                  color='#3aa8b3'
                  weight='duotone'
                  style={{ marginTop: '-0.3rem', marginRight: '0.2rem' }}
                />
                &nbsp;{option.name}
              </div>
            ) : (
              option.name
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dropdown;
