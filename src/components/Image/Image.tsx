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
      borderRadius={borderRadius}
      css={{
        ...css,
        ...(fill && {
          height: '100%',
          img: {
            height: '100%',
            objectFit: fillFit || 'cover',
            objectPosition: fillPosition || 'center',
          },
          position: 'relative',
          width: '100%',
        }),
        height: fillHeight || '100%',
      }}
      hover={hover}>
      <NextImage {...rest} fill={fill} />
    </ImageStyled>
  );
}
