import { Check, ClipboardText, Eye, EyeClosed, Warning } from 'phosphor-react';
import React, { InputHTMLAttributes, useState } from 'react';

import { DefaultProps } from '../../stitches.config';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Loading } from '../Loading';

import { InputAreaStyled, InputCallbackStyled, InputFunctionStyled, InputStyled, InputCoreStyled } from './Input.styles';

export interface Props extends InputHTMLAttributes<HTMLInputElement>, DefaultProps {
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
  maxWidth?: string;
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

  return (
    <InputStyled
      css={{
        maxWidth: props.maxWidth || '80%',
        width: props.maxWidth || '80%',
      }}
      id={props.id}>
      <InputCoreStyled disabled={props.disabled} state={props.success ? 'success' : props.warning ? 'warning' : props.error ? 'error' : 'default'}>
        <InputAreaStyled
          css={props.css}
          ref={props.mustRef || undefined}
          disabled={props.disabled}
          onChange={handleChange}
          placeholder={props.placeholder}
          type={isRevealed ? 'text' : props.type || 'text'}
          value={value}
        />
        {(props.loading || props.submit || props.copy || props.reveal) && (
          <InputFunctionStyled>
            {props.loading && <Loading />}
            {props.copy && (
              <Button
                small
                ariaLabel='Copy'
                name='copy'
                icon={isCopied ? <ClipboardText opacity={0.4} weight='duotone' /> : <ClipboardText weight='duotone' />}
                onClick={handleCopy}
                css={{
                  lineHeight: '1',
                  marginLeft: '$2',
                }}>
                Copy
              </Button>
            )}
            {props.reveal && (
              <Button
                ariaLabel='Reveal'
                small
                name='reveal'
                icon={!isRevealed ? <Eye weight='duotone' /> : <EyeClosed weight='duotone' />}
                onClick={handleReveal}
                css={{
                  lineHeight: '1',
                  marginLeft: '$2',
                }}>
                {isRevealed ? 'Hide' : 'Show'}
              </Button>
            )}

            {props.submit && props.submitFunction && (
              <Button
                small
                ariaLabel='Submit'
                name='submit'
                disabled={!props.submitValid}
                onClick={(): void => props.submitFunction(value)}
                css={{
                  lineHeight: '1',
                  marginLeft: '$2',
                }}>
                {props.submit}
              </Button>
            )}
          </InputFunctionStyled>
        )}
      </InputCoreStyled>
      <InputCallbackStyled>
        {props.error && !props.success && !props.warning && (
          <Badge icon={<Warning weight='duotone' />} theme='red' css={{ backgroundColor: 'transparent', padding: 0 }}>
            {props.errorMessage || 'Error'}
          </Badge>
        )}
        {props.success && !props.error && !props.warning && (
          <Badge icon={<Check weight='duotone' />} theme='green' css={{ backgroundColor: 'transparent', padding: 0 }}>
            {props.successMessage || 'Success'}
          </Badge>
        )}
        {props.warning && !props.success && !props.error && (
          <Badge icon={<Warning weight='duotone' />} theme='orange' css={{ backgroundColor: 'transparent', padding: 0 }}>
            {props.warningMessage || 'Invalid'}
          </Badge>
        )}
      </InputCallbackStyled>
    </InputStyled>
  );
}
