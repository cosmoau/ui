import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CaretDown } from 'phosphor-react';
import React, { useState, useRef } from 'react';

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
  optionsLabel: string | React.ReactNode;
  optionsWidth?: string;
  optionsAlignment?: string;
  optionsTriggerClass?: string;
}

function Submenu({
  className,
  style,
  options,
  optionsKey,
  optionsLabel = <Loading />,
  optionsWidth = 'auto',
  optionsAlignment = 'left',
  optionsTriggerClass = 'inline',
}: Props): JSX.Element {
  const ref = useRef(null);
  const router = useRouter();
  const path = (router && router.pathname) || '/';

  const [visibility, setVisibility] = useState('_inactive');

  function handler(): void {
    setVisibility('_inactive');
  }

  Outsider(ref, handler);

  return (
    <div
      className={classNames('Submenu', {
        [`${className}`]: className,
      })}
      ref={ref}
      key={`${optionsKey}-A`}
      id={`${optionsKey}-A`}
      style={style}>
      {visibility === '_inactive' ? (
        <div
          className={optionsTriggerClass}
          onClickCapture={(e) => {
            e.persist();
            setVisibility('_active');
          }}
          key={`${optionsKey}-B`}>
          <h5 className='inline'>{optionsLabel}</h5>
          &nbsp;
          <CaretDown weight='bold' />
        </div>
      ) : (
        <div
          onClickCapture={(e) => {
            e.persist();
            setVisibility('_inactive');
          }}
          key={`${optionsKey}-C`}>
          <h5 className='inline'>{optionsLabel}</h5>
          &nbsp;
          <CaretDown weight='bold' />
        </div>
      )}
      <div
        className={classNames('child', {
          [`${optionsAlignment}`]: optionsAlignment,
          [`${visibility}`]: visibility,
        })}
        style={{ minWidth: optionsWidth }}>
        {options.map((option) => (
          <h5
            className={classNames('option', {
              _active: path !== '#' && path === option.value,
            })}
            key={option.value}>
            <Link href={option.value || '#'}>
              <a
                onClick={(e) => {
                  e.persist();
                  setVisibility('_inactive');
                }}
                key={`${optionsKey}-${option.value}`}>
                {option.name}
              </a>
            </Link>
          </h5>
        ))}
      </div>
    </div>
  );
}
export default Submenu;
