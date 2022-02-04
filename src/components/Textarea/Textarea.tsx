/* eslint-disable no-duplicate-imports */
import type * as Stitches from '@stitches/react';
import type { $$StyledComponentProps } from '@stitches/react/types/styled-component';
import { Check, Clipboard } from 'phosphor-react';
import type { ChangeEvent, InputHTMLAttributes } from 'react';
import React, { useState } from 'react';

import { styled } from '../../stitches.config';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Element } from '../Element';

import { Heading, Text } from '../Typography';

const Wrapper = styled('div', {
  display: 'block',
  width: '100%',
  position: 'relative',
  borderRadius: '$2',
  backgroundColor: '$baseContrast100 !important',
  border: '0.1rem solid $border100',
  paddingTop: '$4',
  paddingBottom: '$4',
  paddingLeft: '$4',
  paddingRight: '$4',
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

  '&:after': {
    clear: 'both',
    content: '""',
  },
});

const InputWrapper = styled('textarea', {
  display: 'block',
  backgroundColor: 'transparent',
  color: '$base100',
  appearance: 'none',
  width: '100%',
  border: '0',
  margin: '0',
  fontSize: '1.6rem !important',
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
    css: Stitches.CSS;
    maxLength?: number;
    onChange?: any;
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
  const [controlledValue, setControlledValue] = useState(value as any);
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
    }, 2000);
  };

  return (
    <Wrapper css={css}>
      <InputWrapper
        rows={rows}
        value={controlledValue}
        maxLength={maxLength}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      />
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
