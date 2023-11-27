import { sort } from "fast-sort";
import { useEffect, useState } from "react";

import { Icons } from "../../icons";
import {
  Badge,
  Button,
  Loading,
  Select,
  Stack,
  Text,
  fadeIn,
  theme,
  useBreakpoints,
  useLocalStorage,
} from "../../index";
import { ITable } from "../../types";

import {
  TableCoreStyled,
  TableFiltersStyled,
  TableHeaderCoreStyled,
  TableHeaderStyled,
  TablePaginationStyled,
  TableStyled,
} from "./styles";

const pageSizes = [10, 25, 50, 100];
const maxSize = 500;

export default function Table({
  header,
  filters,
  headChildren,
  bodyChildren,
  css,
  collapse,
  collapseDisabled,
  sortable,
  sortDisabled,
  defaultSort,
  defaultDirection,
  rowNumbers,
  slim,
  loading,
  pagination,
  restrictLimit,
  kbd,
  defaultLimit,
  identifier,
  ...rest
}: ITable): JSX.Element {
  const initialKey = `${identifier || "unknown"}-table`;
  const initialLimit = restrictLimit || defaultLimit || (pagination ? pageSizes[0] : maxSize);
  const { breakpoint } = useBreakpoints();
  const [sortColumn, sortSortColumn] = useState(defaultSort || 0);
  const [sortDirection, setSortDirection] = useState(defaultDirection || "asc");
  const [storage, setStorage] = useLocalStorage(initialKey, {
    filtering: false,
    limit: initialLimit,
    offset: 0,
    page: 1,
  });

  const parsedBodyChildren =
    bodyChildren && collapse && collapseDisabled && collapseDisabled.length > 0
      ? bodyChildren.map((row) => {
          const newRow = row.filter((_column, index) => !collapseDisabled.includes(index));

          return newRow;
        })
      : bodyChildren;

  const sortedBodyChildren =
    parsedBodyChildren && sortable
      ? sortDirection === "asc"
        ? sort(parsedBodyChildren).asc((row) => row[sortColumn].value)
        : sort(parsedBodyChildren).desc((row) => row[sortColumn].value)
      : parsedBodyChildren;

  function scrollToTop(): void {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }

  function handleSortMapping(index: number): void {
    if (sortColumn === index) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      sortSortColumn(index);
      setSortDirection("asc");
    }
    setStorage({
      ...storage,
      limit: storage.limit,
      offset: 0,
      page: 1,
    });
  }

  function handlePageSelection(value: string): void {
    setStorage({
      ...storage,
      limit: parseInt(value),
      offset: 0,
      page: 1,
    });
    scrollToTop();
  }

  function handlePageChange(direction: "next" | "prev"): void {
    const offset = direction === "next" ? storage.offset + storage.limit : storage.offset - storage.limit;
    const page = direction === "next" ? storage.page + 1 : storage.page - 1;

    setStorage({
      ...storage,
      limit: storage.limit,
      offset: offset,
      page: page,
    });
  }

  function resetPagination(): void {
    setStorage({
      ...storage,
      limit: storage.limit,
      offset: 0,
      page: 1,
    });
  }

  function endPagination(): void {
    setStorage({
      ...storage,
      limit: storage.limit,
      offset: sortedBodyChildren ? sortedBodyChildren.length - storage.limit : 0,
      page: Math.ceil(sortedBodyChildren ? sortedBodyChildren.length / storage.limit : 0),
    });
  }

  useEffect(() => {
    if (
      sortedBodyChildren &&
      sortedBodyChildren.length &&
      storage.offset >= sortedBodyChildren.length &&
      storage.page > 1
    ) {
      resetPagination();
    }
  }, [storage.offset, sortedBodyChildren, storage.limit, setStorage]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (pagination && kbd) {
        if ((event.ctrlKey || event.metaKey) && event.key === "ArrowLeft") {
          event.preventDefault();
          handlePageChange("prev");
        } else if ((event.ctrlKey || event.metaKey) && event.key === "ArrowRight") {
          event.preventDefault();
          handlePageChange("next");
        } else if ((event.ctrlKey || event.metaKey) && event.key === "ArrowUp") {
          event.preventDefault();
          resetPagination();
        } else if ((event.ctrlKey || event.metaKey) && event.key === "ArrowDown") {
          event.preventDefault();
          endPagination();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [pagination, kbd, handlePageChange, resetPagination, endPagination]);

  return (
    <TableStyled css={css} id={identifier}>
      {header && (
        <TableHeaderStyled>
          <TableHeaderCoreStyled>
            <Stack>
              <Text as="h4" bottom="none" inline={header.count ? "small" : undefined}>
                {header.title}
              </Text>
              {header.count && (
                <Badge css={{ hiddenInline: "phone" }} small theme="blue">
                  {header.count}
                </Badge>
              )}
            </Stack>
            <Stack>
              {filters && (
                <Button
                  icon={breakpoint !== "phone" ? <Icons.MagnifyingGlass /> : undefined}
                  inline="small"
                  small
                  onClick={(): void => setStorage({ ...storage, filtering: !storage.filtering })}>
                  {breakpoint === "phone" ? <Icons.MagnifyingGlass /> : storage.filtering ? "Close" : "Filter"}
                </Button>
              )}
              {header.options && header.options}
            </Stack>
          </TableHeaderCoreStyled>
          {filters && storage?.filtering && <TableFiltersStyled>{filters}</TableFiltersStyled>}
        </TableHeaderStyled>
      )}

      <TableCoreStyled
        collapse={collapse}
        header={header !== undefined}
        slim={slim || (storage.limit > 10 && sortedBodyChildren && sortedBodyChildren.length > 10)}>
        <table {...rest}>
          {headChildren && (
            <thead>
              <tr>
                {rowNumbers && (
                  <th
                    style={{
                      minWidth: "0",
                      opacity: 0.7,
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
                          opacity: sortColumn === index ? 0.8 : 0.3,
                        }}
                        small
                        theme={sortColumn !== index ? "minimal" : undefined}
                        onClick={(): void => handleSortMapping(index)}>
                        {sortColumn === index ? (
                          sortDirection === "asc" ? (
                            <Icons.SortAscending />
                          ) : (
                            <Icons.SortDescending />
                          )
                        ) : (
                          <Icons.Database />
                        )}
                      </Button>
                    </th>
                  ),
                )}
              </tr>
            </thead>
          )}

          <tbody>
            {!loading && sortedBodyChildren && sortedBodyChildren.length > 0 ? (
              sortedBodyChildren.slice(storage.offset, storage.offset + storage.limit).map((row, index) => (
                <tr key={index}>
                  {rowNumbers && !collapse && (
                    <td
                      style={{
                        minWidth: "0",
                        opacity: 0.7,
                        width: "1%",
                      }}>
                      {storage.offset + index + 1}
                    </td>
                  )}
                  {row.map((cell, index) => (
                    <td
                      key={index}
                      style={{
                        ...(cell.width &&
                          !collapse && {
                            maxWidth: cell.width,
                            minWidth: cell.width,
                            width: cell.width,
                          }),
                      }}>
                      {collapse && index >= 1 && (
                        <Stack bottom="smaller">
                          <Text as="label">{headChildren && headChildren[index]}</Text>
                        </Stack>
                      )}
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
                  {loading ? <Loading /> : <Badge icon={<Icons.MagnifyingGlassMinus />}>No results found</Badge>}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </TableCoreStyled>
      {pagination && sortedBodyChildren && (
        <TablePaginationStyled>
          <Stack>
            {!restrictLimit && (
              <Select
                disabled={sortedBodyChildren && sortedBodyChildren.length < 10}
                label="Page Size"
                options={pageSizes.map((size) => ({
                  label: size.toString(),
                  value: size.toString(),
                }))}
                selection={[storage?.limit?.toString() || pageSizes[0].toString()]}
                trigger={
                  <Button
                    disabled={sortedBodyChildren && sortedBodyChildren?.length < 10}
                    icon={<Icons.TableRows />}
                    inline="small"
                    small>
                    {storage.limit}
                    <Text as="span" css={{ hiddenInline: "tablet" }}>
                      &nbsp;rows
                    </Text>
                  </Button>
                }
                vertical="top"
                width={125}
                onSelection={(value: string): void => {
                  handlePageSelection(value);
                }}
              />
            )}
            <Text
              accent
              as="small"
              css={{
                "&:hover": {
                  svg: {
                    transform: "scale(1.2)",
                  },
                },
                cursor: "pointer",
                svg: {
                  transition: "$default",
                },
              }}
              inline="small"
              onClick={(): void => {
                scrollToTop();
              }}>
              <Icons.ArrowUp style={{ animation: `${fadeIn} 0.3s ease-in-out`, marginRight: "0.5rem" }} />
              <Text as="span" css={{ hiddenInline: "tablet" }}>
                {storage.offset + 1} -{" "}
                {storage.offset + storage.limit > sortedBodyChildren.length
                  ? sortedBodyChildren.length
                  : storage.offset + storage.limit}{" "}
                of {sortedBodyChildren.length}
              </Text>
              <Text as="span" css={{ visibleInline: "tablet" }}>
                {`${storage.page} / ${Math.ceil(sortedBodyChildren.length / storage.limit)}`}
              </Text>
            </Text>
          </Stack>
          <Stack>
            <Button
              disabled={storage.page === 1}
              inline="small"
              small
              onClick={(): void => {
                handlePageChange("prev");
              }}>
              <Icons.ArrowLeft />
            </Button>
            <Button
              disabled={storage.offset + storage.limit >= sortedBodyChildren.length}
              small
              onClick={(): void => {
                handlePageChange("next");
              }}>
              <Icons.ArrowRight />
            </Button>
          </Stack>
        </TablePaginationStyled>
      )}
    </TableStyled>
  );
}
