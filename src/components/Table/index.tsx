import { FunnelSimple, SortAscending, SortDescending } from "phosphor-react";
import { ReactNode, useState } from "react";

import { Button, Text } from "../../index";
import { TableProps } from "../../types";

import { TableStyled } from "./Table.styles";

export function Table(props: TableProps): JSX.Element {
  const { headChildren, bodyChildren, css, sort, sortDisabled, rowNumbers, ...rest } = props;

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
      <table {...rest}>
        {headChildren && (
          <thead>
            <tr>
              {rowNumbers && (
                <th
                  style={{
                    opacity: 0.6,
                    width: "1%",
                  }}>
                  &nbsp;
                </th>
              )}
              {headChildren.map((child, index) =>
                !sort ||
                sortDisabled === index ||
                (Array.isArray(sortDisabled) && sortDisabled.includes(index)) ? (
                  <th key={index}>{child}</th>
                ) : (
                  <th key={index} onClick={(): void => handleSort(index)}>
                    <Button
                      css={{
                        svg: {
                          opacity: sortBy === index ? 1 : 0.25,
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
                      theme={sortBy === index ? "default" : "minimal"}>
                      {child}
                    </Button>
                  </th>
                )
              )}
            </tr>
          </thead>
        )}

        <tbody>
          {bodyChildren ? (
            sortedBodyChildren.map((row, index) => (
              <tr key={index}>
                {rowNumbers && (
                  <td
                    style={{
                      opacity: 0.6,
                      width: "1%",
                    }}>
                    {index + 1}
                  </td>
                )}
                {row.map((cell, index) => (
                  <td key={index}>{cell}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headChildren?.length || 1}>
                <Text
                  accent
                  css={{
                    textAlign: "center",
                  }}>
                  No results found.
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </TableStyled>
  );
}
