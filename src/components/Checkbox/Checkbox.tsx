import type * as Stitches from '@stitches/react';
import { Check, Circle } from 'phosphor-react';
import { ReactNode, useState } from 'react';

import { styled } from '../../stitches.config';
import { Button } from '../Button';

export interface Props {
  checked?: boolean;
  children?: ReactNode;
  css?: Stitches.CSS;
  disabled?: boolean;
  id?: string;
}

export default function Checkbox({ checked = false, children, css, disabled = false, id }: Props): JSX.Element {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (): void => {
    if (disabled) {
      return;
    } else setIsChecked(!isChecked);
  };

  const Wrapper = styled('div', {
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

  const LabelWrapper = styled('label', {
    display: 'table-cell',
    verticalAlign: 'middle',
    paddingLeft: '$2',
    userSelect: 'none',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  });

  return (
    <Wrapper css={css} id={id}>
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
        {isChecked ? <Check /> : <Circle opacity={0.1} />}
      </Button>
      <LabelWrapper>{children}</LabelWrapper>
    </Wrapper>
  );
}
