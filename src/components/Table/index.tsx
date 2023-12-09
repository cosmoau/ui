import { useEffect } from "react";

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
  IStorage,
  MAX_PAGES,
  TABLE_PAGES,
  checkTableIdentifier,
  prepareTable,
  useTableColumns,
  useTableKeyboard,
  useTablePagination,
  useTableSort,
} from "./hooks";
import {
  TableCoreStyled,
  TableFiltersStyled,
  TableHeaderCoreStyled,
  TableHeaderOptionsStyled,
  TableHeaderStyled,
  TableHeaderTitleStyled,
  TablePaginationStyled,
  TableStyled,
} from "./styles";

export default function NewTable({
  header,
  filters,
  rows,
  columns,
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
  const { breakpoint } = useBreakpoints();

  const initialKey = `${identifier}-table`;
  const initialLimit = restrictLimit || defaultLimit || (pagination ? TABLE_PAGES[0] : MAX_PAGES);

  const [storage, setStorage] = useLocalStorage<IStorage>(initialKey, {
    filtering: false,
    limit: initialLimit,
    offset: 0,
    page: 1,
  });

  const columnWidths = useTableColumns(identifier, columns);

  const { endPagination, scrollToTop, handlePageChange, handlePageSelection, resetPagination } = useTablePagination(
    columns,
    storage,
    setStorage,
  );

  useTableKeyboard(pagination, kbd, handlePageChange, resetPagination, endPagination);

  const { handleSortMapping, sortColumn, sortDirection, sortedcolumns } = useTableSort({
    columns,
    defaultDirection,
    defaultSort,
    setStorage,
    storage,
  });

  const { data } = prepareTable(sortable ? sortedcolumns : columns, collapse, collapseDisabled);

  useEffect(() => {
    checkTableIdentifier(identifier);
  }, [identifier]);

  return (
    <TableStyled css={css} id={identifier}>
      {header && (
        <TableHeaderStyled>
          <TableHeaderCoreStyled>
            <TableHeaderTitleStyled>
              <Text as="h4" bottom="none" inline={header.count ? "small" : undefined}>
                {header.title}
              </Text>
              {header.count && (
                <Text accent as="small">
                  {header.count > 10000
                    ? "10,000+"
                    : header.count > 5000
                      ? "5,000+"
                      : header.count > 1000
                        ? "1,000+"
                        : header.count}
                  &nbsp;{header.count === 1 ? "row" : "rows"}
                </Text>
              )}
            </TableHeaderTitleStyled>
            <TableHeaderOptionsStyled>
              {header.options && <Stack>{header.options}</Stack>}
              {filters && (
                <Button
                  icon={
                    breakpoint !== "phone" ? (
                      storage.filtering ? (
                        <Icons.ArrowsInSimple />
                      ) : (
                        <Icons.MagnifyingGlass />
                      )
                    ) : undefined
                  }
                  onClick={(): void => setStorage({ ...storage, filtering: !storage.filtering })}>
                  {breakpoint === "phone" ? (
                    storage.filtering ? (
                      <Icons.ArrowsInSimple />
                    ) : (
                      <Icons.MagnifyingGlass />
                    )
                  ) : (
                    "Search"
                  )}
                </Button>
              )}
            </TableHeaderOptionsStyled>
          </TableHeaderCoreStyled>
          {filters && storage?.filtering && <TableFiltersStyled>{filters}</TableFiltersStyled>}
        </TableHeaderStyled>
      )}

      <TableCoreStyled
        collapse={collapse}
        header={header !== undefined}
        pagination={pagination}
        slim={slim || (storage.limit > 10 && data && data.length > 10)}>
        <table {...rest} id={`${identifier}-table`}>
          {rows && (
            <thead id={`${identifier}-head`}>
              <tr>
                {rowNumbers && <th>&nbsp;</th>}

                {rows.map((child, index) =>
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

          <tbody id={`${identifier}-body`}>
            {!loading && data && data.length > 0 ? (
              data.slice(storage.offset, storage.offset + storage.limit).map((row, index) => (
                <tr key={index} id={`${identifier}-row-${index + 1}`}>
                  {rowNumbers && !collapse && (
                    <td
                      id={`${identifier}-cell-0`}
                      style={{
                        maxWidth: "1%",
                      }}>
                      {storage.offset + index + 1}
                    </td>
                  )}
                  {row.map((cell, index) => (
                    <td
                      key={index}
                      style={{
                        ...((cell.width || columnWidths[index]) &&
                          !collapse && {
                            width: columnWidths[index] || cell?.width || "auto",
                          }),
                      }}>
                      {collapse && index >= 1 && (
                        <Stack bottom="smaller">
                          <Text as="label">{rows && rows[index]}</Text>
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
                  colSpan={rows ? rows.length : 1}
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
      {pagination && data && (
        <TablePaginationStyled>
          <code>{JSON.stringify(columnWidths, null, 2)}</code>
          <Stack>
            {!restrictLimit && (
              <Select
                disabled={data && data.length < 10}
                label="Page Size"
                options={TABLE_PAGES.map((size) => ({
                  label: size.toString(),
                  value: size.toString(),
                }))}
                selection={[storage?.limit?.toString() || TABLE_PAGES[0].toString()]}
                trigger={
                  <Button disabled={data && data?.length < 10} icon={<Icons.TableRows />} inline="small" small>
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
                {storage.offset + storage.limit > data.length ? data.length : storage.offset + storage.limit} of{" "}
                {data.length}
              </Text>
              <Text as="span" css={{ visibleInline: "tablet" }}>
                {`${storage.page} / ${Math.ceil(data.length / storage.limit)}`}
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
              disabled={storage.offset + storage.limit >= data.length}
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
