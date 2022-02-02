import type * as Stitches from '@stitches/react';
import { Check, Circle } from 'phosphor-react';
import React, { useState } from 'react';

import { styled } from '../../stitches.config';
import { Button } from '../Button';

export interface Props {
  css?: Stitches.CSS;
  id?: string;
  checked?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

function Checkbox({ css, id, checked, disabled, children }: Props): JSX.Element {
  const [checkedState, setCheckedState] = useState(checked);

  const handleChange = (): void => {
    if (disabled) {
      return;
    } else setCheckedState(!checkedState);
  };

  const CheckboxWrapper = styled('div', {
    opacity: disabled ? 0.5 : 1,
    whiteSpace: 'nowrap',
    display: 'table-row-group',

    '*': {
      cursor: disabled ? 'not-allowed' : 'pointer',
    },

    svg: {
      color: disabled ? '$navy100' : 'inherit',
    },
  });

  const CheckboxLabel = styled('label', {
    display: 'table-cell',
    verticalAlign: 'middle',
    paddingLeft: '$2',
    userSelect: 'none',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  });

  return (
    <CheckboxWrapper css={css} id={id}>
      <Button
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '100%',
          aspectRatio: 1,
          padding: 'calc($2 * 0.33)',
        }}
        onClick={handleChange}>
        {checkedState ? <Check /> : <Circle opacity={0.1} />}
      </Button>
      <CheckboxLabel>{children}</CheckboxLabel>
    </CheckboxWrapper>
  );
}
export default Checkbox;
