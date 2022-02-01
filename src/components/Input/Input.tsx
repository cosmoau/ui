/* eslint-disable no-duplicate-imports */
import type * as Stitches from '@stitches/react';
import type { $$StyledComponentProps } from '@stitches/react/types/styled-component';
import { Check, Clipboard, Eye, EyeClosed, WarningOctagon, X } from 'phosphor-react';
import type { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import React, { useState } from 'react';

import { styled } from '../../stitches.config';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Loading } from '../Loading';

const InputContainerWrapper = styled('div', {
  width: 'auto',
  display: 'inline-flex',
  alignItems: 'center',
  height: '100%',
  position: 'relative',
  borderRadius: '$2',
  backgroundColor: '$baseContrast100',
  border: '0.1rem solid $navy200',
  paddingTop: 'calc($2 * 0.6)',
  paddingBottom: 'calc($2 * 0.6)',
  paddingLeft: '$2',
  paddingRight: '$2',
  boxShadow: '$1',
  userSelect: 'noe',
  transition: '$1',
  '&:hover': {
    boxShadow: '$2',
    border: '0.1rem solid $navy200',
  },
  '&:focus-within': {
    boxShadow: '$2',
    border: '0.1rem solid $navy200',
  },
  '&:active': {
    boxShadow: '$2',
    border: '0.1rem solid $navy200',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
});

const InputIconWrapper = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  width: 'auto',
  marginRight: '$2',
  height: '100%',
  position: 'relative',
  verticalAlign: 'middle',
});

const InputWrapper = styled('input', {
  appearance: 'none',
  display: 'inline-flex',
  fontSize: '16px',
  fontFamily: '$untitled',
  margin: 0,
  outline: 'none',
  padding: 0,
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  height: '100%',
  border: 0,
  backgroundColor: 'transparent',
  color: '$base100',
  lineHeight: '1.5',
  fontWeight: '$1',
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

const InputFunctionWrapper = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  width: 'auto',
  height: '100%',
  position: 'relative',
  verticalAlign: 'middle',

  '*': {
    verticalAlign: 'middle',
    lineHeight: '1',
  },
  button: {
    marginLeft: '$1',
  },
});

type Props = InputHTMLAttributes<HTMLInputElement> &
  typeof InputWrapper[$$StyledComponentProps] & {
    css: Stitches.CSS;
    size?: 'numeric' | 'small' | 'medium' | 'large' | 'full';
    icon?: React.ReactNode;
    copy?: boolean;
    reset?: boolean;
    reveal?: boolean;
    loader?: boolean;
    error?: boolean;
    submit?: boolean | string;
    customSubmit?: boolean;
    onChange?: any;
    onSubmit?: any;
  };

const Input: FC<Props> = ({
  css,
  value = '',
  type = 'text',
  size = 'medium',
  icon,
  copy = false,
  reset = false,
  reveal = false,
  loader = false,
  error = false,
  submit = false,
  customSubmit = false,
  onChange,
  onSubmit,
  ...props
}) => {
  const [controlledValue, setControlledValue] = useState(value as any);
  const [controlledType, setControlledType] = useState(type as any);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setControlledValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const handleReveal = () => {
    if (controlledType === 'password') {
      setIsRevealed(true);
      setControlledType('text');
    } else {
      setIsRevealed(false);
      setControlledType('password');
    }
  };

  const handleCopy = (): void => {
    navigator.clipboard.writeText(controlledValue);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleReset = () => {
    setControlledValue('');
  };

  const handleSubmit = (): void => {
    if (onSubmit) {
      onSubmit(controlledValue);
    }
  };
  return (
    <>
      <InputContainerWrapper css={css}>
        {icon && <InputIconWrapper>{icon}</InputIconWrapper>}
        <InputWrapper
          width={
            size === 'numeric' ? '1' : size === 'small' ? '2' : size === 'medium' ? '3' : size === 'large' ? '4' : '5'
          }
          type={controlledType}
          value={controlledValue}
          onChange={handleChange}
          {...props}
        />
        <InputFunctionWrapper>
          {loader && (
            <Badge theme='navy' dot='pulse'>
              <Loading />
            </Badge>
          )}
          {error && (
            <Badge theme='red' dot='pulse'>
              <WarningOctagon />
            </Badge>
          )}
          {reveal && (
            <Button theme='navy' onClick={handleReveal}>
              {isRevealed ? <EyeClosed /> : <Eye />}
            </Button>
          )}
          {reset && controlledValue.length > 1 && (
            <Button theme='navy' onClick={handleReset}>
              <X />
            </Button>
          )}
          {copy && (
            <Button theme='navy' onClick={handleCopy}>
              {isCopied ? <Check /> : <Clipboard />}
            </Button>
          )}
          {submit && (
            <Button theme='navy' onClick={handleSubmit}>
              {typeof submit === 'string' ? submit : 'Submit'}
            </Button>
          )}
          {customSubmit && customSubmit}
        </InputFunctionWrapper>
      </InputContainerWrapper>
    </>
  );
};

export default Input;
