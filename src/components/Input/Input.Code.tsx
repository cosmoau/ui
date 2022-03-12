/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-duplicate-imports */
import { CSS } from '@stitches/react/types/css-util';
import { Check, Clipboard } from 'phosphor-react';
import type { ReactNode } from 'react';
import React, { useState } from 'react';

import { Button } from '../Button';
import { Element } from '../Layout';

import InputStyles from './Input.styles';

export interface Props {
  copy?: boolean;
  css?: CSS;
  children: ReactNode;
}

const { CodeWrapper, CodeInnerWrapper, CodeCopyWrapper } = InputStyles();

export default function Code({ copy, css, children }: Props): JSX.Element {
  const [isCopied, setIsCopied] = useState(false) as [boolean, any];

  function handleCopy() {
    if (copy) {
      navigator.clipboard.writeText(children as string);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }
  function detectAndBoldComments(text: string) {
    const lines = text.split('\n');
    const newLines = lines.map((line) => {
      if (line.trim().startsWith('/*')) {
        return (
          <Element
            css={{
              opacity: 0.5,
              mt: '$3',
              mb: '$1',
              '&:first-child': {
                mt: 0,
              },
            }}
            key={line}>
            {line}
          </Element>
        );
      }
      return <Element key={line}>{line}</Element>;
    });
    return newLines;
  }

  return (
    <CodeWrapper css={css}>
      <CodeInnerWrapper>{detectAndBoldComments(children as string)}</CodeInnerWrapper>
      {copy && (
        <CodeCopyWrapper>
          <Button onClick={handleCopy} theme='navy'>
            {isCopied ? <Check /> : <Clipboard />}
          </Button>
        </CodeCopyWrapper>
      )}
    </CodeWrapper>
  );
}
