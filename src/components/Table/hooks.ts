import { sort } from "fast-sort";
import { useRef, useState, useEffect } from "react";

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

  //

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
  tbody: ITable["tbody"],
  storage: IStorage,
  setStorage: ISetStorage,
  identifier: string,
): {
  endPagination: () => void;
  handlePageChange: (direction: "next" | "prev") => void;
  handlePageSelection: (value: string) => void;
  resetPagination: () => void;
  scrollToTop: () => void;
} {
  function scrollToTop(): void {
    const element = document.getElementById(`${identifier}`);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }

  function handlePageSelection(value: string): void {
    setStorage({
      ...storage,
      limit: parseInt(value),
      offset: 0,
      page: 1,
    });
  }

  function handlePageChange(direction: "next" | "prev"): void {
    const totalPages = Math.ceil(tbody ? tbody.length / storage.limit : 0);

    if (
      (direction === "prev" && storage.page === 1) ||
      (direction === "next" && storage.page === totalPages)
    ) {
      return;
    }
    const offset =
      direction === "next" ? storage.offset + storage.limit : storage.offset - storage.limit;
    const page = direction === "next" ? storage.page + 1 : storage.page - 1;

    setStorage({
      ...storage,
      limit: storage.limit,
      offset: offset,
      page: page,
    });

    scrollToTop();
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
  tbody,
}: {
  defaultDirection?: "asc" | "desc";
  defaultSort?: number;
  setStorage: ISetStorage;
  sortDisabled?: number[];
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

  const sortedTBody = tbody
    ? sortDirection === "asc"
      ? sort(tbody).asc((row) => row[sortColumn].value)
      : sort(tbody).desc((row) => row[sortColumn].value)
    : tbody;

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
