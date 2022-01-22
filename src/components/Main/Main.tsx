import classNames from 'classnames';
import React from 'react';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  theme?: 'dark' | 'alternate' | 'light';
  inner?: boolean;
  full?: boolean;
  night?: 'true' | 'false';
  children: React.ReactNode;
}

export default function Main({ className, style, theme, inner, full, night, children }: Props): JSX.Element {
  return (
    <div
      className={classNames('Main', {
        [`${className}`]: className,
        [`_${theme}`]: theme,
        _night: night === 'true',
      })}
      style={style}>
      <div className={classNames({ _inner: inner, _full: full })} style={{ width: '100%' }}>
        {children}
      </div>
    </div>
  );
}
