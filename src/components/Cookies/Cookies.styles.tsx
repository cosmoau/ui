import { breakpoints, styled } from '../../stitches.config';

export default function CookiesStyles() {
  const Wrapper = styled('div', {
    position: 'fixed',
    transition: '$1',
    zIndex: '$cookies',
    bottom: '$4',
    left: 0,
    right: 0,
    maxWidth: '100%',
    margin: 'auto',
    textAlign: 'center',

    svg: {
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: '$1',

      '&:hover': {
        opacity: 0.4,
      },
    },
    [breakpoints.phone]: {
      maxWidth: '95%',
    },
  });

  return {
    Wrapper,
  };
}
