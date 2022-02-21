import { CSS } from '@stitches/react/types/css-util';
import { X } from 'phosphor-react';
import React, { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { Card } from '../Card';

import DialogStyles from './Dialog.styles';

export interface Props {
  children: ReactNode;
  css?: CSS;
  id?: string;
  trigger: ReactNode;
}

const { Wrapper, TriggerWrapper, OverlayWrapper, CardWrapper, Exit } = DialogStyles();

export default function Dialog({ children, css, id, trigger }: Props): JSX.Element {
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
        <OverlayWrapper>
          <CardWrapper css={css} ref={ref}>
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
