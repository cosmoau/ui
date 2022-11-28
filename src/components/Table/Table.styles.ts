import { styled } from '../../stitches.config';

export const TableStyled = styled('table', {
  '*': {
    alignContent: 'center',
    verticalAlign: 'middle',
  },
  'borderCollapse': 'separate',
  'borderSpacing': '$1',
  'maxWidth': '100%',
  'minWidth': '100%',
  'overflowX': 'auto',
  'width': '100%',
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
    borderRight: '0 !important',
    textAlign: 'right',
  },
  'borderBottom': '0.1rem solid $borderHover',
  'borderRight': '0.1rem solid $borderHover',
  'justifyContent': 'center',
  'padding': '$2 $4 ',
});

export const TableHeadCellStyled = styled('th', {
  '&:last-child': {
    borderRight: '0 !important',
  },

  'borderBottom': '0.1rem solid $borderHover',
  'borderRight': '0.1rem solid $borderHover',

  'padding': '$3 $4 ',
});

export default TableStyled;
