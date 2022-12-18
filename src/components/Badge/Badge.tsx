import { Circle, X } from 'phosphor-react';
import { MouseEventHandler, ReactNode, useState } from 'react';

import { Loading } from '../../index';
import { breakpoints, DefaultProps } from '../../stitches.config';

import { BadgeIconStyled, BadgeStyled, BadgeDotStyled, BadgeLoadingStyled } from './Badge.styles';

interface Props extends Omit<DefaultProps, 'spacing'> {
  children: ReactNode;
  loading?: boolean;
  theme?: 'red' | 'orange' | 'pink' | 'purple' | 'blue' | 'green' | 'border';
  onClick?: MouseEventHandler<HTMLDivElement>;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  inline?: DefaultProps['spacing'] | 'auto';
  dot?: boolean | 'pulse';
  dotColor?: 'red' | 'orange' | 'pink' | 'purple' | 'blue' | 'green' | 'border';
  closable?: boolean;
  block?: boolean;
}

export default function Badge(props: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 250);
  }

  return isMounted ? (
    <BadgeStyled
      animation={!isOpen}
      css={{
        ...(props.inline && {
          display: 'inline-flex',
          marginRight: props.inline === 'auto' ? 'auto' : `$${props.inline}`,
          [breakpoints.phone]: {
            marginRight: props.inline === 'auto' ? 'auto' : `calc($${props.inline} * 0.9)`,
          },
          verticalAlign: 'middle',
        }),
        ...(props.block && {
          justifyContent: 'initial',
          width: '100%',
        }),
        ...props.css,
      }}
      onClick={props.onClick}
      theme={props.theme || 'default'}>
      {props.icon && (props.iconPosition === 'left' || !props.iconPosition) && (
        <BadgeIconStyled align='left'>{props.icon}</BadgeIconStyled>
      )}
      {props.dot && (
        <BadgeDotStyled dotColor={props.dotColor || 'default'} pulse={props.dot === 'pulse'}>
          <Circle weight='fill' />
        </BadgeDotStyled>
      )}
      {props.loading ? (
        <BadgeLoadingStyled>
          <Loading />
        </BadgeLoadingStyled>
      ) : (
        props.children
      )}
      {props.icon && props.iconPosition === 'right' && !props.closable && (
        <BadgeIconStyled align='right'>{props.icon}</BadgeIconStyled>
      )}
      {props.closable && (
        <BadgeIconStyled align='right' onClick={(): void => handleClose()}>
          <X style={{ cursor: 'pointer', opacity: 0.7 }} weight='fill' />
        </BadgeIconStyled>
      )}
    </BadgeStyled>
  ) : (
    <></>
  );
}
