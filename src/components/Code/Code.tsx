import { ClipboardText } from 'phosphor-react';
import React, { ReactNode, useState } from 'react';

import { DefaultProps } from '../../stitches.config';
import { Button } from '../Button';
import { Element } from '../Element';

import { CodeStyled, CodeFunctionStyled, CodeBlockStyled } from './Code.styles';

export interface Props extends DefaultProps {
  children: ReactNode;
  copy?: boolean;
}

export default function Code(props: Props): JSX.Element {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy(): void {
    if (props.copy) {
      navigator.clipboard.writeText(props.children.toString());
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }

  function handleParse(text: string): ReactNode {
    const lines = text.split('\n');
    const newLines = lines.map((line) => {
      if (line.trim().startsWith('/*')) {
        return (
          <Element
            css={{
              '&:first-child': {
                marginTop: 0,
              },
              marginBottom: '$2',
              marginTop: '$3',
              opacity: 0.5,
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
    <CodeStyled css={props.css}>
      <CodeFunctionStyled>
        {props.copy && (
          <Button icon={isCopied ? <ClipboardText opacity={0.4} weight='duotone' /> : <ClipboardText weight='duotone' />} onClick={handleCopy}>
            Copy
          </Button>
        )}
      </CodeFunctionStyled>
      <CodeBlockStyled>
        <pre>{props.children && typeof props.children === 'string' ? handleParse(props.children) : props.children}</pre>
      </CodeBlockStyled>
    </CodeStyled>
  );
}
