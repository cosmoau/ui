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

  function parseSort(a: Array<ReactNode>, b: Array<ReactNode>): number {
    const aChild = a[sortBy];
    const bChild = b[sortBy];

    if (typeof aChild === "string" && typeof bChild === "string") {
      if (sortDirection === "asc") {
        return aChild.localeCompare(bChild);
      } else {
        return bChild.localeCompare(aChild);
      }
    } else if (typeof aChild === "number" && typeof bChild === "number") {
      if (sortDirection === "asc") {
        return aChild - bChild;
      } else {
        return bChild - aChild;
      }
    } else {
      return 0;
    }
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
                (Array.isArray(sortDisabled) && sortDisabled.includes(index)) ||
                (bodyChildren &&
                  bodyChildren.some(
                    (row) => typeof row[index] !== "string" && typeof row[index] !== "number"
                  )) ? (
                  <th key={index}>
                    <Text as="span">{child}</Text>
                  </th>
                ) : (
                  <th key={index}>
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
                      theme={sortBy === index ? "default" : "minimal"}
                      onClick={(): void => handleSort(index)}>
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
                      opacity: 0.5,
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
