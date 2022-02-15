import { globalCss } from '@stitches/react';
import { CSS } from '@stitches/react/types/css-util';
import React, { ReactNode } from 'react';
import { useDarkMode } from 'usehooks-ts';

import { theme as defaultTheme, darkTheme, styled } from '../../stitches.config';

export interface Props {
  children: ReactNode;
  css?: CSS;
  switchable?: boolean;
  theme?: typeof defaultTheme;
}

export default function Context({ children, css, switchable, theme = defaultTheme }: Props): JSX.Element {
  const { isDarkMode } = useDarkMode();

  const globalStyles = globalCss({
    html: {
      position: 'relative',
      background: '$baseBody',
      fontSize: '62.5% !important',
      height: '100%',
      boxSizing: 'border-box;',
      margin: '0',
      padding: '0',
      border: '0',
    },
    body: {
      color: '$base100',
      lineHeight: '1.6',
      fontSize: '1.6rem !important',
      fontFamily: '$body',
      height: '100%',
      boxSizing: 'border-box;',
      margin: 0,
      padding: 0,
      border: 0,
    },
    '*': {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      WebkitAppearance: 'none',
      boxSizing: 'border-box',
      outline: 'none',
      letterSpacing: 'normal',
      wordSpacing: 'normal',
      marginBlockStart: 0,
      marginBlockEnd: 0,
      marginInlineStart: 0,
      marginInlineEnd: 0,
      paddingBlockStart: 0,
      paddingBlockEnd: 0,
      paddingInlineStart: 0,
      paddingInlineEnd: 0,
    },
    button: {
      appearance: 'none',
      outline: 'none',
      cursor: 'pointer',
      margin: 0,
      width: 'auto',
      font: '$body',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      WebkitAppearance: 'none',
      overflow: 'visible',
      userSelect: 'text',
      fontFamily: 'inherit',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      '&::-moz-focus-inner': {
        border: 0,
        padding: 0,
        outline: 0,
        outlineOffset: 0,
      },
      '&:focus': {
        outline: 0,
      },
      '&:active': {
        outline: 0,
      },
    },
    svg: {
      transition: '$1',
      verticalAlign: 'middle !important',
      fill: 'currentColor',
      lineHeight: '1 !important',
    },
    img: {
      borderRadius: '$3',
    },
    a: {
      transition: '$1',
      textDecoration: 'none',
      color: 'inherit',
      cursor: 'pointer',
      '&:hover': {
        opacity: 0.7,
      },
      '&:focus': {
        outline: 'none',
      },
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: '$base2',
      overflowX: 'auto',
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word',
    },
    code: {
      fontFamily: 'monospace',
      fontSize: '$base2',
    },
    ol: {
      listStylePosition: 'inside',
    },
    ul: {
      listStylePosition: 'inside',
    },
    li: {
      listStyle: 'circle',
      marginBottom: '$3',

      '&:last-child': {
        marginBottom: 0,
      },
    },
  });

  const Wrapper = styled('div', {
    ...globalStyles,
    position: 'relative',
  });

  globalStyles();

  return (
    <Wrapper className={switchable && isDarkMode ? darkTheme : theme} css={css}>
      {children}
    </Wrapper>
  );
}
