import classNames from 'classnames';
import React from 'react';

import { Loading } from '../Loading';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  theme?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink' | 'dark';
  isLoading?: boolean;
  block?: boolean;
  large?: boolean;
  shadow?: boolean;
  children: React.ReactNode;
}

function Badge({ className, style, theme, isLoading, block, large, shadow, children }: Props): JSX.Element {
  return (
    <div
      className={classNames('Badge', {
        [`${className}`]: className,
        [`_${theme}`]: theme,
        _block: block,
        _large: large,
        _shadow: shadow,
        _disabled: isLoading,
      })}
      style={style}>
      {isLoading ? <Loading width={13} /> : children}
    </div>
  );
}
export default Badge;
