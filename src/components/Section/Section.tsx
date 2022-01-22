import classNames from 'classnames';
import React from 'react';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  minimal?: boolean;
  alignment?: 'initial' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  children: React.ReactNode;
}

export default function Section({ className, style, minimal, alignment = 'initial', children }: Props): JSX.Element {
  return (
    <section
      className={classNames('Section', {
        [`${className}`]: className,
        _minimal: minimal,
        _stretched: alignment === 'stretch',
      })}
      style={{ alignItems: alignment, ...style }}
    >
      {children}
    </section>
  );
}
