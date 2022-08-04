import { breakpoints, styled } from '../../stitches.config';

export const ViewStyled = styled('div', {
  boxSizing: 'border-box',
  paddingLeft: '$2',
  paddingRight: '$2',
  position: 'relative',
  width: '100%',
});

export const ViewContainerStyled = styled('div', {
  position: 'relative',

  variants: {
    container: {
      false: {
        minWidth: '100%',
      },
      true: {
        margin: 'auto',

        [breakpoints.phone]: {
          width: '97%',
        },
        [breakpoints.tabletX]: {
          width: '98%',
        },
        [breakpoints.laptopX]: {
          maxWidth: '1440px',
          width: '95%',
        },
        [breakpoints.desktopX]: {
          maxWidth: '1660px',
          width: '96%',
        },
        [breakpoints.wide]: {
          maxWidth: '1950px',
          width: '94%',
        },
      },
    },
  },
});

export default ViewStyled;
