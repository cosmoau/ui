import classNames from 'classnames';
import React from 'react';

import { Loading } from '../Loading';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  theme?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink' | 'dark' | 'light';
  isLoading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  large?: boolean;
  transparent?: boolean;
  conceal?: boolean;
  bolded?: boolean;
  children: React.ReactNode;
}

function Button({
  className,
  style,
  theme,
  isLoading,
  onClick,
  large,
  transparent,
  conceal,
  bolded,
  children,
}: Props): JSX.Element {
  return (
    <button
      className={classNames('Button', {
        [`${className}`]: className,
        [`_${theme}`]: theme,
        _large: large,
        _transparent: transparent,
        _conceal: conceal,
        _bolded: bolded,
      })}
      disabled={isLoading}
      onClick={onClick}
      style={style}>
      {isLoading ? <Loading /> : children}
    </button>
  );
}
export default Button;
