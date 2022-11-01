import { default as NextImage, ImageProps } from 'next/image';

import { DefaultProps } from '../../stitches.config';

import { ImageStyled } from './Image.styles';

interface Props extends DefaultProps {
  borderRadius?: 1 | 2 | 3;
  hover?: boolean;
  fillFit?: 'contain' | 'cover';
  fillPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  fillHeight?: string | number;
}

interface NextProps extends ImageProps {
  src: string;
  alt: string;
}

export default function Image(props: Props, nextProps: NextProps): JSX.Element {
  return (
    <ImageStyled
      borderRadius={props.borderRadius}
      css={{
        ...props.css,
        ...(nextProps.fill && {
          height: '100%',
          img: {
            height: '100%',
            objectFit: props.fillFit || 'cover',
            objectPosition: props.fillPosition || 'center',
          },
          position: 'relative',
          width: '100%',
        }),
        height: props.fillHeight || '100%',
      }}
      hover={props.hover}>
      <NextImage {...nextProps} />
    </ImageStyled>
  );
}
