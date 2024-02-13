import { CaretDoubleLeft, CaretLeft, CaretDoubleRight, CaretRight, Circle } from "@phosphor-icons/react";
import dayjs from "dayjs";
import { useState } from "react";
import toast from "react-hot-toast";

import { Stack, Text, Button, Divider, useBreakpoints } from "../../index";

export interface ICalendarDates {
  endDate: string;
  startDate: string;
}

export default function Calendar({
  onSelection,
  minLength = 2, // Default minLength to 2 if not provided
  mode = "range",
  minDate: providedMinDate, // Rename for clarity within the component
  maxDate: providedMaxDate,
  defaultDate, // New prop for setting the initial month
}: {
  defaultDate?: string;
  maxDate?: string;
  minDate?: string;
  minLength?: number;
  mode?: "range" | "single";
  onSelection: (dates: ICalendarDates) => void; // Optional prop for default month
}): JSX.Element {
  const { isMicro } = useBreakpoints();

  const [dates, setDates] = useState({ endDate: "", startDate: "" });
  const [calendarDates, setCalendarDates] = useState({
    maxDate: providedMaxDate || dayjs().add(2, "year").format("YYYY-MM-DD"),
    minDate: providedMinDate || dayjs().subtract(2, "year").format("YYYY-MM-DD"),
    selectedDate: defaultDate || dayjs().format("YYYY-MM-DD"), // Use defaultDate if provided
  });

    const handleDaySelection = (date: string): void => {
        if (dayjs(date).isBefore(calendarDates.minDate, "day") || dayjs(date).isAfter(calendarDates.maxDate, "day")) {
            toast.error("Selected date is out of range.");

            return;
        }

        let newSelectedDate = calendarDates.selectedDate;

        if (mode === "single") {
            setDates({ endDate: date, startDate: date });
            onSelection({ endDate: date, startDate: date });
        } else {
            if (!dates.startDate || dates.endDate) {
                // If it's the start date and out of range, set selectedDate to the start of the month
                if (dayjs(date).format("YYYY-MM") !== dayjs(calendarDates.selectedDate).format("YYYY-MM")) {
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
                // If it's the end date and out of range, adjust selectedDate to make end date visible
                if (dayjs(date).format("YYYY-MM") !== dayjs(calendarDates.selectedDate).format("YYYY-MM")) {
                    newSelectedDate = dayjs(date).endOf("month").format("YYYY-MM-DD");
                }
                setDates({ endDate: date, startDate: dates.startDate });
            }
            onSelection(dates);
        }

        // Update the selectedDate state if it has changed
        if (newSelectedDate !== calendarDates.selectedDate) {
            setCalendarDates({ ...calendarDates, selectedDate: newSelectedDate });
        }
    };

  const daysInMonth = Array.from({ length: dayjs(calendarDates.selectedDate).daysInMonth() }, (_, i) =>
    dayjs(calendarDates.selectedDate).startOf("month").add(i, "day").format("YYYY-MM-DD"),
  );

  const isDisabled = {
    nextMonth: dayjs(calendarDates.selectedDate)
      .add(1, "month")
      .isAfter(dayjs(providedMaxDate || calendarDates.maxDate), "month"),
    nextYear: dayjs(calendarDates.selectedDate)
      .add(1, "year")
      .isAfter(dayjs(providedMaxDate || calendarDates.maxDate), "year"),
    prevMonth: dayjs(calendarDates.selectedDate)
      .subtract(1, "month")
      .isBefore(dayjs(providedMinDate || calendarDates.minDate), "month"),
    prevYear: dayjs(calendarDates.selectedDate)
      .subtract(1, "year")
      .isBefore(dayjs(providedMinDate || calendarDates.minDate), "year"),
  };

  const handleDateChange = (type: "month" | "year", direction: "next" | "prev"): void => {
    const amount = direction === "next" ? 1 : -1;
    const unit = type === "month" ? "month" : "year";
    const newDate = dayjs(calendarDates.selectedDate).add(amount, unit);

    if (
      newDate.isBefore(dayjs(providedMinDate || calendarDates.minDate), unit) ||
      newDate.isAfter(dayjs(providedMaxDate || calendarDates.maxDate), unit)
    ) {
      return;
    }

    setCalendarDates({ ...calendarDates, selectedDate: newDate.format("YYYY-MM-DD") });
  };

  const handleReset = (): void => {
    setCalendarDates({
      ...calendarDates,
      selectedDate: defaultDate || dayjs().format("YYYY-MM-DD"),
    });
    setDates({ endDate: "", startDate: "" });
  };

  return (
    <Stack
      css={{
        maxWidth: "50rem",
      }}>
      <Stack flexduo={!isMicro}>
        <Text as="h5">{dayjs(calendarDates.selectedDate).format("MMMM, YYYY")}</Text>
        <Stack>
          <Button
            css={{
              padding: "$smallest",
            }}
            disabled={isDisabled.prevYear}
            small
            theme="minimal"
            onClick={() => handleDateChange("year", "prev")}>
            <CaretDoubleLeft />
          </Button>
          <Button
            css={{
              padding: "$smallest",
            }}
            disabled={isDisabled.prevMonth}
            small
            theme="minimal"
            onClick={() => handleDateChange("month", "prev")}>
            <CaretLeft />
          </Button>
          <Button
            css={{
              padding: "$smallest",
            }}
            small
            theme="minimal"
            onClick={handleReset}>
            <Circle />
          </Button>
          <Button
            css={{
              padding: "$smallest",
            }}
            disabled={isDisabled.nextMonth}
            small
            theme="minimal"
            onClick={() => handleDateChange("month", "next")}>
            <CaretRight />
          </Button>
          <Button
            css={{
              padding: "$smallest",
            }}
            disabled={isDisabled.nextYear}
            small
            theme="minimal"
            onClick={() => handleDateChange("year", "next")}>
            <CaretDoubleRight />
          </Button>
        </Stack>
      </Stack>
      <Divider bottom="small" top="small" />

      <Stack
        css={{
          display: "grid",
          // 7 days in a week
          gap: "$small",
            gridTemplateColumns: "repeat(6, 1fr)",
          micro: {
              gap: "$smaller",
          },

          textAlign: "center",
        }}>
        {daysInMonth.map((date) => {
          const isSelected = date === dates.startDate || date === dates.endDate;
          const isBetween =
            dates.startDate &&
            dates.endDate &&
            dayjs(date).isAfter(dates.startDate) &&
            dayjs(date).isBefore(dates.endDate);
          const isDisabled =
            isBetween || dayjs(date).isBefore(calendarDates.minDate) || dayjs(date).isAfter(calendarDates.maxDate);

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
      </Stack>
    </Stack>
  );
}
