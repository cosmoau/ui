import { sort } from "fast-sort";
import {
  ArrowLeft,
  ArrowRight,
  FunnelSimple,
  MagnifyingGlassMinus,
  SortAscending,
  SortDescending,
} from "phosphor-react";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

import { Badge, Button, Loading, Select, Stack, Text, theme } from "../../index";
import { ITable } from "../../types";

import { TableCoreStyled, TablePaginationStyled, TableStyled } from "./Table.styles";

const pageSizes = [10, 25, 50, 100, 250];
const maxSize = 500;

export function Table(props: ITable): JSX.Element {
  const {
    headChildren,
    bodyChildren,
    css,
    sortable,
    sortDisabled,
    defaultSort,
    defaultDirection,
    rowNumbers,
    slim,
    loading,
    pagination,
    restrictLimit,
    defaultLimit,
    identifier,
    ...rest
  } = props;
  const initialLimit = restrictLimit || defaultLimit || (pagination ? pageSizes[0] : maxSize);
  const [sortBy, setSortBy] = useState(defaultSort || 0);
  const [sortDirection, setSortDirection] = useState(defaultDirection || "asc");
  const [storage, setStorage] = useLocalStorage(
    `${identifier || Math.random().toString(36).substring(7)}-table`,
    {
      limit: initialLimit,
      offset: 0,
      page: 1,
    }
  );

  function handleSortMapping(index: number): void {
    if (sortBy === index) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(index);
    }
    setStorage({
      limit: storage.limit,
      offset: 0,
      page: 1,
    });
  }

  function handlePageSelection(value: string): void {
    setStorage({
      limit: parseInt(value),
      offset: 0,
      page: 1,
    });
  }

  function handlePageChange(direction: "next" | "prev"): void {
    if (direction === "next") {
      setStorage({
        limit: storage.limit,
        offset: storage.offset + storage.limit,
        page: storage.page + 1,
      });
    } else {
      setStorage({
        limit: storage.limit,
        offset: storage.offset - storage.limit,
        page: storage.page - 1,
      });
    }
  }

  function resetPagination(): void {
    setStorage({
      limit: storage.limit,
      offset: 0,
      page: 1,
    });
  }

  const sortedBodyChildren =
    bodyChildren && sortable
      ? sortDirection === "asc"
        ? sort(bodyChildren).asc((row) => row[sortBy].value)
        : sort(bodyChildren).desc((row) => row[sortBy].value)
      : bodyChildren;

  useEffect(() => {
    if (
      sortedBodyChildren &&
      sortedBodyChildren.length &&
      storage.offset >= sortedBodyChildren.length &&
      storage.page > 1
    ) {
      resetPagination();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storage.offset, sortedBodyChildren, storage.limit, setStorage]);

  return (
    <TableStyled css={css} id={identifier}>
      <TableCoreStyled
        slim={slim || (storage.limit > 10 && sortedBodyChildren && sortedBodyChildren.length > 10)}>
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
                  !sortable || sortDisabled?.includes(index) ? (
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
              sortedBodyChildren
                .slice(storage.offset, storage.offset + storage.limit)
                .map((row, index) => (
                  <tr key={index}>
                    {rowNumbers && (
                      <td
                        style={{
                          minWidth: "0",
                          opacity: 0.6,
                          width: "1%",
                        }}>
                        {storage.offset + index + 1}
                      </td>
                    )}
                    {row.map((cell, index) => (
                      <td
                        key={index}
                        style={{
                          ...(cell.width && {
                            maxWidth: cell.width,
                            minWidth: cell.width,
                            width: cell.width,
                          }),
                        }}>
                        {cell?.label || cell?.value}
                      </td>
                    ))}
                  </tr>
                ))
            ) : (
              <tr>
                {rowNumbers && <td style={{ opacity: 0.5 }}>&nbsp;</td>}
                <td
                  colSpan={headChildren ? headChildren.length : 1}
                  style={{
                    color: theme.colors.accent.toString(),
                  }}>
                  {loading ? (
                    <Loading />
                  ) : (
                    <Badge icon={<MagnifyingGlassMinus />}>No results found</Badge>
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </TableCoreStyled>
      {pagination && sortedBodyChildren && (
        <TablePaginationStyled>
          {!restrictLimit ? (
            <Stack>
              <Select
                label="Page Size"
                options={pageSizes.map((size) => ({
                  label: size.toString(),
                  value: size.toString(),
                }))}
                trigger={
                  <Button disabled={sortedBodyChildren && sortedBodyChildren.length < 10} small>
                    {storage.limit} per page
                  </Button>
                }
                vertical="top"
                width={125}
                onSelection={(value): void => {
                  handlePageSelection(value);
                }}
              />
            </Stack>
          ) : (
            <Text accent as="small" inline="medium">
              {storage.offset + 1} -{" "}
              {storage.offset + storage.limit > sortedBodyChildren.length
                ? sortedBodyChildren.length
                : storage.offset + storage.limit}{" "}
              of {sortedBodyChildren.length}
            </Text>
          )}

          <Stack>
            {!restrictLimit && (
              <Text accent as="small" inline="medium">
                {storage.offset + 1} -{" "}
                {storage.offset + storage.limit > sortedBodyChildren.length
                  ? sortedBodyChildren.length
                  : storage.offset + storage.limit}{" "}
                of {sortedBodyChildren.length}
              </Text>
            )}
            <Button
              disabled={storage.page === 1}
              inline="small"
              small
              onClick={(): void => {
                handlePageChange("prev");
              }}>
              <ArrowLeft />
            </Button>
            <Button
              disabled={storage.offset + storage.limit >= sortedBodyChildren.length}
              small
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
