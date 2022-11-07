import { default as NextImage, ImageProps } from 'next/image';

import { DefaultProps } from '../../stitches.config';

import { ImageStyled } from './Image.styles';

interface Props extends DefaultProps, ImageProps {
  borderRadius?: 1 | 2 | 3;
  hover?: boolean;
  fillFit?: 'contain' | 'cover';
  fillPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  fillHeight?: string | number;
  fill?: boolean;
}

export default function Image(props: Props): JSX.Element {
  const { css, borderRadius, hover, fill, fillFit, fillPosition, fillHeight, ...rest } =
    props;
  return (
    <ImageStyled
      css={{
        ...(fill && {
          borderRadius: borderRadius ? `$${borderRadius}` : undefined,
          img: {
            borderRadius: borderRadius ? `$${borderRadius}` : undefined,
            objectFit: fillFit || 'cover',
            objectPosition: fillPosition || 'center',
          },
        }),
        ...(hover && {
          '&:hover': {
            opacity: 0.9,
          },
        }),
        height: fillHeight || '100%',
        ...css,
      }}>
      <NextImage {...rest} fill={fill} />
    </ImageStyled>
  );
}
