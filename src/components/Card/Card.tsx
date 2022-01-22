import classNames from 'classnames';
import React from 'react';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  theme?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink' | 'dark';
  isLoading?: boolean;
  small?: boolean;
  border?: boolean;
  image?: React.ReactNode;
  imageHeight?: string;
  minimal?: boolean;
  shadow?: boolean;
  children: React.ReactNode;
}

function Card({
  className,
  style,
  theme,
  isLoading,
  small,
  border,
  image,
  imageHeight,
  minimal,
  shadow,
  children,
}: Props): JSX.Element {
  return (
    <div
      className={classNames('Card', {
        [`${className}`]: className,
        [`_${theme}`]: theme,
        _small: small,
        _border: border,
        _disabled: isLoading,
        _minimal: minimal,
        _shadow: shadow,
        _image: image,
      })}
      style={style}>
      {image ? (
        <>
          <div className='image-container' style={{ height: imageHeight || '15rem' }}>
            {image}
          </div>
          <div className='image-children'>{children}</div>
        </>
      ) : (
        children
      )}
    </div>
  );
}
export default Card;
