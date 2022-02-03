/* eslint-disable no-duplicate-imports */
import type * as Stitches from '@stitches/react';
import type { $$StyledComponentProps } from '@stitches/react/types/styled-component';
import { Check, Clipboard, Eye, EyeClosed, WarningOctagon, X } from 'phosphor-react';
import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import { useState } from 'react';

import { styled } from '../../stitches.config';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Loading } from '../Loading';

const Wrapper = styled('div', {
  width: 'auto',
  display: 'inline-flex',
  alignItems: 'center',
  height: '100%',
  position: 'relative',
  borderRadius: '$2',
  backgroundColor: '$baseContrast100',
  border: '0.1rem solid $border100',
  paddingTop: 'calc($2 * 0.6)',
  paddingBottom: 'calc($2 * 0.6)',
  paddingLeft: '$2',
  paddingRight: '$2',
  boxShadow: '$1',
  userSelect: 'noe',
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

const IconWrapper = styled('div', {
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
  fontFamily: '$body',
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

const FunctionWrapper = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  width: 'auto',
  height: '100%',
  position: 'relative',
  verticalAlign: 'middle',
  marginLeft: '$2',
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
    copy?: boolean;
    css: Stitches.CSS;
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
      <Wrapper css={css} id={id}>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <InputWrapper width={width} type={controlledType} value={controlledValue} onChange={handleChange} {...props} />
        <FunctionWrapper>
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
        </FunctionWrapper>
      </Wrapper>
    </>
  );
}
