import { Check, ClipboardText, Warning, Eye, EyeClosed } from 'phosphor-react';
import React, { InputHTMLAttributes, useState } from 'react';
import { useEventListener } from 'usehooks-ts';

import { Button, Badge, Loading } from '../../index';
import { DefaultProps } from '../../stitches.config';

import {
  InputAreaStyled,
  InputCallbackStyled,
  InputFunctionStyled,
  InputStyled,
  InputCoreStyled,
} from './Input.styles';

interface Props extends InputHTMLAttributes<HTMLInputElement>, DefaultProps {
  copy?: boolean;
  error?: boolean;
  errorMessage?: string;
  loading?: boolean;
  reveal?: boolean;
  submit?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  submitFunction?: any;
  submitValid?: boolean;
  success?: boolean;
  successMessage?: string;
  warning?: boolean;
  warningMessage?: string;
  disabled?: boolean;
  width?: number | string;
  listen?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mustRef?: any;
}

export default function Input(props: Props): JSX.Element {
  const [value, setValue] = useState(props.value || '');
  const [isCopied, setIsCopied] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  }

  function handleCopy(): void {
    if (props.copy) {
      navigator.clipboard.writeText(value as string);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }

  function handleReveal(): void {
    setIsRevealed(!isRevealed);
  }

  // event listener

  useEventListener('keydown', (e: KeyboardEvent) => {
    if (props.listen && e.key === 'Enter' && props.submitFunction && props.submitValid) {
      props.submitFunction();
    }
  });

  return (
    <InputStyled
      css={{
        maxWidth: props.width || '100%',
        width: props.width || '100%',
      }}
      id={props.id}>
      <InputCoreStyled
        disabled={props.disabled}
        state={
          props.success
            ? 'success'
            : props.warning
            ? 'warning'
            : props.error
            ? 'error'
            : 'default'
        }>
        <InputAreaStyled
          css={props.css}
          disabled={props.disabled}
          onChange={handleChange}
          placeholder={props.placeholder}
          ref={props.mustRef || undefined}
          type={isRevealed ? 'text' : props.type || 'text'}
          value={value}
        />
        {(props.loading || props.submit || props.copy || props.reveal) && (
          <InputFunctionStyled>
            {props.loading && <Loading />}
            {props.copy && (
              <Button
                ariaLabel='Copy'
                css={{
                  marginLeft: '$2',
                }}
                icon={
                  isCopied ? (
                    <ClipboardText opacity={0.5} weight='duotone' />
                  ) : (
                    <ClipboardText weight='duotone' />
                  )
                }
                name='copy'
                onClick={handleCopy}
                small>
                Copy
              </Button>
            )}
            {props.reveal && (
              <Button
                ariaLabel='Reveal'
                css={{
                  marginLeft: '$2',
                }}
                icon={
                  !isRevealed ? <Eye weight='duotone' /> : <EyeClosed weight='duotone' />
                }
                name='reveal'
                onClick={handleReveal}
                small>
                {isRevealed ? 'Hide' : 'Show'}
              </Button>
            )}

            {props.submit && props.submitFunction && (
              <Button
                ariaLabel='Submit'
                css={{
                  marginLeft: '$2',
                }}
                disabled={!props.submitValid}
                name='submit'
                onClick={(): void => props.submitFunction(value)}
                small>
                {props.submit}
              </Button>
            )}
          </InputFunctionStyled>
        )}
      </InputCoreStyled>
      <InputCallbackStyled>
        {props.error && !props.success && !props.warning && (
          <Badge
            css={{
              backgroundColor: 'transparent',
              fontSize: '$p !important',
              padding: 0,
            }}
            icon={<Warning weight='duotone' />}
            theme='red'>
            {props.errorMessage || 'Error'}
          </Badge>
        )}
        {props.success && !props.error && !props.warning && (
          <Badge
            css={{
              backgroundColor: 'transparent',
              fontSize: '$p !important',
              padding: 0,
            }}
            icon={<Check weight='duotone' />}
            theme='green'>
            {props.successMessage || 'Success'}
          </Badge>
        )}
        {props.warning && !props.success && !props.error && (
          <Badge
            css={{
              backgroundColor: 'transparent',
              fontSize: '$p !important',
              padding: 0,
            }}
            icon={<Warning weight='duotone' />}
            theme='orange'>
            {props.warningMessage || 'Invalid'}
          </Badge>
        )}
      </InputCallbackStyled>
    </InputStyled>
  );
}
