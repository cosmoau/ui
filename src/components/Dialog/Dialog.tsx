import { X } from 'phosphor-react';
import { ReactNode, useRef, useState } from 'react';
import { useEventListener, useLockedBody, useOnClickOutside } from 'usehooks-ts';

import { Button } from '../../index';
import { DefaultProps } from '../../stitches.config';

import {
  DialogContentStyled,
  DialogExitStyled,
  DialogOverlayStyled,
  DialogStyled,
  DialogTriggerStyled,
} from './Dialog.styles';

interface Props extends DefaultProps {
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
    }, 250);
  }

  function handleOpen(): void {
    setIsOpen(true);
    setTimeout(() => {
      setIsMounted(true);
    }, 25);
  }

  function handleClick(): void {
    if (isOpen || isMounted) {
      setIsOpen(false);
      setIsMounted(false);
    } else {
      handleOpen();
    }
  }

  useOnClickOutside(ref, () => handleClose());

  useEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  });

  useLockedBody(props.locked ? isOpen : false);

  return (
    <DialogStyled id={props.id}>
      <DialogTriggerStyled onClickCapture={handleClick}>
        {props.trigger}
      </DialogTriggerStyled>
      {isMounted && (
        <DialogOverlayStyled animation={isOpen}>
          <DialogContentStyled animation={isOpen} css={props.css} ref={ref}>
            <DialogExitStyled onClick={(): void => handleClose()}>
              <Button
                ariaLabel='Close'
                icon={<X />}
                name='close'
                small
                theme={'minimal'}>
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
