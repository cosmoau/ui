import type * as Stitches from '@stitches/react';
import React, { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { breakpoints, styled } from '../../stitches.config';
import { Button } from '../Button';
import { Card } from '../Card';
import { Heading } from '../Typography';

export interface Props {
  action: ReactNode;
  cancel: ReactNode;
  css?: Stitches.CSS;
  description: ReactNode | string;
  id?: string;
  title: ReactNode | string;
  trigger: ReactNode | string;
}

export default function Alert({ action, cancel, css, description, id, title, trigger }: Props): JSX.Element {
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
    zIndex: '$alert',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '$base300',
    width: '100%',
    scrollBehavior: 'smooth',
    overscrollBehavior: 'contain',
  });

  const CardWrapper = styled('div', {
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

  const CardActionsWrapper = styled('div', {
    paddingTop: '$6',
    textAlign: 'right',
  });

  const CardPrimaryActionwrapper = styled('div', {
    display: 'inline-block',
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
            <Card>
              <Heading level={3}>{title}</Heading>
              <Heading level={6}>{description}</Heading>
              <CardActionsWrapper>
                <Button
                  onClick={(e) => {
                    e.persist();
                    setIsShown(false);
                  }}
                  css={{
                    mr: '$4',
                  }}>
                  {cancel}
                </Button>
                <CardPrimaryActionwrapper
                  onClickCapture={(e) => {
                    e.persist();
                    setIsShown(false);
                  }}>
                  {action}
                </CardPrimaryActionwrapper>
              </CardActionsWrapper>
            </Card>
          </CardWrapper>
        </OverlayWrapper>
      )}
    </Wrapper>
  );
}
