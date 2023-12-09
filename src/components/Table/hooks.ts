import { sort } from "fast-sort";
import { useRef, useState, useEffect } from "react";

import { ITable } from "../../types";

export const TABLE_PAGES = [10, 25, 50, 100];
export const MAX_PAGES = 500;

export interface IStorage {
  filtering: boolean;
  limit: number;
  offset: number;
  page: number;
}

export type ISetStorage = (value: IStorage) => void;

export function useTableColumns(identifier: string, columns: ITable["columns"]): string[] {
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
              const cellWidth = Math.round((cell.offsetWidth / firstRow.offsetWidth) * 100);

              widths.push(cellWidth);
            }
          });

          setColumnWidths(widths);
        }
      });
    }
  }, [columns]);

  return columnWidths.map((width) => `${width}%`);
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

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [pagination, kbd, handlePageChange, resetPagination, endPagination]);
}

export function useTablePagination(
  columns: ITable["columns"],
  storage: IStorage,
  setStorage: ISetStorage,
): {
  endPagination: () => void;
  handlePageChange: (direction: "next" | "prev") => void;
  handlePageSelection: (value: string) => void;
  resetPagination: () => void;
  scrollToTop: () => void;
} {
  function scrollToTop(): void {
    const element = document.getElementById("table");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
    const totalPages = Math.ceil(columns ? columns.length / storage.limit : 0);

    if ((direction === "prev" && storage.page === 1) || (direction === "next" && storage.page === totalPages)) {
      return;
    }
    const offset = direction === "next" ? storage.offset + storage.limit : storage.offset - storage.limit;
    const page = direction === "next" ? storage.page + 1 : storage.page - 1;

    setStorage({
      ...storage,
      limit: storage.limit,
      offset: offset,
      page: page,
    });
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
      offset: columns ? columns.length - storage.limit : 0,
      page: Math.ceil(columns ? columns.length / storage.limit : 0),
    });
  };

  useEffect(() => {
    resetPagination();
  }, [columns]);

  useEffect(() => {
    if (columns && columns.length && storage.offset >= columns.length && storage.page > 1) {
      resetPagination();
    }
  }, [storage.offset, columns, storage.limit, setStorage]);

  return {
    endPagination,
    handlePageChange,
    handlePageSelection,
    resetPagination,
    scrollToTop,
  };
}

export function useTableSort({
  defaultSort = 0,
  defaultDirection = "asc",
  storage,
  setStorage,
  columns,
}: {
  columns: ITable["columns"];
  defaultDirection?: "asc" | "desc";
  defaultSort?: number;
  setStorage: ISetStorage;
  sortDisabled?: number[];
  storage: IStorage;
}): {
  handleSortMapping: (index: number) => void;
  resetSort: () => void;
  sortColumn: number;
  sortDirection: "asc" | "desc";
  sortedColumns: ITable["columns"];
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

  const sortedColumns = columns
    ? sortDirection === "asc"
      ? sort(columns).asc((row) => row[sortColumn].value)
      : sort(columns).desc((row) => row[sortColumn].value)
    : columns;

  return {
    handleSortMapping,
    resetSort,
    sortColumn,
    sortDirection,
    sortedColumns,
  };
}

export function checkTableIdentifier(identifier: string): void {
  const tableElements = Array.from(document.querySelectorAll("table"));

  const duplicates = tableElements.filter((tableElement) => {
    return tableElement.id === `${identifier}-table`;
  });

  if (duplicates.length > 1) {
    // eslint-disable-next-line no-console
    console.error(`Table identifier "${identifier}" already exists, ${duplicates.length} duplicates found.`);
  }
}

export function prepareTable(
  columns: ITable["columns"],
  collapse?: boolean,
  collapseDisabled?: number[],
): {
  data: ITable["columns"];
} {
  if (!columns) {
    return {
      data: [],
    };
  }

  if (!collapse || !collapseDisabled || collapseDisabled.length === 0) {
    return {
      data: columns,
    };
  }

  const data = columns.map((row) => {
    const newRow = row.filter((_column, index) => !collapseDisabled.includes(index));

    return newRow;
  });

  return {
    data,
  };
}
