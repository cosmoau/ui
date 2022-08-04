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
          width: '98%',
        },
        [breakpoints.tabletX]: {
          width: '98%',
        },
        [breakpoints.laptopX]: {
          maxWidth: '1440px',
          width: '96%',
        },
        [breakpoints.desktopX]: {
          maxWidth: '1660px',
          width: '98%',
        },
        [breakpoints.wide]: {
          maxWidth: '1850px',
          width: '95%',
        },
      },
    },
  },
});

export default ViewStyled;
