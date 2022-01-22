import classNames from 'classnames';
import React, { useRef, useState } from 'react';

import { Button } from '../Button';
import { Card } from '../Card';
import { Column } from '../Column';
import { Outsider } from '../Outsider';
import { Section } from '../Section';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  trigger: React.ReactNode | string;
  title: React.ReactNode | string;
  description: React.ReactNode | string;
  cancel: React.ReactNode;
  action: React.ReactNode;
}

function Alert({ className, style, trigger, title, description, cancel, action }: Props): JSX.Element {
  const ref = useRef(null);

  const [visibility, setVisibility] = useState('_inactive');

  function handler(): void {
    if (visibility === '_inactive') {
      setVisibility('_active');
    } else {
      setVisibility('_inactive');
    }
  }

  Outsider(ref, handler);
  return (
    <>
      <div
        onClickCapture={(e) => {
          e.persist();
          handler();
        }}>
        {trigger}
      </div>
      <div
        className={classNames('Alert', {
          [`${className}`]: className,
          [`${visibility}`]: visibility,
        })}
        style={style}>
        {visibility === '_active' ? (
          <div ref={ref}>
            <style jsx>{`
              body {
                overflow: hidden;
                height: 100vh;
              }
            `}</style>
            <Card className='content'>
              <div className='bottom-2'>
                <Section minimal>
                  <Column>
                    <h3>{title}</h3>
                    <h6>{description}</h6>
                  </Column>
                </Section>
              </div>
              <Section minimal className='right'>
                <Column>
                  <Button theme='navy' className='inline-spacer' onClick={handler}>
                    {cancel}
                  </Button>
                  <div className='inline' onClick={handler}>
                    {action}
                  </div>
                </Column>
              </Section>
            </Card>
          </div>
        ) : null}
      </div>
    </>
  );
}
export default Alert;
