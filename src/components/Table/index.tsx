import { FunnelSimple, SortAscending, SortDescending } from "phosphor-react";
import { useState } from "react";

import { Button, Loading, Text } from "../../index";
import { TableProps } from "../../types";

import { TableStyled } from "./Table.styles";

export function Table(props: TableProps): JSX.Element {
  const { headChildren, bodyChildren, css, sort, sortDisabled, rowNumbers, loading, ...rest } =
    props;

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

  const sortedBodyChildren = bodyChildren
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
                !sort || sortDisabled === index ? (
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
          {!loading && bodyChildren && bodyChildren.length > 0 ? (
            sortedBodyChildren.map((row, index) => (
              <tr key={index}>
                {rowNumbers && <td>{index + 1}</td>}
                {row.map((cell, index) => (
                  <td key={index}>{cell.label}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              {rowNumbers && <td>&nbsp;</td>}
              <td colSpan={headChildren ? headChildren.length : 1}>
                {loading ? <Loading /> : "No data available"}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </TableStyled>
  );
}
