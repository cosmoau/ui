import { globalCss } from '@stitches/react';

import { styled } from '../../stitches.config';

export default function ThemeStyles() {
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
      margin: 0,
      padding: 0,
      border: 0,
    },
    '*': {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      WebkitAppearance: 'none',
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
      boxSizing: 'inherit',
    },
    '*:before': {
      boxSizing: 'inherit',
    },
    '*:after': {
      boxSizing: 'inherit',
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

  const ContextWrapper = styled('div', {
    position: 'relative',
  });

  const SwitchWrapper = styled('div', {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  return {
    ContextWrapper,
    SwitchWrapper,
    globalStyles,
  };
}
