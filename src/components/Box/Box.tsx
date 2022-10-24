// import React from 'react';
import { ReactNode } from 'react';

import { Image } from '../../index';
import { DefaultProps } from '../../stitches.config';

import { BoxImageChildrenStyled, BoxStyled } from './Box.styles';

interface Props extends DefaultProps {
  children: ReactNode;
  loading?: boolean;
  image?: string;
  imageCTA?: string;
  imageHeight?: string;
  imageTarget?: '_blank' | '_self';
  imagePosition?: 'top' | 'bottom' | 'center';
  imageAlt?: string;
  hover?: boolean;
  theme?: 'default' | 'success' | 'warning' | 'error' | 'transparent' | 'fill';
}

export default function Box(props: Props): JSX.Element {
  return props.image &&
    props.image !== '' &&
    props.image !== undefined &&
    props.image !== '#' ? (
    <BoxStyled
      css={props.css}
      hover={props.hover}
      id={props.id}
      loading={props.loading || false}
      padding={'none'}
      theme={props.theme || 'default'}>
      {props.imageCTA ? (
        <a
          href={props.imageCTA}
          rel='noopener noreferrer'
          target={props.imageTarget || '_blank'}>
          <Image
            alt={props.imageAlt || ('#' as string)}
            css={{
              img: {
                borderTopLeftRadius: '$1 !important',
                borderTopRightRadius: '$1 !important',
              },
            }}
            fillHeight={props.imageHeight || '20rem'}
            hover={props.hover}
            layout='fill'
            objectFit={'cover'}
            objectPosition={props.imagePosition || 'center'}
            src={props.image}
          />
        </a>
      ) : (
        <Image
          alt={props.imageAlt || ('#' as string)}
          css={{
            img: {
              borderTopLeftRadius: '$1 !important',
              borderTopRightRadius: '$1 !important',
            },
          }}
          fillHeight={props.imageHeight || '20rem'}
          hover={props.hover}
          layout='fill'
          objectFit={'cover'}
          objectPosition={props.imagePosition || 'center'}
          src={props.image}
        />
      )}
      <BoxImageChildrenStyled padding={'default'}>
        {props.children}
      </BoxImageChildrenStyled>
    </BoxStyled>
  ) : (
    <BoxStyled
      css={props.css}
      hover={props.hover}
      id={props.id}
      loading={props.loading || false}
      padding={'default'}
      theme={props.theme || 'default'}>
      {props.children}
    </BoxStyled>
  );
}
