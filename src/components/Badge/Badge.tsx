import classNames from 'classnames';
import { Circle } from 'phosphor-react';
import React from 'react';

import { Loading } from '../Loading';

export interface Props {
  className?: string;
  css?: Stitches.CSS;
  theme?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink' | 'dark';
  loader?: boolean;
  shadow?: boolean;
  dot?: boolean | 'pulse';
  children: React.ReactNode;
}

function Badge({ className, style, theme, loader, shadow, dot, children }: Props): JSX.Element {
  return (
    <div
      className={classNames('Badge', {
        [`${className}`]: className,
        [`_${theme}`]: theme,
        _shadow: shadow,
        _disabled: loader,
      })}
      css={css}>
      {loader ? (
        <Loading width={13} />
      ) : (
        <>
          {dot &&
            (dot === 'pulse' ? (
              <div className='pulse'>
                <Circle weight='fill' size={10} style={{ marginRight: 3.33 }} />
              </div>
            ) : (
              <Circle weight='fill' size={10} style={{ marginRight: 3.33 }} />
            ))}
          {children}
        </>
      )}
    </div>
  );
}
export default Badge;
