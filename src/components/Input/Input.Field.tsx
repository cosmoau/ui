/* eslint-disable @typescript-eslint/no-explicit-any */

import { CSS } from '@stitches/react/types/css-util';
import { Check, Clipboard, Eye, EyeClosed, WarningOctagon, X } from 'phosphor-react';
import React, { InputHTMLAttributes, ReactNode, useState } from 'react';

import { Badge } from '../Badge';
import { Button } from '../Button';
import { Loading } from '../Loading';

import InputStyles from './Input.styles';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  changeFunction?: any;
  copy?: boolean;
  css?: CSS;
  error?: boolean;
  icon?: ReactNode;
  inputRef?: any;
  loader?: boolean;
  reset?: boolean;
  resetFunction?: any;
  reveal?: boolean;
  submit?: boolean;
  submitFunction?: any;
  submitOverride?: any;
  width?: 1 | 2 | 3 | 4 | 5;
}

const { FieldWrapper, FieldIconWrapper, FieldInputWrapper, FieldFunctionWrapper } = InputStyles();

export default function InputField({
  changeFunction,
  copy,
  css,
  error,
  icon,
  inputRef,
  loader,
  reset,
  resetFunction,
  reveal,
  submit,
  submitFunction,
  submitOverride,
  width = 2,

  id,
  type,
  value,

  ...props
}: Props) {
  const [isValue, setIsValue] = useState(value || '') as [string, any];
  const [isCopied, setIsCopied] = useState(false as boolean) as [boolean, any];
  const [isRevealed, setIsRevealed] = useState(type !== 'password') as [boolean, any];

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
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

  function handleReset() {
    setIsValue('');
    if (resetFunction) {
      resetFunction();
    }
  }

  return (
    <FieldWrapper css={css} id={id}>
      {icon && <FieldIconWrapper>{icon}</FieldIconWrapper>}
      <FieldInputWrapper
        onChange={(e) => handleChange(e)}
        ref={inputRef || undefined}
        type={type === 'password' ? (isRevealed ? 'text' : 'password') : type}
        value={isValue}
        width={width}
        {...props}
      />
      {(loader || error || reset || reveal || copy || submit || submitFunction) && (
        <FieldFunctionWrapper>
          {loader && (
            <Badge theme='navy'>
              <Loading />
            </Badge>
          )}
          {error && (
            <Badge dot='pulse' theme='red'>
              <WarningOctagon weight='duotone' />
            </Badge>
          )}
          {reset && (
            <Button onClick={() => handleReset()} theme='navy'>
              <X weight='duotone' />
            </Button>
          )}
          {reveal && (
            <Button onClick={() => setIsRevealed(!isRevealed)} theme='navy'>
              {isRevealed ? <EyeClosed weight='duotone' /> : <Eye weight='duotone' />}
            </Button>
          )}
          {copy && (
            <Button onClick={handleCopy} theme='navy'>
              {isCopied ? <Check weight='duotone' /> : <Clipboard weight='duotone' />}
            </Button>
          )}
          {!submitOverride && submit && (
            <Button
              onClick={() => ({
                if(submitFunction) {
                  submitFunction(isValue);
                },
              })}
              theme='navy'>
              {typeof submit === 'string' ? submit : 'Submit'}
            </Button>
          )}
          {submitOverride || null}
        </FieldFunctionWrapper>
      )}
    </FieldWrapper>
  );
}
