import { CSS } from '@stitches/react/types/css-util';
import { Circle } from 'phosphor-react';
import React, { ReactNode } from 'react';

import { Element } from '../Layout';
import { Loading } from '../Loading';

import BadgeStyles from './Badge.styles';

export interface Props {
  border?: boolean;
  children: ReactNode;
  css?: CSS;
  dot?: boolean | 'pulse';
  dotColor?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink';
  id?: string;
  inline?: boolean;
  inlineSpacer?: 1 | 2 | 3 | 4 | 5 | 6;
  loader?: boolean;
  shadow?: boolean;
  theme?: 'red' | 'yellow' | 'green' | 'blue' | 'navy' | 'purple' | 'pink';
}

const { Wrapper, DotWrapper } = BadgeStyles();

export default function Badge({ border = true, children, css, dot, dotColor, id, inline = true, inlineSpacer, loader, shadow, theme }: Props): JSX.Element {
  return (
    <Wrapper border={border} css={css} id={id || undefined} inline={inline} inlineSpacer={inlineSpacer || 'default'} shadow={shadow} theme={theme || 'default'}>
      {loader ? (
        <Loading />
      ) : (
        <Element>
          {dot && (
            <DotWrapper dotColor={dotColor || 'default'} pulse={dot === 'pulse'}>
              <Circle size={10} style={{ marginRight: 3.33 }} weight='fill' />
            </DotWrapper>
          )}
          {children}
        </Element>
      )}
    </Wrapper>
  );
}
