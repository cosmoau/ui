import { styled } from '../../stitches.config';

export const TextSizes = {
  h1: {
    fontFamily: '$serif',
    fontSize: '$h1',
    fontWeight: '$h1',
    lineHeight: '$h1',
    marginBottom: '$5',
  },
  h2: {
    fontFamily: '$serif',
    fontSize: '$h2',
    fontWeight: '$h2',
    lineHeight: '$h2',
    marginBottom: '$5',
  },
  h3: {
    fontFamily: '$serif',
    fontSize: '$h3',
    fontWeight: '$h3',
    lineHeight: '$h3',
    marginBottom: '$5',
  },
  h4: {
    fontFamily: '$serif',
    fontSize: '$h4',
    fontWeight: '$h4',
    lineHeight: '$h4',
    marginBottom: '$4',
  },
  h5: {
    fontSize: '$h5',
    fontWeight: '$h5',
    lineHeight: '$h5',
    marginBottom: '$3',
  },
  h6: {
    fontSize: '$h6',
    fontWeight: '$h6',
    lineHeight: '$h6',
    marginBottom: '$3',
  },
  li: {
    fontSize: '$p',
    fontWeight: '$p',
    lineHeight: '$p',
    listStylePosition: 'inside',
    marginBottom: '$3',
  },
  ol: {
    fontSize: '$p',
    fontWeight: '$p',
    lineHeight: '$p',
  },
  p: {
    fontSize: '$p',
    fontWeight: '$p',
    lineHeight: '$p',
    marginBottom: '$3',
  },
  small: {
    display: 'block',
    fontSize: '$small',
    fontWeight: '$small',
    lineHeight: '$small',
    marginBottom: '$3',
  },
  span: {
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
  },
  ul: {
    fontSize: '$p',
    fontWeight: '$p',
    lineHeight: '$p',
  },
};

export const TextStyled = styled('div', {
  '&:last-child': {
    marginBottom: '0 !important',
  },
  'color': '$text',
  'variants': {
    accent: {
      true: {
        color: '$accent',
      },
    },
    bold: {
      true: {
        fontWeight: 'bold',
      },
    },
    size: TextSizes,
  },
});

export default TextStyled;
