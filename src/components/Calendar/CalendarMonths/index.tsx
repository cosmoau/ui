import dayjs from "dayjs";
import { useState, useMemo, useEffect } from "react";

import { Text, Stack, Button } from "../../../";
import { Icons } from "../../../icons";
import { ICalendarMonths } from "../../../types";
import { CalendarStyled, CalendarHeaderStyled, CalendarGridStyled } from "../styles";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function CalendarMonths({
  selectedDate,
  onSelection,
  minDate,
  maxDate,
  viewDate,
}: ICalendarMonths): JSX.Element {
  const [viewYear, setViewYear] = useState(
    dayjs(selectedDate || viewDate || dayjs().startOf("month")),
  );

  const handleYearChange = (direction: "prev" | "next"): void => {
    const newDate = direction === "prev" ? viewYear.subtract(1, "year") : viewYear.add(1, "year");

    setViewYear(newDate);
  };

  const handleMonthSelection = (month: number): void => {
    const newDate = viewYear.month(month).date(1);

    onSelection(newDate.format("YYYY-MM-DD"));
  };

  const isPrevYearDisabled = useMemo(() => {
    return minDate ? viewYear.subtract(1, "year").endOf("year").isBefore(dayjs(minDate)) : false;
  }, [viewYear, minDate]);

  const isNextYearDisabled = useMemo(() => {
    return maxDate ? viewYear.add(1, "year").startOf("year").isAfter(dayjs(maxDate)) : false;
  }, [viewYear, maxDate]);

  const isMonthDisabled = (month: number): boolean => {
    const monthDate = viewYear.month(month).date(1);

    if (minDate && maxDate) {
      return monthDate.isBefore(dayjs(minDate)) || monthDate.isAfter(dayjs(maxDate));
    } else if (minDate) {
      return monthDate.isBefore(dayjs(minDate));
    } else if (maxDate) {
      return monthDate.isAfter(dayjs(maxDate));
    }

    return false;
  };

  useEffect(() => {
    const initialViewDate =
      selectedDate || viewYear || dayjs().startOf("month").format("YYYY-MM-DD");

    setViewYear(dayjs(initialViewDate));
  }, []);

  return (
    <CalendarStyled>
      <CalendarHeaderStyled>
        <Text as="h5" bottom="none">
          {viewYear.year()}
        </Text>
        <Stack>
          <Button
            disabled={isPrevYearDisabled}
            small
            theme="minimal"
            onClick={() => handleYearChange("prev")}>
            <Icons.ArrowLeft />
          </Button>
          <Button
            disabled={isNextYearDisabled}
            small
            theme="minimal"
            onClick={() => handleYearChange("next")}>
            <Icons.ArrowRight />
          </Button>
        </Stack>
      </CalendarHeaderStyled>

      <CalendarGridStyled mode="months">
        {months.map((monthName, index) => {
          const isSelected = dayjs(selectedDate).isSame(viewYear.month(index), "month");
          const isDisabled = isMonthDisabled(index);

          return (
            <Button
              key={monthName}
              disabled={isDisabled}
              small
              theme={isSelected ? "solid" : "minimal"}
              onClick={() => handleMonthSelection(index)}>
              {monthName}
            </Button>
          );
        })}
      </CalendarGridStyled>
    </CalendarStyled>
  );
}
