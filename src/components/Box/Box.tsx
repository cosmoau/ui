import { X } from 'phosphor-react';
import { ReactNode, useState } from 'react';

import { Button, Image } from '../../index';
import { DefaultProps } from '../../stitches.config';

import { BoxExitStyled, BoxImageChildrenStyled, BoxStyled } from './Box.styles';

interface Props extends DefaultProps {
  children: ReactNode;
  loading?: boolean;
  image?: string;
  imageCTA?: string;
  imageHeight?: string;
  imageTarget?: '_blank' | '_self';
  imagePosition?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  imageFit?: 'contain' | 'cover';
  imageAlt?: string;
  hover?: boolean;
  theme?: 'default' | 'success' | 'warning' | 'error' | 'transparent' | 'fill';
  closable?: boolean;
  minimal?: boolean;
}

export default function Box(props: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 250);
  }

  return isMounted ? (
    props.image ? (
      <BoxStyled
        animation={!isOpen}
        css={props.css}
        hover={props.hover}
        id={props.id}
        loading={props.loading || false}
        padding={'none'}
        theme={props.theme || 'default'}>
        {props.imageCTA ? (
          <a href={props.imageCTA} rel='noopener noreferrer' target={props.imageTarget || '_blank'}>
            <Image
              alt={props.imageAlt || ''}
              css={{
                img: {
                  borderTopLeftRadius: '$2 !important',
                  borderTopRightRadius: '$2 !important',
                },
              }}
              fill
              fillFit={props.imageFit || 'cover'}
              fillHeight={props.imageHeight || '20rem'}
              fillPosition={props.imagePosition || 'center'}
              hover={props.hover}
              src={props.image}
            />
          </a>
        ) : (
          <Image
            alt={props.imageAlt || ''}
            css={{
              img: {
                borderTopLeftRadius: '$2 !important',
                borderTopRightRadius: '$2 !important',
              },
            }}
            fill
            fillFit={props.imageFit || 'cover'}
            fillHeight={props.imageHeight || '20rem'}
            fillPosition={props.imagePosition || 'center'}
            hover={props.hover}
            src={props.image}
          />
        )}
        <BoxImageChildrenStyled padding={'default'}>{props.children}</BoxImageChildrenStyled>
      </BoxStyled>
    ) : (
      <BoxStyled
        animation={!isOpen}
        css={props.css}
        hover={props.hover}
        id={props.id}
        loading={props.loading || false}
        padding={props.minimal ? 'none' : 'default'}
        theme={props.theme || 'default'}>
        {props.children}
        {props.closable && (
          <BoxExitStyled onClick={(): void => handleClose()}>
            <Button ariaLabel='Close' name='close' small theme={'minimal'}>
              <X />
            </Button>
          </BoxExitStyled>
        )}
      </BoxStyled>
    )
  ) : (
    <></>
  );
}
