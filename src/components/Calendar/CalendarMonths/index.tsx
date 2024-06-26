import dayjs from "dayjs";
import { useState, useMemo } from "react";

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
}: ICalendarMonths): JSX.Element {
  const [viewDate, setViewDate] = useState(dayjs(selectedDate));

  const handleYearChange = (direction: "prev" | "next"): void => {
    const newDate = direction === "prev" ? viewDate.subtract(1, "year") : viewDate.add(1, "year");

    setViewDate(newDate);
  };

  const handleMonthSelection = (month: number): void => {
    const newDate = viewDate.month(month).date(1);

    onSelection(newDate.format("YYYY-MM-DD"));
  };

  const isPrevYearDisabled = useMemo(() => {
    return minDate ? viewDate.subtract(1, "year").endOf("year").isBefore(dayjs(minDate)) : false;
  }, [viewDate, minDate]);

  const isNextYearDisabled = useMemo(() => {
    return maxDate ? viewDate.add(1, "year").startOf("year").isAfter(dayjs(maxDate)) : false;
  }, [viewDate, maxDate]);

  const isMonthDisabled = (month: number): boolean => {
    const monthDate = viewDate.month(month).date(1);

    if (minDate && maxDate) {
      return monthDate.isBefore(dayjs(minDate)) || monthDate.isAfter(dayjs(maxDate));
    } else if (minDate) {
      return monthDate.isBefore(dayjs(minDate));
    } else if (maxDate) {
      return monthDate.isAfter(dayjs(maxDate));
    }

    return false;
  };

  return (
    <CalendarStyled>
      <CalendarHeaderStyled>
        <Text as="h5" bottom="none">
          {viewDate.year()}
        </Text>
        <Stack>
          <Button
            disabled={isPrevYearDisabled}
            small
            theme="minimal"
            onClick={() => handleYearChange("prev")}>
            <Icons.CaretLeft />
          </Button>
          <Button
            disabled={isNextYearDisabled}
            small
            theme="minimal"
            onClick={() => handleYearChange("next")}>
            <Icons.CaretRight />
          </Button>
        </Stack>
      </CalendarHeaderStyled>

      <CalendarGridStyled mode="months">
        {months.map((monthName, index) => {
          const isSelected = dayjs(selectedDate).isSame(viewDate.month(index), "month");
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
