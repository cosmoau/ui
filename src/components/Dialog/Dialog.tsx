import type * as Stitches from '@stitches/react';
import { X } from 'phosphor-react';
import React, { useRef, useState } from 'react';

import { breakpoints, styled } from '../../Theme';
import { Card } from '../Card';
import { Outsider } from '../Outsider';

export interface Props {
  css?: Stitches.CSS;
  id?: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export default function Dialog({ css, id, trigger, children }: Props): JSX.Element {
  const ref = useRef(null);

  const [visibility, setVisibility] = useState(false);

  Outsider(ref, () => {
    setVisibility(false);
  });

  const DialogTrigger = styled('div', {
    display: 'inline-flex',
  });

  const DialogWrapper = styled('div', {
    position: 'fixed',
    transition: '$1',
    zIndex: '$zIndexAlert',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '100%',
    scrollBehavior: 'smooth',
    overscrollBehavior: 'contain',
  });

  const DialogCard = styled('div', {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70rem',
    maxWidth: '90vw',
    maxHeight: '80vh',

    [breakpoints.phone]: {
      width: '95%',
      maxWidth: '95%',
      maxHeight: '95vh',
    },
  });

  const DialogExit = styled('div', {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '1rem',
    cursor: 'pointer',
  });

  return (
    <>
      <DialogTrigger
        onClickCapture={(e) => {
          e.persist();
          setVisibility(true);
        }}>
        {trigger}
      </DialogTrigger>
      {visibility && (
        <DialogWrapper id={id}>
          <DialogCard ref={ref} css={css}>
            <DialogExit onClick={() => setVisibility(false)}>
              <X size={18} />
            </DialogExit>
            <Card>{children}</Card>
          </DialogCard>
        </DialogWrapper>
      )}
    </>
  );
}
