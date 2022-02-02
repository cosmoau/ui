import type * as Stitches from '@stitches/react';
import React, { useLayoutEffect, useRef, useState } from 'react';

import { breakpoints, styled } from '../../stitches.config';
import { Button } from '../Button';
import { Card } from '../Card';
import { Outsider } from '../Outsider';
import { Heading } from '../Typography';

export interface Props {
  css?: Stitches.CSS;
  id?: string;
  trigger: React.ReactNode | string;
  title: React.ReactNode | string;
  description: React.ReactNode | string;
  cancel: React.ReactNode;
  action: React.ReactNode;
}

function Alert({ css, id, trigger, title, description, cancel, action }: Props): JSX.Element {
  const ref = useRef(null);

  const [visibility, setVisibility] = useState(false);

  Outsider(ref, () => {
    setVisibility(false);
  });

  useLayoutEffect(() => {
    if (visibility) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [visibility]);

  const AlertTrigger = styled('div', {
    display: 'inline-flex',
  });

  const AlertWrapper = styled('div', {
    position: 'fixed',
    transition: '$1',
    zIndex: '$zIndexAlert',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '$base300',
    width: '100%',
    scrollBehavior: 'smooth',
    overscrollBehavior: 'contain',
  });

  const AlertCard = styled('div', {
    position: 'absolute',
    transition: '$1',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '55rem',
    maxWidth: '90vw',
    maxHeight: '70vh',
    boxShadow: '$4',

    [breakpoints.phone]: {
      width: '95%',
      maxWidth: '95%',
    },
  });

  const AlertCardTriggers = styled('div', {
    paddingTop: '$3',
    textAlign: 'right',
  });

  const AlertCardActionTrigger = styled('div', {
    display: 'inline-block',
  });

  return (
    <>
      <AlertTrigger
        onClickCapture={(e) => {
          e.persist();
          setVisibility(true);
        }}>
        {trigger}
      </AlertTrigger>
      {visibility && (
        <AlertWrapper id={id}>
          <AlertCard ref={ref} css={css}>
            <Card>
              <Heading level={3}>{title}</Heading>
              <Heading level={6}>{description}</Heading>
              <AlertCardTriggers>
                <Button
                  onClick={(e) => {
                    e.persist();
                    setVisibility(false);
                  }}
                  css={{
                    mr: '$2',
                  }}>
                  {cancel}
                </Button>
                <AlertCardActionTrigger
                  onClickCapture={(e) => {
                    e.persist();
                    setVisibility(false);
                  }}>
                  {action}
                </AlertCardActionTrigger>
              </AlertCardTriggers>
            </Card>
          </AlertCard>
        </AlertWrapper>
      )}
    </>
  );
}
export default Alert;
