import { CSS } from '@stitches/react/types/css-util';
import React, { useLayoutEffect, useRef, useState, ReactNode } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { Button } from '../Button';
import { Card } from '../Card';
import { Heading } from '../Typography';

import DialogStyles from './Dialog.styles';

export interface Props {
  action: ReactNode;
  cancel: ReactNode;
  css?: CSS;
  description: ReactNode | string;
  id?: string;
  title: ReactNode | string;
  trigger: ReactNode | string;
}

const { Wrapper, TriggerWrapper, OverlayWrapper, CardWrapper, CardActionsWrapper, CardPrimaryActionwrapper } = DialogStyles();

export default function Alert({ action, cancel, css, description, id, title, trigger }: Props): JSX.Element {
  const ref = useRef(null);

  const [isShown, setIsShown] = useState(false as boolean);

  useOnClickOutside(ref, () => {
    setIsShown(false);
  });

  useLayoutEffect(() => {
    document.body.style.overflow = isShown ? 'hidden' : 'auto';
  }, [isShown]);

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
        <OverlayWrapper animation={isShown}>
          <CardWrapper animation={isShown} css={css} ref={ref}>
            <Card>
              <Heading level={3}>{title}</Heading>
              <Heading level={6}>{description}</Heading>
              <CardActionsWrapper>
                <Button
                  css={{
                    mr: '$4',
                  }}
                  onClick={(e) => {
                    e.persist();
                    setIsShown(false);
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
