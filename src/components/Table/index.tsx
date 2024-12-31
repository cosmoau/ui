import { useEffect, type JSX } from "react";

import { Icons } from "../../icons";
import {
  Button,
  Loading,
  Select,
  Stack,
  Text,
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
  TableLengthStyled,
  TablePaginationStyled,
  TableStyled,
} from "./styles";

export default function NewTable({
  header,
  filters,
  thead,
  tbody,
  css,
  collapse,
  collapseDisabled,
  collapseSortable,
  sortable,
  sortDisabled,
  defaultSort,
  defaultDirection,
  rowNumbers,
  loading,
  error,
  pagination,
  restrictLimit,
  kbd,
  defaultLimit,
  identifier = "new",
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

  const columnWidths = useTableColumns(identifier, tbody);

  const {
    endPagination,
    scrollToTop,
    handlePageChange,
    handlePageNavigation,
    handleRowsPerPageChange,
    resetPagination,
  } = useTablePagination(tbody, storage, setStorage, initialKey);

  useTableKeyboard(pagination, kbd, handlePageChange, resetPagination, endPagination);

  const { handleSortMapping, sortColumn, sortDirection, sortedTBody } = useTableSort({
    defaultDirection,
    defaultSort,
    setStorage,
    storage,
    tbody,
  });

  const { data } = prepareTable(sortable ? sortedTBody : tbody, collapse, collapseDisabled);

  useEffect(() => {
    checkTableIdentifier(identifier);
  }, [identifier]);

  return (
    <TableStyled css={css} id={initialKey}>
      {header && (
        <TableHeaderStyled full={header?.full}>
          <TableHeaderCoreStyled>
            <Text as={header?.full ? "h3" : "h4"} bottom="none">
              {header.title}
            </Text>

            {(header.options || filters) && (
              <TableHeaderOptionsStyled>
                {collapseSortable && collapse && thead && (
                  <Select
                    initial={sortColumn?.toString() || "0"}
                    options={thead
                      .filter((_, index) => !collapseDisabled?.includes(index))
                      .map((label, index) => ({
                        icon:
                          sortColumn === index ? (
                            sortDirection === "asc" ? (
                              <Icons.SortAscending />
                            ) : (
                              <Icons.SortDescending />
                            )
                          ) : (
                            <Icons.Circle />
                          ),
                        iconPosition: "right",
                        label,
                        value: index.toString(),
                      }))}
                    trigger={
                      <Button>
                        <Icons.SortAscending />
                      </Button>
                    }
                    onSelection={(value: string): void => {
                      handleSortMapping(parseInt(value));
                    }}
                  />
                )}
                {header.options && <Stack>{header.options}</Stack>}
                {filters && (
                  <Button
                    icon={
                      breakpoint !== "phone" ? (
                        storage.filtering ? (
                          <Icons.ArrowsInSimple weight="regular" />
                        ) : (
                          <Icons.MagnifyingGlass weight="regular" />
                        )
                      ) : undefined
                    }
                    onClick={(): void => setStorage({ ...storage, filtering: !storage.filtering })}>
                    {breakpoint === "phone" ? (
                      storage.filtering ? (
                        <Icons.ArrowsInSimple weight="regular" />
                      ) : (
                        <Icons.MagnifyingGlass weight="regular" />
                      )
                    ) : (
                      "Search"
                    )}
                  </Button>
                )}
              </TableHeaderOptionsStyled>
            )}
          </TableHeaderCoreStyled>
          {filters && storage?.filtering && <TableFiltersStyled>{filters}</TableFiltersStyled>}
        </TableHeaderStyled>
      )}

      {collapseSortable && collapse && thead && !header && (
        <Stack bottom="medium">
          <Select
            initial={sortColumn?.toString() || "0"}
            options={thead
              .filter((_, index) => !collapseDisabled?.includes(index))
              .map((label, index) => ({
                icon:
                  sortColumn === index ? (
                    sortDirection === "asc" ? (
                      <Icons.SortAscending />
                    ) : (
                      <Icons.SortDescending />
                    )
                  ) : (
                    <Icons.Circle />
                  ),
                iconPosition: "right",
                label,
                value: index.toString(),
              }))}
            trigger={
              <Button block icon={<Icons.SortAscending />} theme="fill">
                Sort
              </Button>
            }
            triggerCSS={{ width: "100%" }}
            wrapperCSS={{ width: "100%" }}
            onSelection={(value: string): void => {
              handleSortMapping(parseInt(value));
            }}
          />
        </Stack>
      )}

      <TableCoreStyled
        collapse={collapse}
        header={header && !header.full ? true : false}
        pagination={pagination}>
        <table {...rest}>
          {thead && (
            <thead id={`${identifier}-head`}>
              <tr>
                {rowNumbers && <th>&nbsp;</th>}

                {thead.map((child, index) =>
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
                          opacity: sortColumn === index ? 0.7 : 0.35,
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
                          <Icons.Circle />
                        )}
                      </Button>
                    </th>
                  ),
                )}
              </tr>
            </thead>
          )}

          <tbody id={`${identifier}-body`}>
            {!error && !loading && data && data.length > 0 ? (
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
                        ...(!collapse && {
                          ...(columnWidths && columnWidths[index]
                            ? {
                                maxWidth: columnWidths[index],
                                minWidth: columnWidths[index],
                                width: columnWidths[index],
                              }
                            : {
                                width: cell?.width || "auto",
                              }),
                        }),
                      }}>
                      {collapse && index >= 1 && (
                        <Stack bottom="smaller">
                          <Text as="label">{thead && thead[index]}</Text>
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
                  colSpan={thead ? thead.length : 1}
                  style={{
                    color: theme.colors.accent.toString(),
                  }}>
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Text>
                      <Text as="span" highlight="red" inline="small">
                        <Icons.Warning />
                        &nbsp;Error
                      </Text>
                      {error || "Something went wrong"}
                    </Text>
                  ) : (
                    <Text accent>No results</Text>
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </TableCoreStyled>
      {data && data.length ? (
        <TableLengthStyled>
          <Text accent as="small">
            {data.length} total (showing {storage.offset + 1} -{" "}
            {storage.offset + storage.limit > data.length
              ? data.length
              : storage.offset + storage.limit}
            )
          </Text>
        </TableLengthStyled>
      ) : null}
      {pagination && data && (
        <TablePaginationStyled>
          <Stack>
            {!restrictLimit && (
              <Select
                disabled={data && data.length < 10}
                initial={storage?.limit?.toString() || TABLE_PAGES[0].toString()}
                label="Rows per page"
                options={TABLE_PAGES.map((size) => ({
                  label: size.toString(),
                  value: size.toString(),
                }))}
                trigger={
                  <Button
                    disabled={data && data?.length < 10}
                    icon={<Icons.Rows />}
                    inline="small"
                    small>
                    {storage.limit}
                  </Button>
                }
                vertical="top"
                width={125}
                onSelection={(value: string): void => {
                  scrollToTop();
                  handleRowsPerPageChange(value);
                }}
              />
            )}
            <Select
              key={storage.page}
              initial={storage.page.toString()}
              label="Jump to page"
              options={Array.from({ length: Math.ceil(data.length / storage.limit) }, (_, i) => ({
                label: `Page ${i + 1}`,
                value: (i + 1).toString(),
              }))}
              trigger={
                <Button
                  disabled={data.length <= storage.limit}
                  icon={<Icons.ListNumbers />}
                  inline="medium"
                  small>
                  {storage.page}
                </Button>
              }
              onSelection={(value: string): void => {
                scrollToTop();
                handlePageNavigation(parseInt(value));
              }}
            />
            <Text
              accent
              as="small"
              css={{
                hiddenInline: "phone",
              }}
              inline="auto">
              {data.length} total (showing {storage.offset + 1} -{" "}
              {storage.offset + storage.limit > data.length
                ? data.length
                : storage.offset + storage.limit}
              )
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
              <Icons.ArrowLeft weight="regular" />
            </Button>
            <Button
              disabled={storage.offset + storage.limit >= data.length}
              small
              onClick={(): void => {
                handlePageChange("next");
              }}>
              <Icons.ArrowRight weight="regular" />
            </Button>
          </Stack>
        </TablePaginationStyled>
      )}
    </TableStyled>
  );
}
