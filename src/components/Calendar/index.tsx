import dayjs from "dayjs";
import { useState } from "react";
import toast from "react-hot-toast";

import { Icons } from "../../icons";
import { Stack, Text, Button } from "../../index";
import { ICalendar } from "../../types";

import { CalendarGridStyled, CalendarHeaderStyled, CalendarStyled } from "./styles";

export default function Calendar({
  onSelection,
  minLength = 2,
  mode = "range",
  minDate: providedMinDate,
  maxDate: providedMaxDate,
  defaultDate,
}: ICalendar): JSX.Element {
  const [dates, setDates] = useState({ endDate: "", startDate: "" });
  const [values, setValues] = useState({
    maxDate: providedMaxDate || dayjs().add(2, "year").format("YYYY-MM-DD"),
    minDate: providedMinDate || dayjs().subtract(2, "year").format("YYYY-MM-DD"),
    selectedDate: defaultDate || dayjs().format("YYYY-MM-DD"),
  });

  const handleDaySelection = (date: string): void => {
    if (dayjs(date).isBefore(values.minDate, "day") || dayjs(date).isAfter(values.maxDate, "day")) {
      toast.error("Selected date is out of range.");

      return;
    }

    let newSelectedDate = values.selectedDate;

    if (mode === "single") {
      setDates({ endDate: date, startDate: date });
      onSelection({ endDate: date, startDate: date });
    } else {
      if (!dates.startDate || dates.endDate) {
        if (dayjs(date).format("YYYY-MM") !== dayjs(values.selectedDate).format("YYYY-MM")) {
          newSelectedDate = dayjs(date).startOf("month").format("YYYY-MM-DD");
        }
        setDates({ endDate: "", startDate: date });
      } else if (dayjs(date).isBefore(dayjs(dates.startDate), "day")) {
        toast.error("End date cannot be before start date.");
      } else if (dayjs(date).isSame(dayjs(dates.startDate), "day")) {
        setDates({ endDate: "", startDate: "" });
      } else if (dayjs(date).diff(dayjs(dates.startDate), "day") < minLength) {
        toast.error(`Minimum length is ${minLength} days.`);
      } else {
        if (dayjs(date).format("YYYY-MM") !== dayjs(values.selectedDate).format("YYYY-MM")) {
          newSelectedDate = dayjs(date).endOf("month").format("YYYY-MM-DD");
        }
        setDates({ endDate: date, startDate: dates.startDate });
      }
      onSelection(dates);
    }

    if (newSelectedDate !== values.selectedDate) {
      setValues({ ...values, selectedDate: newSelectedDate });
    }
  };

  const daysInMonth = Array.from({ length: dayjs(values.selectedDate).daysInMonth() }, (_, i) =>
    dayjs(values.selectedDate).startOf("month").add(i, "day").format("YYYY-MM-DD"),
  );

  const isDisabled = {
    nextMonth: dayjs(values.selectedDate)
      .add(1, "month")
      .isAfter(dayjs(providedMaxDate || values.maxDate), "month"),
    nextYear: dayjs(values.selectedDate)
      .add(1, "year")
      .isAfter(dayjs(providedMaxDate || values.maxDate), "year"),
    prevMonth: dayjs(values.selectedDate)
      .subtract(1, "month")
      .isBefore(dayjs(providedMinDate || values.minDate), "month"),
    prevYear: dayjs(values.selectedDate)
      .subtract(1, "year")
      .isBefore(dayjs(providedMinDate || values.minDate), "year"),
  };

  const handleDateChange = (type: "month" | "year", direction: "next" | "prev"): void => {
    const amount = direction === "next" ? 1 : -1;
    const unit = type === "month" ? "month" : "year";
    const newDate = dayjs(values.selectedDate).add(amount, unit);

    if (
      newDate.isBefore(dayjs(providedMinDate || values.minDate), unit) ||
      newDate.isAfter(dayjs(providedMaxDate || values.maxDate), unit)
    ) {
      return;
    }

    setValues({ ...values, selectedDate: newDate.format("YYYY-MM-DD") });
  };

  const handleReset = (): void => {
    setValues({
      ...values,
      selectedDate: defaultDate || dayjs().format("YYYY-MM-DD"),
    });
    setDates({ endDate: "", startDate: "" });
  };

  return (
    <CalendarStyled>
      <CalendarHeaderStyled>
        <Text as="h5" bottom="none">
          {dayjs(values.selectedDate).format("MMMM, YYYY")}
        </Text>
        <Stack>
          <Button
            css={{
              padding: "$smallest",
            }}
            disabled={isDisabled.prevYear}
            small
            theme="minimal"
            onClick={() => handleDateChange("year", "prev")}>
            <Icons.CaretDoubleLeft />
          </Button>
          <Button
            css={{
              padding: "$smallest",
            }}
            disabled={isDisabled.prevMonth}
            small
            theme="minimal"
            onClick={() => handleDateChange("month", "prev")}>
            <Icons.CaretLeft />
          </Button>
          <Button
            css={{
              padding: "$smallest",
            }}
            small
            theme="minimal"
            onClick={handleReset}>
            <Icons.Circle />
          </Button>
          <Button
            css={{
              padding: "$smallest",
            }}
            disabled={isDisabled.nextMonth}
            small
            theme="minimal"
            onClick={() => handleDateChange("month", "next")}>
            <Icons.CaretRight />
          </Button>
          <Button
            css={{
              padding: "$smallest",
            }}
            disabled={isDisabled.nextYear}
            small
            theme="minimal"
            onClick={() => handleDateChange("year", "next")}>
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
          const isDisabled = isBetween || dayjs(date).isBefore(values.minDate) || dayjs(date).isAfter(values.maxDate);

          return (
            <Button
              key={date}
              css={{
                fontWeight: isSelected ? "bold" : "normal",
                phone: {
                  minHeight: "100%",
                  padding: "$smallest",
                },
              }}
              disabled={isDisabled}
              small
              theme={isSelected || isBetween ? "solid" : isDisabled ? "minimal" : "default"}
              onClick={(): void => handleDaySelection(date)}>
              {dayjs(date).format("D")}
            </Button>
          );
        })}
      </CalendarGridStyled>
    </CalendarStyled>
  );
}
