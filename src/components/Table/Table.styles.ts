import { styled } from '../../stitches.config';
import { TextSizes } from '../Text/Text.styles';

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
  ...TextSizes.p,

  'borderBottom': '0.1rem solid $border',
  'borderRight': '0.1rem solid $border',
  'justifyContent': 'center',
  'marginBottom': '0 !important',
  'padding': '$2 $4 ',
});

export const TableHeadCellStyled = styled('th', {
  '&:last-child': {
    borderRight: '0 !important',
  },
  ...TextSizes.p,
  'borderBottom': '0.1rem solid $border',
  'borderRight': '0.1rem solid $border',
  'marginBottom': '0 !important',
  'padding': '$3 $4 ',
  'textAlign': 'center',
});

export default TableStyled;
