/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-duplicate-imports */
import { CSS } from '@stitches/react/types/css-util';
import { Check, Clipboard } from 'phosphor-react';
import type { ChangeEvent, InputHTMLAttributes } from 'react';
import React, { useState } from 'react';

import { Button } from '../Button';
import { Text } from '../Typography';

import InputStyles from './Input.styles';

export interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  changeFunction?: any;
  copy?: boolean;
  css: CSS;
  maxLength?: number;
  rows?: number;
}

const { TextareaWrapper, TextareaInputWrapper, TextareaFunctionWrapper } = InputStyles();

export default function Input({
  changeFunction,
  copy,
  css,
  maxLength = 250,
  rows = 4,

  disabled,
  value,

  ...props
}: Props): JSX.Element {
  const [isValue, setIsValue] = useState(value || '') as [string, any];
  const [isCopied, setIsCopied] = useState(false) as [boolean, any];

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setIsValue(e.target.value);
    if (changeFunction) {
      changeFunction(e.target.value);
    }
  }

  function handleCopy() {
    if (copy) {
      navigator.clipboard.writeText(isValue as string);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }

  return (
    <TextareaWrapper css={css}>
      <TextareaInputWrapper disabled={disabled} maxLength={maxLength} onChange={handleChange} rows={rows} value={isValue} {...props} />
      <TextareaFunctionWrapper>
        <Text inline inlineSpacer={4} level={2}>
          {isValue.length} / {maxLength}
        </Text>
        {copy && (
          <Button onClick={handleCopy} theme='navy'>
            {isCopied ? <Check /> : <Clipboard />}
          </Button>
        )}
      </TextareaFunctionWrapper>
    </TextareaWrapper>
  );
}
