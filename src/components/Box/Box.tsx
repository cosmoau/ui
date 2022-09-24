/** @format */

import React, { ReactNode } from 'react';

import { DefaultProps } from '../../stitches.config';
import { ThreesImage } from '../Image';

import { BoxImageChildrenStyled, BoxStyled } from './Box.styles';

export interface Props extends DefaultProps {
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
  return props?.image ? (
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
          <ThreesImage
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
            src={props.image.toString()}
          />
        </a>
      ) : (
        <ThreesImage
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
          src={props.image.toString()}
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
