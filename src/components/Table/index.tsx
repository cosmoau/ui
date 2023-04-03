import { sort } from "fast-sort";
import { ArrowLeft, ArrowRight, FunnelSimple, SortAscending, SortDescending } from "phosphor-react";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";

import { Button, Loading, Select, Stack, Text } from "../../index";
import { TableProps } from "../../types";

import { TableCoreStyled, TablePaginationStyled, TableStyled } from "./Table.styles";

const pageSizes = [10, 25, 50, 100, 200];

export function Table(props: TableProps): JSX.Element {
  const {
    headChildren,
    bodyChildren,
    css,
    sortable,
    sortDisabled,
    defaultSort,
    defaultDirection,
    rowNumbers,
    loading,
    pagination,
    identifier,
    ...rest
  } = props;

  const [sortBy, setSortBy] = useState(defaultSort || 0);
  const [sortDirection, setSortDirection] = useState(defaultDirection || "asc");
  const [page, setPage] = useLocalStorage(
    `${identifier || Math.random().toString(36).substring(7)}-pages`,
    1
  );
  const [offset, setOffset] = useLocalStorage(
    `${identifier || Math.random().toString(36).substring(7)}-offset`,
    0
  );

  const [limit, setLimit] = useLocalStorage(
    `${identifier || Math.random().toString(36).substring(7)}-limit`,
    25
  );

  function handleSortMapping(index: number): void {
    if (sortBy === index) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(index);
    }
  }

  function handlePageSelection(value: string): void {
    setPage(1);
    setOffset(0);
    setLimit(parseInt(value));
  }

  function handlePageChange(direction: "next" | "prev"): void {
    if (direction === "next") {
      setPage(page + 1);
      setOffset(offset + limit);
    } else {
      setPage(page - 1);
      setOffset(offset - limit);
    }
  }

  const sortedBodyChildren =
    bodyChildren && sortable
      ? sortDirection === "asc"
        ? sort(bodyChildren).asc((row) => row[sortBy].value)
        : sort(bodyChildren).desc((row) => row[sortBy].value)
      : bodyChildren;

  return (
    <TableStyled css={css}>
      <TableCoreStyled>
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
                        theme={sortBy !== index ? "minimal" : undefined}
                        onClick={(): void => handleSortMapping(index)}>
                        {sortBy === index ? (
                          sortDirection === "asc" ? (
                            <SortAscending />
                          ) : (
                            <SortDescending />
                          )
                        ) : (
                          <FunnelSimple />
                        )}
                      </Button>
                    </th>
                  )
                )}
              </tr>
            </thead>
          )}

          <tbody>
            {!loading && sortedBodyChildren && sortedBodyChildren.length > 0 ? (
              sortedBodyChildren.slice(offset, offset + limit).map((row, index) => (
                <tr key={index}>
                  {rowNumbers && (
                    <td
                      style={{
                        minWidth: "0",
                        opacity: 0.6,
                        width: "1%",
                      }}>
                      {offset + index + 1}
                    </td>
                  )}
                  {row.map((cell, index) => (
                    <td key={index}>{cell?.label || cell?.value}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                {rowNumbers && <td style={{ opacity: 0.5 }}>&nbsp;</td>}
                <td colSpan={headChildren ? headChildren.length : 1}>
                  {loading ? <Loading /> : "No data available"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </TableCoreStyled>
      {pagination && sortedBodyChildren && (
        <TablePaginationStyled>
          <Stack>
            <Select
              label="Page Size"
              options={pageSizes.map((size) => ({
                label: size.toString(),
                value: size.toString(),
              }))}
              trigger={
                <Button disabled={sortedBodyChildren?.length < limit}>
                  <Text>{limit} per page</Text>
                </Button>
              }
              vertical="top"
              width={125}
              onSelection={(value): void => {
                handlePageSelection(value);
              }}
            />
          </Stack>
          <Stack>
            <Text accent as="small" inline="medium">
              {offset + 1} -{" "}
              {offset + limit > sortedBodyChildren.length
                ? sortedBodyChildren.length
                : offset + limit}{" "}
              of {sortedBodyChildren.length}
            </Text>
            <Button
              disabled={page === 1}
              inline="small"
              onClick={(): void => {
                handlePageChange("prev");
              }}>
              <ArrowLeft />
            </Button>
            <Button
              disabled={offset + limit >= sortedBodyChildren.length}
              onClick={(): void => {
                handlePageChange("next");
              }}>
              <ArrowRight />
            </Button>
          </Stack>
        </TablePaginationStyled>
      )}
    </TableStyled>
  );
}
