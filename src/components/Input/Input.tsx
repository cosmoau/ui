/* eslint-disable @typescript-eslint/no-explicit-any */

import { CSS } from '@stitches/react/types/css-util';
import { Check, Clipboard, Eye, EyeClosed, FloppyDisk, WarningOctagon, X } from 'phosphor-react';
import React, { InputHTMLAttributes, ReactNode, useMemo, useState } from 'react';

import { styled } from '../../stitches.config';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Loading } from '../Loading';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  css?: CSS;
  copy?: boolean;
  error?: boolean;
  icon?: ReactNode;
  loader?: boolean;
  submit?: boolean;
  submitFunction?: any;
  submitOverride?: any;
  tempSet?: boolean;
  inputRef?: any;
  reveal?: boolean;
  reset?: boolean;
  width?: 1 | 2 | 3 | 4 | 5;
}
export default function Input({
  css,
  copy,
  error,
  icon,
  id,
  value,
  type,
  loader,
  submit,
  submitFunction,
  submitOverride,
  tempSet,
  inputRef,
  reveal,
  reset,
  width,
  ...props
}: Props) {
  const [isValue, setIsValue] = useState(value || '');
  const [isCopied, setIsCopied] = useState(false);
  const [isRevealed, setIsRevealed] = useState(type !== 'password');

  const Wrapper = styled('div', {
    display: 'inline-flex',
    position: 'relative',
    height: '3.5rem',
    alignContent: 'center',
    borderRadius: '$2',
    backgroundColor: '$baseContrast100',
    border: '0.1rem solid $border200',
    paddingTop: '$2',
    paddingBottom: '$2',
    paddingLeft: 'calc($5 / 1.5)',
    paddingRight: 'calc($5 / 1.5)',
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

    '*': {
      verticalAlign: 'middle',
    },
  });

  const IconWrapper = styled('div', {
    display: 'inline-flex',
    alignItems: 'center',
    width: 'auto',
    height: '100%',
    marginRight: '$3',
    position: 'relative',
  });

  const InputWrapper = styled('input', {
    appearance: 'none',
    display: 'inline-flex',
    fontSize: '16px !important',
    fontFamily: '$body',
    margin: 0,
    outline: 'none',
    padding: 0,
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    border: 0,
    backgroundColor: 'transparent',
    color: '$base100',

    fontWeight: 'normal',
    textAlign: 'left',
    transition: '$1',
    boxSizing: 'border-box',
    alignItems: 'center',
    verticalAlign: 'middle',
    width: '100%',
    '&:focus': {
      outline: 0,
    },
    variants: {
      width: {
        1: {
          width: '12rem',
        },
        2: {
          width: '18rem',
        },
        3: {
          width: '26rem',
        },
        4: {
          width: '34rem',
        },
        5: {
          width: '100%',
        },
      },
    },
  });

  const FunctionWrapper = styled('div', {
    display: 'inline-flex',
    alignItems: 'center',
    width: 'auto',
    height: '100%',
    position: 'relative',
    verticalAlign: 'middle',
    marginLeft: '$3',
    '*': {
      verticalAlign: 'middle',
    },
    button: {
      marginLeft: '$2',
      ft: '$h6',
      paddingTop: '$1',
      paddingBottom: '$1',
      paddingLeft: '$3',
      paddingRight: '$3',
    },
    svg: {
      height: '1.9rem',
      width: 'auto',
    },
  });

  function handleCopy() {
    if (copy) {
      navigator.clipboard.writeText(isValue as string);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }

  const InputMemo = useMemo(
    () => (
      <InputWrapper
        onChange={(e) => {
          setIsValue(e.target.value);
          if (props.onChange) {
            props.onChange(e);
          }
        }}
        value={isValue}
        type={type === 'password' ? (isRevealed ? 'text' : 'password') : type}
        ref={inputRef || undefined}
        width={width}
        {...props}
      />
    ),
    [InputWrapper, props, isValue, type, isRevealed, inputRef, width]
  );

  return (
    <Wrapper css={css} id={id}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {InputMemo}
      {(loader || error || tempSet || reset || reveal || copy || submit || submitFunction) && (
        <FunctionWrapper>
          {loader && (
            <Badge theme='navy'>
              <Loading />
            </Badge>
          )}
          {error && (
            <Badge theme='red' dot='pulse'>
              <WarningOctagon weight='duotone' />
            </Badge>
          )}
          {tempSet && (
            <Button theme='navy'>
              <FloppyDisk weight='duotone' />
            </Button>
          )}
          {reset && (
            <Button theme='navy' onClick={() => setIsValue('')}>
              <X weight='duotone' />
            </Button>
          )}
          {reveal && (
            <Button theme='navy' onClick={() => setIsRevealed(!isRevealed)}>
              {isRevealed ? <EyeClosed weight='duotone' /> : <Eye weight='duotone' />}
            </Button>
          )}
          {copy && (
            <Button theme='navy' onClick={handleCopy}>
              {isCopied ? <Check weight='duotone' /> : <Clipboard weight='duotone' />}
            </Button>
          )}
          {!submitOverride && submit && (
            <Button
              theme='navy'
              onClick={() => ({
                if(submitFunction) {
                  submitFunction(isValue);
                },
              })}>
              {typeof submit === 'string' ? submit : 'Submit'}
            </Button>
          )}
          {submitOverride || null}
        </FunctionWrapper>
      )}
    </Wrapper>
  );
}
