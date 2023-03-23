import { FunnelSimple, SortAscending, SortDescending } from "@phosphor-icons/react";
import { useState } from "react";

import { Button, Loading, Text } from "../../index";
import { TableProps } from "../../types";

import { TableStyled } from "./Table.styles";

export function Table(props: TableProps): JSX.Element {
  const { headChildren, bodyChildren, css, sort, sortDisabled, defaultSort, defaultDirection, rowNumbers, loading, ...rest } = props;

  const [sortBy, setSortBy] = useState(defaultSort || 0);
  const [sortDirection, setSortDirection] = useState(defaultDirection || "asc");

  function handleSort(index: number): void {
    if (sortBy === index) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(index);
    }
  }

  const sortedBodyChildren =
    sort && bodyChildren
      ? bodyChildren.sort((a, b) => {
          const aValue = a[sortBy].value;
          const bValue = b[sortBy].value;

          if (aValue < bValue) {
            return sortDirection === "asc" ? -1 : 1;
          }
          if (aValue > bValue) {
            return sortDirection === "asc" ? 1 : -1;
          }
          return 0;
        })
      : bodyChildren;

  return (
    <TableStyled css={css}>
      <table {...rest}>
        {headChildren && (
          <thead>
            <tr>
              {rowNumbers && (
                <th
                  style={{
                    minWidth: "0",
                    opacity: 0.6,
                    width: "1%",
                  }}>
                  &nbsp;
                </th>
              )}
              {headChildren.map((child, index) =>
                !sort || sortDisabled?.includes(index) ? (
                  <th key={index}>
                    <Text as="span">{child}</Text>
                  </th>
                ) : (
                  <th key={index}>
                    <Text as="span" inline="small">
                      {child}
                    </Text>

                    <Button
                      css={{
                        "&:hover": {
                          opacity: 1,
                        },
                        opacity: sortBy === index ? 1 : 0.3,
                      }}
                      small
                      theme="minimal"
                      onClick={(): void => handleSort(index)}>
                      {sortBy === index ? sortDirection === "asc" ? <SortAscending /> : <SortDescending /> : <FunnelSimple />}
                    </Button>
                  </th>
                )
              )}
            </tr>
          </thead>
        )}

        <tbody>
          {!loading && sortedBodyChildren && sortedBodyChildren.length > 0 ? (
            sortedBodyChildren.map((row, index) => (
              <tr key={index}>
                {rowNumbers && (
                  <td>
                    <Text as="span" css={{ opacity: 0.6 }}>
                      {index + 1}
                    </Text>
                  </td>
                )}
                {row.map((cell, index) => (
                  <td
                    key={index}
                    style={{
                      ...(cell.width && { width: cell.width }),
                    }}>
                    {cell.label || cell.value}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              {rowNumbers && <td style={{ opacity: 0.5 }}>&nbsp;</td>}
              <td colSpan={headChildren ? headChildren.length : 1}>{loading ? <Loading /> : "No data available"}</td>
            </tr>
          )}
        </tbody>
      </table>
    </TableStyled>
  );
}
