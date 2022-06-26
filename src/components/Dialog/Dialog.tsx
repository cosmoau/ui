import React, { ReactNode, useRef, useState } from 'react';
import { useEventListener, useLockedBody, useOnClickOutside } from 'usehooks-ts';

import { DefaultProps } from '../../stitches.config';
import { Button } from '../Button';

import { DialogContentStyled, DialogExitStyled, DialogOverlayStyled, DialogStyled, DialogTriggerStyled } from './Dialog.styles';

export interface Props extends DefaultProps {
  children: ReactNode;
  trigger: ReactNode;
  locked?: boolean;
}

export default function Dialog(props: Props): JSX.Element {
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 420);
  }

  useOnClickOutside(ref, () => {
    handleClose();
  });

  useEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  });

  useLockedBody(props.locked ? isOpen : false);

  return (
    <DialogStyled id={props.id}>
      <DialogTriggerStyled
        onClickCapture={(e): void => {
          e.persist();
          setIsOpen(true);
          setIsMounted(true);
        }}>
        {props.trigger}
      </DialogTriggerStyled>
      {isMounted && (
        <DialogOverlayStyled animation={isOpen}>
          <DialogContentStyled animation={isOpen} css={props.css} ref={ref}>
            <DialogExitStyled onClick={(): void => handleClose()}>
              <Button small theme={'minimal'}>
                Close
              </Button>
            </DialogExitStyled>
            {props.children}
          </DialogContentStyled>
        </DialogOverlayStyled>
      )}
    </DialogStyled>
  );
}
