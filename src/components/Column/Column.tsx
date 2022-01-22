import classNames from 'classnames';
import React from 'react';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  base?: number;
  micro?: number;
  phone?: number;
  tablet?: number;
  laptop?: number;
  desktop?: number;
  wide?: number;
  offset?: number;
  microOffset?: number;
  phoneOffset?: number;
  tabletOffset?: number;
  laptopOffset?: number;
  desktopOffset?: number;
  wideOffset?: number;
  minimal?: boolean;
  children: React.ReactNode;
}

export default function Column({
  className,
  style,
  base = 100,
  micro,
  phone,
  tablet,
  laptop,
  desktop,
  wide,
  offset = 0,
  microOffset,
  phoneOffset,
  tabletOffset,
  laptopOffset,
  desktopOffset,
  wideOffset,
  minimal,
  children,
}: Props): JSX.Element {
  return (
    <div
      className={classNames('Column', {
        [`${className}`]: className,
        [`size-${base}`]: base,
        [`size-${micro}-micro`]: micro,
        [`size-${phone}-phone`]: phone,
        [`size-${tablet}-tablet`]: tablet,
        [`size-${laptop}-laptop`]: laptop,
        [`size-${desktop}-desktop`]: desktop,
        [`size-${wide}-wide`]: wide,
        [`offset-${offset}`]: offset,
        [`offset-${microOffset}-micro`]: microOffset,
        [`offset-${phoneOffset}-phone`]: phoneOffset,
        [`offset-${tabletOffset}-tablet`]: tabletOffset,
        [`offset-${laptopOffset}-laptop`]: laptopOffset,
        [`offset-${desktopOffset}-desktop`]: desktopOffset,
        [`offset-${wideOffset}-wide`]: wideOffset,
        _minimal: minimal,
      })}
      style={style}
    >
      {children}
    </div>
  );
}
