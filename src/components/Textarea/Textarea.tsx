import classNames from 'classnames';
import React, { useState } from 'react';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  label?: string | React.ReactNode;
  placeholder?: string;
  rows?: number;
  columns?: number;
  maxLength?: number;
  onChangeHandler?: any;
}

function Textarea({
  className,
  style,
  label,
  placeholder,
  rows = 5,
  columns = 1,
  maxLength = 250,
  onChangeHandler,
}: Props): JSX.Element {
  const [inputValue, setInputValue] = useState(0);
  function handleInput(value: any): void {
    if (onChangeHandler) {
      onChangeHandler(value);
    }
    setInputValue(value);
  }
  return (
    <div
      className={classNames('Textarea', {
        [`${className}`]: className,
      })}
      style={style}
    >
      {label && <label>{label}</label>}
      <textarea
        rows={rows}
        cols={columns}
        placeholder={placeholder || undefined}
        maxLength={maxLength}
        onChange={(e) => handleInput(e.target.value.length)}
      ></textarea>
      <p>
        {inputValue}/{maxLength}
      </p>
    </div>
  );
}
export default Textarea;
