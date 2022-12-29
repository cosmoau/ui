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

  function sort(a: Array<ReactNode | string>, b: Array<ReactNode | string>): number {
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
  const sortedBodyChildren = props.bodyChildren
    ? props.sort
      ? props.bodyChildren.sort(sort)
      : props.bodyChildren
    : [];

  return (
    <TableStyled css={props.css}>
      {props.headChildren && (
        <TableHeadStyled>
          <TableRowStyled>
            {props.headChildren.map((child, index) =>
              !props.sort ||
              props.sortDisabled === index ||
              (Array.isArray(props.sortDisabled) && props.sortDisabled.includes(index)) ? (
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
        {props.bodyChildren ? (
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
              colSpan={props.headChildren?.length || 1}
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
