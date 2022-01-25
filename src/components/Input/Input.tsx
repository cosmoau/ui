import classNames from 'classnames';
import { CheckCircle, Copy, Eye, WarningOctagon } from 'phosphor-react';
import React, { RefObject, useState } from 'react';

import { Badge } from '../Badge';
import { Button } from '../Button';
import { Loading } from '../Loading';

export interface Props {
  className?: string;
  css?: Stitches.CSS;
  label?: string | boolean;
  placeholder?: string;
  size?: 'numeric' | 'small' | 'medium' | 'large' | 'full';
  type?: string;
  min?: number;
  max?: number;
  reveal?: boolean;
  copy?: boolean;
  submit?: string;
  customSubmit?: React.ReactNode;
  loader?: boolean;
  error?: boolean;
  onRef?: RefObject<HTMLInputElement>;
  onChangeHandler?: any;
  onSubmitHandler?: any;
}

function Input({
  className,
  style,
  size,
  reveal,
  type = 'text',
  min,
  max,
  copy,
  placeholder,
  label,
  loader,
  submit,
  customSubmit,
  onRef,
  onChangeHandler,
  onSubmitHandler,
  error,
}: Props): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [inputType, setInputType] = useState(type);
  const [inputCopy, setInputCopy] = useState(false);

  async function handleInput(value: any): Promise<void> {
    if (onChangeHandler) {
      onChangeHandler(value);
    }
    setInputValue(value);
  }

  async function handleSubmit(value: any): Promise<void> {
    onSubmitHandler(value);
  }
  function handleInputType(): void {
    if (inputType === 'text') {
      setInputType('password');
    } else {
      setInputType('text');
    }
  }
  async function handleInputCopy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(inputValue);
      setInputCopy(true);
    } catch (err) {
      setInputCopy(false);
    }
  }
  return (
    <div
      className={classNames('Input', {
        [`${className}`]: className,
      })}
      css={css}>
      {label && <label>{label}</label>}

      <div
        className={classNames('function-container', {
          _full: size === 'full',
        })}>
        <input
          className={classNames({
            [`_${size}`]: size,
          })}
          type={inputType}
          min={inputType === 'number' ? min : undefined}
          max={inputType === 'number' ? max : undefined}
          placeholder={placeholder || undefined}
          ref={onRef}
          onChange={(e) => handleInput(e.target.value)}
        />

        {loader && (
          <div className='function' key='loader'>
            <Badge theme='navy'>
              <Loading width={18} />
            </Badge>
          </div>
        )}
        {reveal && (
          <div className='function' key='reveal'>
            <Button className={inputType === 'text' ? 'disabled' : ''} onClick={() => handleInputType()}>
              <Eye size={18} style={{ marginRight: '0.5rem' }} />
              Reveal
            </Button>
          </div>
        )}
        {copy && (
          <div className='function' key='copy'>
            <Button className={inputCopy === true ? 'disabled' : ''} onClick={() => handleInputCopy()}>
              {inputCopy === false ? (
                <Copy size={18} style={{ marginRight: '0.5rem' }} />
              ) : (
                <CheckCircle size={18} style={{ marginRight: '0.5rem' }} />
              )}
              Copy
            </Button>
          </div>
        )}
        {error && (
          <div className='function' key='error'>
            <Badge theme='red'>
              <WarningOctagon size={18} />
            </Badge>
          </div>
        )}

        {submit && (
          <div className='function' key='submit'>
            <Button onClick={() => handleSubmit(inputValue)}>{submit || 'Submit'} </Button>
          </div>
        )}

        {customSubmit && (
          <div className='function' key='submit'>
            {customSubmit}
          </div>
        )}
      </div>
    </div>
  );
}
export default Input;
