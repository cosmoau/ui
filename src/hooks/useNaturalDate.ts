import dayjs from "dayjs";
import { useState, useEffect } from "react";

export default function useNaturalDate(dateString: string): string | null {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const parsedDate = dayjs(dateString);

    if (parsedDate.isValid()) {
      setDate(parsedDate.format("YYYY-MM-DD"));
    } else {
      setDate(null);
    }
  }, [dateString]);

  return date;
}
