import dayjs, { Dayjs } from "dayjs";
import { useState, Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

import { ICalendar } from "../../types";

export const isDateOutOfRange = (date: string, minDate: string, maxDate: string): boolean => {
  return dayjs(date).isBefore(minDate, "day") || dayjs(date).isAfter(maxDate, "day");
};

export const formatDate = (date: string | Dayjs, format: string = "YYYY-MM-DD"): string => {
  return dayjs(date).format(format);
};

export const useCalendarState = ({
  startDate,
  endDate,
  minDate,
  maxDate,
}: Pick<ICalendar, "startDate" | "endDate" | "minDate" | "maxDate">): {
  dates: { endDate?: string; startDate?: string };
  setDates: Dispatch<SetStateAction<{ endDate?: string; startDate?: string }>>;
  setValues: Dispatch<SetStateAction<{ maxDate?: string; minDate?: string; viewDate: string }>>;
  values: { maxDate?: string; minDate?: string; viewDate: string };
} => {
  const [dates, setDates] = useState<{ endDate?: string; startDate?: string }>({
    endDate: endDate || "",
    startDate: startDate || "",
  });
  const [values, setValues] = useState<{ maxDate?: string; minDate?: string; viewDate: string }>({
    maxDate: maxDate,
    minDate: minDate,
    viewDate: dayjs().format("YYYY-MM-DD"),
  });

  return { dates, setDates, setValues, values };
};

export const useCalendarSingleValidation = (
  minDate: string | undefined,
  maxDate: string | undefined,
  onSelection: ICalendar["onSelection"],
): ((date: string) => boolean) => {
  const validateSingleDate = (date: string): boolean => {
    const selectedDate = dayjs(date);

    if (
      (minDate && selectedDate.isBefore(dayjs(minDate), "day")) ||
      (maxDate && selectedDate.isAfter(dayjs(maxDate), "day"))
    ) {
      toast.error("Selected date is out of range");

      return false;
    }

    onSelection({ endDate: date, startDate: date });

    return true;
  };

  return validateSingleDate;
};

export const useCalendarRangeValidation = (
  minDate: string | undefined,
  maxDate: string | undefined,
  minLength: number | undefined,
  maxLength: number | undefined,
  onSelection: ICalendar["onSelection"],
): { validateRange: (startDate: string, endDate: string) => boolean } => {
  const validateRange = (startDate: string, endDate: string): boolean => {
    const start = dayjs(startDate);
    const end = dayjs(endDate);
    let diff = end.diff(start, "day");

    if (end.isBefore(start)) {
      diff = start.diff(end, "day");
      if (
        (minLength === undefined || diff >= minLength) &&
        (maxLength === undefined || diff <= maxLength)
      ) {
        onSelection({ endDate: startDate, startDate: endDate });

        return true;
      }
      toast(`Date range must be between ${minLength ?? 0} and ${maxLength ?? "∞"} days`);

      return false;
    }

    if (minDate && end.isBefore(dayjs(minDate), "day")) {
      toast(`Selected date must be after ${minDate}`);

      return false;
    }
    if (maxDate && end.isAfter(dayjs(maxDate), "day")) {
      toast(`Selected date must be before ${maxDate}`);

      return false;
    }

    if (
      (minLength !== undefined && diff < minLength) ||
      (maxLength !== undefined && diff > maxLength)
    ) {
      toast(`Date range must be between ${minLength ?? 0} and ${maxLength ?? "∞"} days`);

      return false;
    }

    onSelection({ endDate, startDate });

    return true;
  };

  return { validateRange };
};

export const useNavigationDisabledState = ({
  viewDate,
  minDate,
  maxDate,
}: {
  maxDate?: string;
  minDate?: string;
  viewDate: string;
}): {
  nextMonthDisabled: boolean;
  nextYearDisabled: boolean;
  prevMonthDisabled: boolean;
  prevYearDisabled: boolean;
} => {
  const nextMonthDisabled = maxDate
    ? dayjs(viewDate).add(1, "month").isAfter(dayjs(maxDate), "month")
    : false;
  const nextYearDisabled = maxDate
    ? dayjs(viewDate).add(1, "year").isAfter(dayjs(maxDate), "year")
    : false;
  const prevMonthDisabled = minDate
    ? dayjs(viewDate).subtract(1, "month").isBefore(dayjs(minDate), "month")
    : false;
  const prevYearDisabled = minDate
    ? dayjs(viewDate).subtract(1, "year").isBefore(dayjs(minDate), "year")
    : false;

  return { nextMonthDisabled, nextYearDisabled, prevMonthDisabled, prevYearDisabled };
};

export const useDaysInMonth = (viewDate: string): { days: string[]; offset: number } => {
  const daysInMonth = dayjs(viewDate).daysInMonth();
  const year = dayjs(viewDate).year();
  const month = dayjs(viewDate).month();
  const firstDayOfMonth = dayjs(`${year}-${month + 1}-01`).day();

  const days = Array.from({ length: daysInMonth }, (_, i) =>
    formatDate(dayjs(`${year}-${month + 1}-${i + 1}`)),
  );

  return { days, offset: firstDayOfMonth };
};

export const useCalendarViewChange = (
  setValues: Dispatch<SetStateAction<{ maxDate?: string; minDate?: string; viewDate: string }>>,
): { handleDateChange: (type: "month" | "year", direction: "next" | "prev") => void } => {
  const handleDateChange = (type: "month" | "year", direction: "next" | "prev"): void => {
    const amount = direction === "next" ? 1 : -1;
    const unit = type === "month" ? "month" : "year";

    setValues((currentValues) => ({
      ...currentValues,
      viewDate: dayjs(currentValues.viewDate).add(amount, unit).format("YYYY-MM-DD"),
    }));
  };

  return { handleDateChange };
};
