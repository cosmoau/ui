/* eslint-disable no-duplicate-imports */
import { CSS } from '@stitches/react/types/css-util';
import type { $$StyledComponentProps } from '@stitches/react/types/styled-component';
import { Check, Clipboard } from 'phosphor-react';
import type { ChangeEvent, InputHTMLAttributes } from 'react';
import React, { useState } from 'react';

import { styled } from '../../stitches.config';
import { Button } from '../Button';
import { Text } from '../Typography';

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  position: 'relative',
  borderRadius: '$2',
  backgroundColor: '$baseContrast100 !important',
  border: '0.1rem solid $border100',
  padding: 'calc($4 * 0.8)',
  boxShadow: '$1',
  transition: '$1',

  '&:hover': {
    boxShadow: '$2',
    border: '0.1rem solid $border100',
  },
  '&:focus-within': {
    boxShadow: '$2',
    border: '0.1rem solid $border100',
  },
  '&:active': {
    boxShadow: '$2',
    border: '0.1rem solid $border100',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
});

const InputWrapper = styled('textarea', {
  display: 'block',
  backgroundColor: 'transparent',
  color: '$base100',
  appearance: 'none',
  width: '100%',
  border: '0',
  margin: '0 auto',
  fontSize: '16px !important',
  '&:after': {
    clear: 'both',
    content: '""',
  },
});

const FunctionWrapper = styled('div', {
  display: 'block',
  '&:after': {
    clear: 'both',
    content: '""',
  },
});

type Props = InputHTMLAttributes<HTMLTextAreaElement> &
  typeof InputWrapper[$$StyledComponentProps] & {
    copy?: boolean;
    css: CSS;
    maxLength?: number;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
  };

export default function Input({
  copy,
  css,
  disabled,
  maxLength = 250,
  onChange,
  rows = 5,
  // inherited
  value = '',
  ...props
}: Props): JSX.Element {
  const [controlledValue, setControlledValue] = useState(value as string);
  const [isCopied, setIsCopied] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setControlledValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const handleCopy = (): void => {
    navigator.clipboard.writeText(controlledValue);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2_000);
  };

  return (
    <Wrapper css={css}>
      <InputWrapper rows={rows} value={controlledValue} maxLength={maxLength} onChange={handleChange} disabled={disabled} {...props} />
      <FunctionWrapper>
        <Text level={2} inline inlineSpacer={2}>
          {controlledValue.length} / {maxLength}
        </Text>
        {copy && (
          <Button theme='navy' onClick={handleCopy}>
            {isCopied ? <Check /> : <Clipboard />}
          </Button>
        )}
      </FunctionWrapper>
    </Wrapper>
  );
}
