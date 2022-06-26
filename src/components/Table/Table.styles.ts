import { breakpoints, styled } from '../../stitches.config';

export const TableStyled = styled('table', {
  '*': {
    alignContent: 'center',
    lineHeight: 1.5,
    verticalAlign: 'middle',
  },
  borderRadius: '$1',
  borderSpacing: 0,
  display: 'inline-table',
  fontSize: '1.5rem',
  overflowX: 'auto',

  [breakpoints.phone]: {
    display: 'block',
    paddingBottom: '$3',
    width: '100%',
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
  borderBottom: '0.1rem solid $border',
  borderRadius: '$2',

  transition: '$default',
});

export const TableCellStyled = styled('td', {
  '&:last-child': {
    textAlign: 'right',
  },
  borderBottom: '0.1rem solid $border',
  fontSize: '$h6',

  padding: '$3 $4',
  whiteSpace: 'nowrap',
});

export const TableHeadCellStyled = styled('th', {
  '&:last-child': {
    textAlign: 'right',
  },
  borderBottom: '0.1rem solid $border',

  fontSize: '$h6',
  fontWeight: 'bold',
  padding: '$2 $4',
});

export default TableStyled;
