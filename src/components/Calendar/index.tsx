import dayjs from "dayjs";
import { useEffect } from "react";

import { Icons } from "../../icons";
import { Stack, Text, Button, useBreakpoints } from "../../index";
import { ICalendar } from "../../types";

import {
  useCalendarState,
  useCalendarSingleValidation,
  useCalendarRangeValidation,
  useNavigationDisabledState,
  useDaysInMonth,
  useCalendarViewChange,
} from "./hooks";
import {
  CalendarFooterStyled,
  CalendarGridStyled,
  CalendarHeaderStyled,
  CalendarStyled,
} from "./styles";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Calendar({
  onSelection,
  minLength = 2,
  maxLength,
  mode = "range",
  minDate,
  maxDate,
  viewDate,
  startDate,
  endDate,
}: ICalendar): JSX.Element {
  const { isPhone } = useBreakpoints();
  const { dates, setDates, values, setValues } = useCalendarState({
    endDate,
    maxDate,
    minDate,
    startDate,
  });

  const validateSingleDate = useCalendarSingleValidation(minDate, maxDate, onSelection);
  const { validateRange } = useCalendarRangeValidation(
    minDate,
    maxDate,
    minLength,
    maxLength,
    onSelection,
  );

  const { nextMonthDisabled, nextYearDisabled, prevMonthDisabled, prevYearDisabled } =
    useNavigationDisabledState({
      maxDate: values.maxDate,
      minDate: values.minDate,
      viewDate: values.viewDate,
    });
  const { handleDateChange } = useCalendarViewChange(setValues);

  const { days, offset } = useDaysInMonth(values.viewDate);

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
    const initialViewDate = startDate || viewDate || dayjs().startOf("month").format("YYYY-MM-DD");

    setValues((currentValues) => ({ ...currentValues, viewDate: initialViewDate }));
  }, []);

  return (
    <CalendarStyled>
      <CalendarHeaderStyled>
        <Text as="h5" bottom="none">
          {dayjs(values.viewDate).format("MMMM YYYY")}
        </Text>
        <Stack>
          <Button
            disabled={prevMonthDisabled}
            small={isPhone}
            theme="minimal"
            onClick={() => handleDateChange("month", "prev")}>
            <Icons.CaretLeft />
          </Button>
          <Button
            disabled={nextMonthDisabled}
            small={isPhone}
            theme="minimal"
            onClick={() => handleDateChange("month", "next")}>
            <Icons.CaretRight />
          </Button>
        </Stack>
      </CalendarHeaderStyled>

      <CalendarGridStyled mode="days">
        {daysOfWeek.map((day) => (
          <Text key={day} accent as="span">
            {day}
          </Text>
        ))}
        {Array.from({ length: offset }).map((_, i) => (
          <div key={i} />
        ))}
        {days.map((date) => {
          const isSelected = date === dates.startDate || date === dates.endDate;
          const isBetween =
            dates.startDate &&
            dates.endDate &&
            dayjs(date).isAfter(dates.startDate) &&
            dayjs(date).isBefore(dates.endDate);
          const isDisabled = Boolean(
            (values.minDate && dayjs(date).isBefore(values.minDate, "day")) ||
              (values.maxDate && dayjs(date).isAfter(values.maxDate, "day")),
          );

          return (
            <Button
              key={date}
              css={{
                ...(isSelected && {
                  "&:hover": {
                    backgroundColor: "$text !important",
                    color: "$background !important",
                    opacity: 0.7,
                  },
                }),
              }}
              disabled={isDisabled}
              small
              theme={isSelected ? "solid" : isBetween ? "fill" : "minimal"}
              onClick={() => handleDaySelection(date)}>
              {dayjs(date).format("D")}
            </Button>
          );
        })}
      </CalendarGridStyled>
      <CalendarFooterStyled>
        {!prevYearDisabled && (
          <Button
            disabled={prevYearDisabled}
            icon={<Icons.ClockCounterClockwise />}
            small
            onClick={() => handleDateChange("year", "prev")}>
            {dayjs(values.viewDate).subtract(1, "year").format("YYYY")}
          </Button>
        )}
        {!nextYearDisabled && (
          <Button
            disabled={nextYearDisabled}
            icon={<Icons.ClockClockwise />}
            iconPosition="right"
            small
            onClick={() => handleDateChange("year", "next")}>
            {dayjs(values.viewDate).add(1, "year").format("YYYY")}
          </Button>
        )}
      </CalendarFooterStyled>
    </CalendarStyled>
  );
}
