import { breakpoints, styled } from '../../stitches.config';

export const TableStyled = styled('table', {
  '*': {
    alignContent: 'center',
    verticalAlign: 'middle',
  },
  'borderCollapse': 'separate',
  'borderSpacing': '$1',
  'fontSize': '1.5rem',
  'maxWidth': '100%',
  'minWidth': '100%',
  'overflowX': 'auto',
  'tableLayout': 'fixed',
  'width': '100%',

  [breakpoints.tablet]: {
    display: 'block',
    tableLayout: 'fixed',
  },
});

export const TableHeadStyled = styled('thead', {
  backgroundColor: '$default',
  borderRadius: '$2 !important',
  textAlign: 'left',
  width: '100%',
});

export const TableBodyStyled = styled('tbody', {
  width: '100%',
});

export const TableRowStyled = styled('tr', {
  '&:last-child': {
    td: {
      borderBottom: '0 !important',
    },
  },
  'borderRadius': '$2',

  'transition': '$default',
});

export const TableCellStyled = styled('td', {
  '&:last-child': {
    textAlign: 'right',
  },
  'borderBottom': '0.1rem solid $borderHover',
  'fontSize': '$h5',
  'fontWeight': '$h5',
  'justifyContent': 'center',
  'lineHeight': '1.4 !important',

  [breakpoints.phone]: {
    fontSize: 'calc($h5 * 0.85)',
  },
  [breakpoints.tabletX]: {
    fontSize: 'calc($h5 * 0.9)',
  },
  [breakpoints.laptopX]: {
    fontSize: 'calc($h5 * 0.95)',
  },

  'padding': '$4',
});

export const TableHeadCellStyled = styled('th', {
  '&:last-child': {
    textAlign: 'right',
  },
  'borderBottom': '0.1rem solid $borderHover',

  'fontSize': '$h5',
  'fontWeight': 'bold',
  'lineHeight': '1.4 !important',

  [breakpoints.phone]: {
    fontSize: 'calc($h5 * 0.85)',
  },
  [breakpoints.tabletX]: {
    fontSize: 'calc($h5 * 0.9)',
  },
  [breakpoints.laptopX]: {
    fontSize: 'calc($h5 * 0.95)',
  },

  'padding': '$4 0.5rem',
});

export default TableStyled;
