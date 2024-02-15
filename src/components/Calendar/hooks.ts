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
    viewDate: dayjs().format("YYYY-MM-DD"), // Default to today's date
  });

  return { dates, setDates, setValues, values };
};

export const useCalendarSingleValidation = (
  minDate: string,
  maxDate: string,
  onSelection: ICalendar["onSelection"],
): ((date: string) => boolean) => {
  const validateSingleDate = (date: string): boolean => {
    if (isDateOutOfRange(date, minDate, maxDate)) {
      toast.error("Selected date is out of range");

      return false; // Indicate validation failed
    }
    // Call onSelection as validation passed
    onSelection({ endDate: date, startDate: date });

    return true; // Indicate validation passed
  };

  return validateSingleDate;
};

export const useCalendarRangeValidation = (
  minDate: string,
  maxDate: string,
  minLength: number,
  onSelection: ICalendar["onSelection"],
): { validateRange: (startDate: string, endDate: string) => boolean } => {
  const validateRange = (startDate: string, endDate: string): boolean => {
    if (isDateOutOfRange(endDate, minDate, maxDate)) {
      toast.error("Selected date is out of range");

      return false;
    }
    if (dayjs(endDate).isBefore(dayjs(startDate), "day")) {
      toast.error("End date cannot be before start date");

      return false;
    }
    if (dayjs(endDate).isSame(dayjs(startDate), "day")) {
      toast.error("Start date and end date cannot be the same");

      return false;
    }
    if (dayjs(endDate).diff(dayjs(startDate), "day") < minLength) {
      toast.error(`Minimum length is ${minLength} days`);

      return false;
    }
    // Call onSelection as validation passed
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
  const nextMonthDisabled = maxDate ? dayjs(viewDate).add(1, "month").isAfter(dayjs(maxDate), "month") : false;
  const nextYearDisabled = maxDate ? dayjs(viewDate).add(1, "year").isAfter(dayjs(maxDate), "year") : false;
  const prevMonthDisabled = minDate ? dayjs(viewDate).subtract(1, "month").isBefore(dayjs(minDate), "month") : false;
  const prevYearDisabled = minDate ? dayjs(viewDate).subtract(1, "year").isBefore(dayjs(minDate), "year") : false;

  return { nextMonthDisabled, nextYearDisabled, prevMonthDisabled, prevYearDisabled };
};

export const useDaysInMonth = (viewDate: string): string[] => {
  const daysInMonth = Array.from({ length: dayjs(viewDate).daysInMonth() }, (_, i) =>
    formatDate(dayjs(viewDate).startOf("month").add(i, "day")),
  );

  return daysInMonth;
};

export const useResetCalendar = ({
  setDates,
  setValues,
}: {
  maxDate?: string;
  minDate?: string;
  setDates: Dispatch<SetStateAction<{ endDate?: string; startDate?: string }>>;
  setValues: Dispatch<
    SetStateAction<{
      maxDate?: string; // Optional
      minDate?: string; // Optional
      viewDate: string;
    }>
  >;
  startDate?: string;
}): (() => void) => {
  return () => {
    setDates({ endDate: "", startDate: "" });
    setValues((currentValues) => ({
      ...currentValues,
      viewDate: dayjs().format("YYYY-MM-DD"), // Reset viewDate to today
    }));
  };
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
