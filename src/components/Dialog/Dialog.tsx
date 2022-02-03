import type * as Stitches from '@stitches/react';
import { X } from 'phosphor-react';
import React, { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { breakpoints, styled } from '../../stitches.config';
import { Card } from '../Card';

export interface Props {
  children: ReactNode;
  css?: Stitches.CSS;
  id?: string;
  trigger: ReactNode;
}

export default function Dialog({ children, css, id, trigger }: Props): JSX.Element {
  const ref = useRef(null);

  const [isShown, setIsShown] = useState(false);

  useOnClickOutside(ref, () => {
    setIsShown(false);
  });

  useLayoutEffect(() => {
    if (isShown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isShown]);

  const Wrapper = styled('div', {
    position: 'initial',
  });

  const TriggerWrapper = styled('div', {
    display: 'inline-flex',
  });

  const OverlayWrapper = styled('div', {
    position: 'fixed',
    transition: '$1',
    zIndex: '$alert + 1',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '$base300',
    width: '100%',
    scrollBehavior: 'smooth',
    overscrollBehavior: 'contain',
    overflowY: 'scroll',
  });

  const CardWrapper = styled('div', {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70rem',
    maxWidth: '90vw',
    maxHeight: '80vh',
    boxShadow: '$4',

    [breakpoints.phone]: {
      width: '95%',
      maxWidth: '95%',
      maxHeight: '95vh',
    },
  });

  const Exit = styled('div', {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '1rem',
    cursor: 'pointer',
  });

  return (
    <Wrapper id={id}>
      <TriggerWrapper
        onClickCapture={(e) => {
          e.persist();
          setIsShown(true);
        }}>
        {trigger}
      </TriggerWrapper>
      {isShown && (
        <OverlayWrapper>
          <CardWrapper ref={ref} css={css}>
            <Exit onClick={() => setIsShown(false)}>
              <X size={18} />
            </Exit>
            <Card>{children}</Card>
          </CardWrapper>
        </OverlayWrapper>
      )}
    </Wrapper>
  );
}
