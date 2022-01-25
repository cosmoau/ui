import classNames from 'classnames';
import React from 'react';

import { globalCss } from '../../stitches.config';

export interface Props {
  dark?: boolean;
  children: React.ReactNode;
}

const globalStyles = globalCss({
  html: {
    fontSize: '62.5%',
    height: '100%',
    verticalAlign: 'baseline',
    boxSizing: 'border-box;',
  },
  body: {
    fontFamily: '$untitled',
    color: '$dark100',
    lineHeight: 1.6,
    fontSize: '1.5rem',
    height: '100%',
    margin: 0,
    padding: 0,
  },
  '*': {
    boxSizing: 'border-box;',
    outline: 'none',
    webkitTextSizeAdjust: '100%',
    webkitFontSmoothing: 'antialiased',
    mozXFontSmoothing: 'grayscale',
    textRendering: 'optimizeLegibility',
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
    verticalAlign: 'baseline',
    textTransform: 'none',
    textIndent: '0',
    textDecoration: 'none',
    textShadow: 'none',
    textOverflow: 'clip',
    textAlignLast: 'start',
    textJustify: 'auto',
    textAlign: 'start',
  },
  svg: {
    transition: '$1',
    verticalAlign: 'middle',
    alignSelf: 'center',
  },
  img: {
    borderRadius: '$3',
  },
});

export default function Global({ dark, children }: Props): JSX.Element {
  globalStyles();

  return <div className={classNames(dark)}>{children}</div>;
}
