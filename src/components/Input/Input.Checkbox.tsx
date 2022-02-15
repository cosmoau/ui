import { CSS } from '@stitches/react/types/css-util';
import { Check, Circle, Question } from 'phosphor-react';
import React, { ReactNode, useState } from 'react';

import { styled } from '../../stitches.config';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';

export interface Props {
  checked?: boolean;
  children?: ReactNode;
  css?: CSS;
  disabled?: boolean;
  id?: string;
  size?: 1 | 2;
  tooltip?: string;
}

export default function Checkbox({ checked = false, children, css, disabled = false, id, size = 1, tooltip }: Props): JSX.Element {
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
    ft: size === 1 ? '$h5' : '$h6',
  });

  const TooltipWrapper = styled('div', {
    verticalAlign: 'middle',
    alignContent: 'center',
    display: 'table-cell',

    svg: {
      marginLeft: '$3',
      cursor: 'pointer',
      verticalAlign: 'middle !important',
      opacity: 0.5,
      transition: '$1',

      '&:hover': {
        opacity: 1,
      },
    },
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
          padding: '$2',
        }}>
        {isChecked ? <Check /> : <Circle opacity={0.15} />}
      </Button>
      <LabelWrapper>{children}</LabelWrapper>
      {tooltip && (
        <TooltipWrapper>
          <Tooltip trigger={<Question size={18} />} passKey={`${children}`} type='click'>
            {tooltip}
          </Tooltip>
        </TooltipWrapper>
      )}
    </Wrapper>
  );
}
