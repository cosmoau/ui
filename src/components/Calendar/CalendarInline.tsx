import type { JSX } from "react";

import { Calendar, Popover } from "../..";
import useBreakpoints from "../../hooks/useBreakpoints";
import { ICalendarInline } from "../../types";
import Dialog from "../Dialog";

export default function CalendarInline({ title, trigger, ...props }: ICalendarInline): JSX.Element {
  const { isPhone } = useBreakpoints();

  if (isPhone) {
    return (
      <Dialog title={title} trigger={trigger}>
        <Calendar {...props} />
      </Dialog>
    );
  }

  return (
    <Popover trigger={trigger}>
      <Calendar {...props} />
    </Popover>
  );
}
