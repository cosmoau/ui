import * as chrono from "chrono-node";
import { useState, useEffect } from "react";

export default function useNaturalDate(dateString: string): string | null {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const parsedDate = chrono.parseDate(dateString);

    if (parsedDate) {
      const year = parsedDate.getFullYear();
      const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
      const day = String(parsedDate.getDate()).padStart(2, "0");

      setDate(`${year}-${month}-${day}`);
    } else {
      setDate(null);
    }
  }, [dateString]);

  return date;
}
