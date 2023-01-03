import { FunnelSimple, SortAscending, SortDescending } from "phosphor-react";
import { ReactNode, useState } from "react";

import { Button } from "../../index";
import { TableProps } from "../../types";

import {
  TableBodyStyled,
  TableCellStyled,
  TableHeadCellStyled,
  TableHeadStyled,
  TableRowStyled,
  TableStyled,
} from "./Table.styles";

export default function Table(props: TableProps): JSX.Element {
  const { headChildren, bodyChildren, css, sort, sortDisabled } = props;

  const [sortBy, setSortBy] = useState(0);
  const [sortDirection, setSortDirection] = useState("asc");

  function handleSort(index: number): void {
    if (sortBy === index) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(index);
      setSortDirection("asc");
    }
  }

  function parseSort(a: Array<ReactNode | string>, b: Array<ReactNode | string>): number {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (a[sortBy] < b[sortBy]) {
      return sortDirection === "asc" ? -1 : 1;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (a[sortBy] > b[sortBy]) {
      return sortDirection === "asc" ? 1 : -1;
    }

    return 0;
  }
  const sortedBodyChildren = bodyChildren
    ? sort
      ? bodyChildren.sort(parseSort)
      : bodyChildren
    : [];

  return (
    <TableStyled css={css}>
      {headChildren && (
        <TableHeadStyled>
          <TableRowStyled>
            {headChildren.map((child, index) =>
              !sort ||
              sortDisabled === index ||
              (Array.isArray(sortDisabled) && sortDisabled.includes(index)) ? (
                <TableHeadCellStyled key={index}>{child}</TableHeadCellStyled>
              ) : (
                <TableHeadCellStyled key={index} onClick={(): void => handleSort(index)}>
                  <Button
                    ariaLabel="Sort"
                    block
                    css={{
                      svg: {
                        opacity: sortBy === index ? 1 : 0.33,
                      },
                    }}
                    icon={
                      sortBy === index ? (
                        sortDirection === "asc" ? (
                          <SortAscending />
                        ) : (
                          <SortDescending />
                        )
                      ) : (
                        <FunnelSimple />
                      )
                    }
                    iconPosition="right"
                    name="sort"
                    theme={sortBy === index ? "default" : "minimal"}>
                    {child}
                  </Button>
                </TableHeadCellStyled>
              )
            )}
          </TableRowStyled>
        </TableHeadStyled>
      )}

      <TableBodyStyled>
        {bodyChildren ? (
          sortedBodyChildren.map((row, index) => (
            <TableRowStyled key={index}>
              {row.map((cell, index) => (
                <TableCellStyled key={index}>{cell}</TableCellStyled>
              ))}
            </TableRowStyled>
          ))
        ) : (
          <TableRowStyled>
            <TableCellStyled
              colSpan={headChildren?.length || 1}
              css={{
                textAlign: "left !important",
              }}>
              No results found.
            </TableCellStyled>
          </TableRowStyled>
        )}
      </TableBodyStyled>
    </TableStyled>
  );
}
