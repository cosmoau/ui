import { CSS } from '@stitches/react/types/css-util';
import { Circle } from 'phosphor-react';
import React, { ReactNode } from 'react';

import { Loading } from '../Loading';

import BadgeStyles from './Badge.styles';

export interface Props {
  children: ReactNode;
  css?: CSS;
  dot?: boolean | 'pulse';
  dotColor?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink';
  id?: string;
  inline?: boolean;
  inlineSpacer?: 1 | 2 | 3 | 4 | 5 | 6;
  loader?: boolean;
  shadow?: boolean;
  theme?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink' | 'border';
}

const { Wrapper, PulseWrapper } = BadgeStyles();

export default function Badge({ children, css, dot, dotColor, id, inline = true, inlineSpacer, loader, shadow, theme }: Props): JSX.Element {
  return loader ? (
    <Wrapper
      css={{
        height: '$7',
      }}
      id={id || undefined}>
      <Loading />
    </Wrapper>
  ) : (
    <Wrapper css={css} id={id || undefined} inline={inline} inlineSpacer={inlineSpacer || 'default'} shadow={shadow} theme={theme || 'default'}>
      {dot &&
        (dot === 'pulse' ? (
          <PulseWrapper dotColor={dotColor || 'default'}>
            <Circle size={10} style={{ marginRight: 3.33 }} weight='fill' />
          </PulseWrapper>
        ) : (
          <Circle size={10} style={{ marginRight: 3.33 }} weight='fill' />
        ))}
      {children}
    </Wrapper>
  );
}
