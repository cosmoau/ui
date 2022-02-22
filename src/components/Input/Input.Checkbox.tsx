import { CSS } from '@stitches/react/types/css-util';
import { Check, Circle, Question } from 'phosphor-react';
import React, { ReactNode, useState } from 'react';

import { Button } from '../Button';
import { Tooltip } from '../Tooltip';

import InputStyles from './Input.styles';

export interface Props {
  checked?: boolean;
  children?: ReactNode;
  css?: CSS;
  disabled?: boolean;
  id?: string;
  size?: 1 | 2;
  tooltip?: string;
}

const { CheckboxWrapper, CheckboxLabelWrapper, CheckboxTooltipWrapper } = InputStyles();

export default function Checkbox({ checked, children, css, disabled, id, size = 1, tooltip }: Props): JSX.Element {
  const [isChecked, setIsChecked] = useState(checked as boolean);

  const handleChange = (): void => {
    if (disabled) {
      return;
    }
    setIsChecked(!isChecked);
  };

  return (
    <CheckboxWrapper css={css} disabled={disabled} id={id} onClick={handleChange}>
      <Button
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '$3',
          aspectRatio: 1,
          padding: '$2',
        }}>
        {isChecked ? <Check /> : <Circle opacity={0.1} />}
      </Button>
      <CheckboxLabelWrapper size={size}>{children}</CheckboxLabelWrapper>
      {tooltip && (
        <CheckboxTooltipWrapper>
          <Tooltip passKey={`${children}`} trigger={<Question size={18} />} type='click'>
            {tooltip}
          </Tooltip>
        </CheckboxTooltipWrapper>
      )}
    </CheckboxWrapper>
  );
}
