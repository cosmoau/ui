/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-duplicate-imports */
import { CSS } from '@stitches/react/types/css-util';
import type { $$StyledComponentProps } from '@stitches/react/types/styled-component';
import { Check, Clipboard, Eye, EyeClosed, WarningOctagon, X } from 'phosphor-react';
import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import React, { useState } from 'react';

import { styled } from '../../stitches.config';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Loading } from '../Loading';

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

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
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

type Props = InputHTMLAttributes<HTMLInputElement> &
  typeof InputWrapper[$$StyledComponentProps] & {
    copy?: boolean;
    css?: CSS;
    customSubmit?: boolean;
    error?: boolean;
    icon?: ReactNode;
    id?: string;
    loader?: boolean;
    onChange?: any;
    onSubmit?: any;
    reset?: boolean;
    reveal?: boolean;
    submit?: boolean | string;
    width?: 1 | 2 | 3 | 4 | 5;
  };

export default function Input({
  copy,
  css,
  customSubmit,
  error,
  icon,
  id,
  loader,
  onChange,
  onSubmit,
  reset,
  reveal,
  submit,
  width,
  // inherited
  value = '',
  type = 'text',
  ...props
}: Props): JSX.Element {
  const [controlledValue, setControlledValue] = useState(value as string);
  const [controlledType, setControlledType] = useState(type as string);
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
    navigator.clipboard.writeText(controlledValue as string);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleReset = () => {
    setControlledValue('' as string);
  };

  const handleSubmit = (): void => {
    if (onSubmit) {
      onSubmit(controlledValue as string);
    }
  };
  return (
    <Wrapper css={css} id={id}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <InputWrapper width={width} type={controlledType} value={controlledValue} onChange={handleChange} {...props} />
      {(loader || error || reveal || reset || copy || submit || customSubmit) && (
        <FunctionWrapper>
          {loader && (
            <Badge theme='navy' dot='pulse'>
              <Loading />
            </Badge>
          )}
          {error && (
            <Badge theme='red' dot='pulse'>
              <WarningOctagon weight='duotone' />
            </Badge>
          )}
          {reveal && (
            <Button theme='navy' onClick={handleReveal}>
              {isRevealed ? <EyeClosed weight='duotone' /> : <Eye weight='duotone' />}
            </Button>
          )}
          {reset && controlledValue.length > 1 && (
            <Button theme='navy' onClick={handleReset}>
              <X />
            </Button>
          )}
          {copy && (
            <Button theme='navy' onClick={handleCopy}>
              {isCopied ? <Check weight='duotone' /> : <Clipboard weight='duotone' />}
            </Button>
          )}
          {submit && (
            <Button theme='navy' onClick={handleSubmit}>
              {typeof submit === 'string' ? submit : 'Submit'}
            </Button>
          )}
          {customSubmit || null}
        </FunctionWrapper>
      )}
    </Wrapper>
  );
}
