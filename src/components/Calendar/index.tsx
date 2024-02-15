import dayjs from "dayjs";
import { useEffect } from "react";

import { Icons } from "../../icons";
import { Stack, Text, Button } from "../../index";
import { ICalendar } from "../../types";

import {
  useCalendarState,
  useCalendarSingleValidation,
  useCalendarRangeValidation,
  useNavigationDisabledState,
  useDaysInMonth,
  useResetCalendar,
  useCalendarViewChange,
} from "./hooks"; // Adjust the import path as needed
import { CalendarGridStyled, CalendarHeaderStyled, CalendarStyled } from "./styles";

export default function Calendar({
  onSelection,
  minLength = 2,
  mode = "range",
  minDate,
  maxDate,
  startDate,
  endDate,
}: ICalendar): JSX.Element {
  // State management and initialization
  const { dates, setDates, values, setValues } = useCalendarState({ endDate, maxDate, minDate, startDate });

  // Validation hooks
  const validateSingleDate = useCalendarSingleValidation(minDate || "", maxDate || "", onSelection);
  const { validateRange } = useCalendarRangeValidation(minDate || "", maxDate || "", minLength, onSelection);

  // Navigation state and functionality
  const { nextMonthDisabled, nextYearDisabled, prevMonthDisabled, prevYearDisabled } = useNavigationDisabledState({
    // Use the state-managed minDate which includes the default
    maxDate: values.maxDate,

    minDate: values.minDate,
    viewDate: values.viewDate, // Use the state-managed maxDate which includes the default
  });
  const { handleDateChange } = useCalendarViewChange(setValues);

  // Days generation for the current month view
  const daysInMonth = useDaysInMonth(values.viewDate);

  // Reset functionality
  const resetCalendar = useResetCalendar({ maxDate, minDate, setDates, setValues, startDate });

  // Date selection handling
  const handleDaySelection = (date: string): void => {
    if (mode === "single") {
      if (validateSingleDate(date)) {
        setDates({ endDate: date, startDate: date });
      }
    } else {
      if (!dates.startDate || dates.endDate) {
        setDates({ endDate: "", startDate: date });
      } else if (validateRange(dates.startDate, date)) {
        setDates({ endDate: date, startDate: dates.startDate });
      }
    }
  };

  useEffect(() => {
    // Set viewDate to startDate on initial render, or default to current month
    const initialViewDate = startDate || dayjs().format("YYYY-MM-DD");

    setValues((currentValues) => ({ ...currentValues, viewDate: initialViewDate }));
    // Removing dependencies ensures this effect only runs once on mount
  }, []); // Empty dependency array

  return (
    <CalendarStyled>
      <CalendarHeaderStyled>
        <Text as="h5" bottom="none">
          {dayjs(values.viewDate).format("MMMM YYYY")}
        </Text>
        <Stack>
          <Button disabled={prevYearDisabled} theme="minimal" onClick={() => handleDateChange("year", "prev")}>
            <Icons.CaretDoubleLeft />
          </Button>
          <Button disabled={prevMonthDisabled} theme="minimal" onClick={() => handleDateChange("month", "prev")}>
            <Icons.CaretLeft />
          </Button>
          <Button theme="minimal" onClick={resetCalendar}>
            <Icons.Circle />
          </Button>
          <Button disabled={nextMonthDisabled} theme="minimal" onClick={() => handleDateChange("month", "next")}>
            <Icons.CaretRight />
          </Button>
          <Button disabled={nextYearDisabled} theme="minimal" onClick={() => handleDateChange("year", "next")}>
            <Icons.CaretDoubleRight />
          </Button>
        </Stack>
      </CalendarHeaderStyled>
      <CalendarGridStyled>
        {daysInMonth.map((date) => {
          const isSelected = date === dates.startDate || date === dates.endDate;
          const isBetween =
            dates.startDate &&
            dates.endDate &&
            dayjs(date).isAfter(dates.startDate) &&
            dayjs(date).isBefore(dates.endDate);
          // Adjusted logic to handle undefined minDate and maxDate
          const isDisabled = Boolean(
            (values.minDate && dayjs(date).isBefore(values.minDate, "day")) ||
              (values.maxDate && dayjs(date).isAfter(values.maxDate, "day")),
          );

          return (
            <Button
              key={date}
              disabled={isDisabled}
              theme={isSelected || isBetween ? "solid" : "default"}
              onClick={() => handleDaySelection(date)}>
              {dayjs(date).format("D")}
            </Button>
          );
        })}
      </CalendarGridStyled>
    </CalendarStyled>
  );
}
