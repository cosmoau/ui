/* eslint-disable no-duplicate-imports */
import type * as Stitches from '@stitches/react';
import type { $$StyledComponentProps } from '@stitches/react/types/styled-component';
import { Check, Clipboard } from 'phosphor-react';
import type { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import React, { useState } from 'react';

import { styled } from '../../stitches.config';
import { Button } from '../Button';
import { Column } from '../Column';
import { Section } from '../Section';
import { Text } from '../Typography';

const TextAreaContainerWrapper = styled('div', {
  width: 'auto',
  display: 'block',
  alignItems: 'center',
  height: '100%',
  position: 'relative',
  borderRadius: '$2',
  backgroundColor: '$baseContrast100',
  border: '0.1rem solid $border100',
  paddingTop: 'calc($2 * 0.8)',
  paddingBottom: 'calc($2 * 0.8)',
  paddingLeft: '$2',
  paddingRight: '$2',
  boxShadow: '$1',
  userSelect: 'noe',
  transition: '$1',
  '&:hover': {
    boxShadow: '$2',
    border: '0.1rem solid $border100',
  },
  '&:focus-within': {
    boxShadow: '$2',
    border: '0.1rem solid $border100',
  },
  '&:active': {
    boxShadow: '$2',
    border: '0.1rem solid $border100',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
});

const TextareaWrapper = styled('textarea', {
  backgroundColor: 'transparent',
  color: '$base100',
  appearance: 'none',
  display: 'inline-flex',
  width: '100%',
  height: '100%',
  border: '0',
  margin: '0',
  fontSize: '1.6rem !important',
});

type Props = InputHTMLAttributes<HTMLTextAreaElement> &
  typeof TextareaWrapper[$$StyledComponentProps] & {
    css: Stitches.CSS;
    rows?: number;
    columns?: number;
    maxLength?: number;
    copy?: boolean;
    onChange?: any;
  };

const Textarea: FC<Props> = ({ css, rows = 5, columns = 1, value = '', maxLength = 250, copy, onChange }) => {
  const [controlledValue, setControlledValue] = useState(value as any);
  const [isCopied, setIsCopied] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setControlledValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const handleCopy = (): void => {
    navigator.clipboard.writeText(controlledValue);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <TextAreaContainerWrapper css={css}>
      <TextareaWrapper
        rows={rows}
        cols={columns}
        value={controlledValue}
        maxLength={maxLength}
        onChange={handleChange}
      />
      <Section
        css={{
          padding: 0,
        }}>
        <Column minimal baseWidth={60} phoneWidth={60}>
          <Text level={2}>
            {controlledValue.length} / {maxLength}
          </Text>
        </Column>
        {copy && (
          <Column minimal baseWidth={40} phoneWidth={40} align='right'>
            <Button theme='navy' onClick={handleCopy}>
              {isCopied ? <Check /> : <Clipboard />}
            </Button>
          </Column>
        )}
      </Section>
    </TextAreaContainerWrapper>
  );
};

export default Textarea;
