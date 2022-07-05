import { breakpoints, styled } from '../../stitches.config';

export const TableStyled = styled('table', {
  '*': {
    alignContent: 'center',
    verticalAlign: 'middle',
  },
  borderRadius: '$1',
  borderSpacing: 0,
  display: 'inline-table',
  fontSize: '1.5rem',
  overflowX: 'auto',

  [breakpoints.phone]: {
    display: 'flex-table',
    minWidth: '100%',
    paddingBottom: '$3',
  },
  width: '100%',
});

export const TableHeadStyled = styled('thead', {
  borderBottom: '0.1rem solid $border',
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
  borderRadius: '$2',

  transition: '$default',
});

export const TableCellStyled = styled('td', {
  '&:last-child': {
    textAlign: 'right',
  },
  borderBottom: '0.1rem solid $border',
  fontSize: '$h6',
  padding: '$3 0',
  whiteSpace: 'nowrap',
});

export const TableHeadCellStyled = styled('th', {
  '&:last-child': {
    textAlign: 'right',
  },
  borderBottom: '0.1rem solid $border',

  fontSize: '$h6',
  fontWeight: 'bold',
  padding: '$3 0',
});

export default TableStyled;
