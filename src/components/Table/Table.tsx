import { FunnelSimple, SortAscending, SortDescending } from 'phosphor-react';
import React, { ReactNode, useState } from 'react';

import { Button } from '../Button';

import { TableBodyStyled, TableCellStyled, TableHeadCellStyled, TableHeadStyled, TableRowStyled, TableStyled } from './Table.styles';

export interface Props {
  headChildren?: Array<string>;
  bodyChildren: Array<Array<ReactNode | string>>;
  sort?: boolean;
}

export default function Table(props: Props): JSX.Element {
  const [sortBy, setSortBy] = useState(0);
  const [sortDirection, setSortDirection] = useState('asc');

  function handleSort(index: number): void {
    if (sortBy === index) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(index);
      setSortDirection('asc');
    }
  }

  function sort(a: Array<ReactNode | string>, b: Array<ReactNode | string>): number {
    if (a[sortBy] < b[sortBy]) {
      return sortDirection === 'asc' ? -1 : 1;
    }

    if (a[sortBy] > b[sortBy]) {
      return sortDirection === 'asc' ? 1 : -1;
    }

    return 0;
  }
  const sortedBodyChildren = props.bodyChildren.sort(sort);

  return (
    <TableStyled>
      {props.headChildren && (
        <TableHeadStyled>
          {props.headChildren.map((child, index) => (
            <TableHeadCellStyled key={index} onClick={(): void => handleSort(index)}>
              <Button
                theme='minimal'
                ariaLabel='Sort'
                iconPosition='right'
                name='sort'
                icon={sortBy === index ? sortDirection === 'asc' ? <SortAscending /> : <SortDescending /> : <FunnelSimple />}
                css={{
                  svg: {
                    opacity: sortBy === index ? 1 : 0.2,
                  },
                }}>
                {child}
              </Button>
            </TableHeadCellStyled>
          ))}
        </TableHeadStyled>
      )}
      <TableBodyStyled>
        {sortedBodyChildren.map((row, index) => (
          <TableRowStyled key={index}>
            {row.map((cell, index) => (
              <TableCellStyled key={index}>{cell}</TableCellStyled>
            ))}
          </TableRowStyled>
        ))}
      </TableBodyStyled>
    </TableStyled>
  );
}
