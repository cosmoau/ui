import { CSS } from '@stitches/react/types/css-util';
import { Check, Circle } from 'phosphor-react';
import React, { ReactNode, useState } from 'react';

import { styled } from '../../stitches.config';
import { Button } from '../Button';

export interface Props {
  checked?: boolean;
  children?: ReactNode;
  css?: CSS;
  disabled?: boolean;
  id?: string;
}

export default function Checkbox({ checked = false, children, css, disabled = false, id }: Props): JSX.Element {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (): void => {
    if (disabled) {
      return;
    }
    setIsChecked(!isChecked);
  };

  const Wrapper = styled('div', {
    opacity: !disabled ? 1 : 0.5,
    whiteSpace: 'nowrap',
    display: 'table-row-group',

    '*': {
      cursor: !disabled ? 'pointer' : 'not-allowed',
    },

    svg: {
      color: !disabled ? 'inherit' : '$navy100',
    },
  });

  const LabelWrapper = styled('label', {
    display: 'table-cell',
    verticalAlign: 'middle',
    paddingLeft: '$3',
    userSelect: 'none',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  });

  return (
    <Wrapper css={css} id={id} onClick={handleChange}>
      <Button
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '$3',
          aspectRatio: 1,
          width: '3rem',
          height: '3rem',
        }}>
        {isChecked ? <Check /> : <Circle opacity={0.1} />}
      </Button>
      <LabelWrapper>{children}</LabelWrapper>
    </Wrapper>
  );
}
