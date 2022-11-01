import { default as NextImage, ImageProps } from 'next/image';

import { DefaultProps } from '../../stitches.config';

import { ImageStyled } from './Image.styles';

interface Props extends DefaultProps, ImageProps {
  borderRadius?: 1 | 2 | 3;
  hover?: boolean;
  fill?: boolean;
  fillFit?: 'contain' | 'cover';
  fillPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  fillHeight?: string | number;
}

export default function Image(props: Props): JSX.Element {
  const { borderRadius, css, hover, fill, fillHeight, ...rest } = props;

  return (
    <ImageStyled
      borderRadius={borderRadius}
      css={{
        ...css,
        ...(fill && {
          height: '100%',
          img: {
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
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
