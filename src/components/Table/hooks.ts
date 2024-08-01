import { sort } from "fast-sort";
import { useRef, useState, useEffect, useMemo } from "react";

import { ITable } from "../../types";

export const TABLE_PAGES = [5, 10, 25, 50, 100];
export const MAX_PAGES = 500;

export interface IStorage {
  filtering: boolean;
  limit: number;
  offset: number;
  page: number;
}

export type ISetStorage = (value: IStorage) => void;

export function useTableColumns(identifier: string, tbody: ITable["tbody"]): string[] {
  const ref = useRef(true);
  const [columnWidths, setColumnWidths] = useState<number[]>([]);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;

      return;
    }

    if (columnWidths.length === 0) {
      requestAnimationFrame(() => {
        const firstRow = document.getElementById(`${identifier}-row-1`);

        if (firstRow) {
          const widths: number[] = [];

          firstRow.querySelectorAll("td").forEach((cell) => {
            if (cell instanceof HTMLElement) {
              const cellWidth = Number((cell.offsetWidth / firstRow.offsetWidth) * 100).toFixed(2);

              widths.push(Number(cellWidth));
            }
          });

          const totalWidth = widths.reduce((a, b) => a + b, 0);

          if (totalWidth !== 100) {
            const lastWidth = widths.pop() || 0;
            const newLastWidth = Number(lastWidth - (totalWidth - 100)).toFixed(3);

            widths.push(Number(newLastWidth));
          }

          setColumnWidths(widths);
        }
      });
    }
  }, [tbody]);

  return useMemo(() => columnWidths.map((width) => `${width}%`), [columnWidths]);
}

export function useTableKeyboard(
  pagination: ITable["pagination"],
  kbd: ITable["kbd"],
  handlePageChange: (direction: "next" | "prev") => void,
  resetPagination: () => void,
  endPagination: () => void,
): void {
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

    return (): void => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [pagination, kbd, handlePageChange, resetPagination, endPagination]);
}

export function useTablePagination(
  tbody: ITable["tbody"],
  storage: IStorage,
  setStorage: ISetStorage,
  identifier: string,
): {
  endPagination: () => void;
  handlePageChange: (direction: "next" | "prev") => void;
  handlePageNavigation: (page: number) => void;
  handleRowsPerPageChange: (value: string) => void;
  resetPagination: () => void;
  scrollToTop: () => void;
} {
  function scrollToTop(): void {
    const element = document.getElementById(`${identifier}`);

    if (element) {
      try {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn("Scroll failed:", error);
      }
    }
  }

  const handleRowsPerPageChange = (value: string): void => {
    const limit = parseInt(value, 10);

    setStorage({
      ...storage,
      limit: limit,
      offset: 0,
      page: 1,
    });
    scrollToTop();
  };

  const handlePageNavigation = (page: number): void => {
    const offset = (page - 1) * storage.limit;

    setStorage({
      ...storage,
      limit: storage.limit,
      offset: offset,
      page: page,
    });
    scrollToTop();
  };

  function handlePageChange(direction: "next" | "prev"): void {
    const totalPages = Math.ceil(tbody ? tbody.length / storage.limit : 0);
    const newOffset =
      direction === "next" ? storage.offset + storage.limit : storage.offset - storage.limit;
    const newPage = direction === "next" ? storage.page + 1 : storage.page - 1;

    if (
      (direction === "prev" && storage.page === 1) ||
      (direction === "next" && storage.page === totalPages)
    ) {
      return;
    }

    if (newOffset !== storage.offset || newPage !== storage.page) {
      setStorage({
        ...storage,
        limit: storage.limit,
        offset: newOffset,
        page: newPage,
      });
      scrollToTop();
    }
  }

  const resetPagination = (): void => {
    setStorage({
      ...storage,
      limit: storage.limit,
      offset: 0,
      page: 1,
    });
  };

  const endPagination = (): void => {
    setStorage({
      ...storage,
      limit: storage.limit,
      offset: tbody ? tbody.length - storage.limit : 0,
      page: Math.ceil(tbody ? tbody.length / storage.limit : 0),
    });
  };

  useEffect(() => {
    resetPagination();
  }, [tbody]);

  useEffect(() => {
    if (tbody && tbody.length && storage.offset >= tbody.length && storage.page > 1) {
      resetPagination();
    }
  }, [storage.offset, tbody, storage.limit, setStorage]);

  return {
    endPagination,
    handlePageChange,
    handlePageNavigation,
    handleRowsPerPageChange,
    resetPagination,
    scrollToTop,
  };
}

export function useTableSort({
  defaultSort = 0,
  defaultDirection = "asc",
  storage,
  setStorage,
  tbody,
}: {
  defaultDirection?: "asc" | "desc";
  defaultSort?: number;
  setStorage: ISetStorage;
  storage: IStorage;
  tbody: ITable["tbody"];
}): {
  handleSortMapping: (index: number) => void;
  resetSort: () => void;
  sortColumn: number;
  sortDirection: "asc" | "desc";
  sortedTBody: ITable["tbody"];
} {
  const [sortColumn, setSortColumn] = useState(defaultSort);
  const [sortDirection, setSortDirection] = useState(defaultDirection);

  function resetSort(): void {
    setSortColumn(defaultSort);
    setSortDirection(defaultDirection);
  }

  function handleSortMapping(index: number): void {
    if (sortColumn === index) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(index);
      setSortDirection("asc");
    }
    setStorage({
      ...storage,
      limit: storage.limit,
      offset: 0,
      page: 1,
    });
  }

  const sortedTBody = useMemo(() => {
    if (!tbody) return tbody;

    return sortDirection === "asc"
      ? sort(tbody).asc((row) => row[sortColumn].value)
      : sort(tbody).desc((row) => row[sortColumn].value);
  }, [tbody, sortColumn, sortDirection]);

  return {
    handleSortMapping,
    resetSort,
    sortColumn,
    sortDirection,
    sortedTBody,
  };
}

export function checkTableIdentifier(identifier: string): void {
  const tableElements = Array.from(document.querySelectorAll("table"));

  const duplicates = tableElements.filter((tableElement) => {
    return tableElement.id === `${identifier}-table`;
  });

  if (duplicates.length > 1) {
    // eslint-disable-next-line no-console
    console.error(
      `Table identifier "${identifier}" already exists, ${duplicates.length} duplicates found.`,
    );
  }
}

export function prepareTable(
  tbody: ITable["tbody"],
  collapse?: boolean,
  collapseDisabled?: number[],
): {
  data: ITable["tbody"];
} {
  if (!tbody) {
    return {
      data: [],
    };
  }

  if (!collapse || !collapseDisabled || collapseDisabled.length === 0) {
    return {
      data: tbody,
    };
  }

  const data = tbody.map((row) => {
    const newRow = row.filter((_column, index) => !collapseDisabled.includes(index));

    return newRow;
  });

  return {
    data,
  };
}
