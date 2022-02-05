import { CSS } from '@stitches/react/types/css-util';
import React, { useLayoutEffect, useRef, useState, ReactNode } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { Button } from '../Button';
import { Card } from '../Card';
import { Heading } from '../Typography';

import stitchesShared from './Dialog.stitches';

export interface Props {
  action: ReactNode;
  cancel: ReactNode;
  css?: CSS;
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
    document.body.style.overflow = isShown ? 'hidden' : 'auto';
  }, [isShown]);

  const { Wrapper, TriggerWrapper, OverlayWrapper, CardWrapper, CardActionsWrapper, CardPrimaryActionwrapper } = stitchesShared();

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
