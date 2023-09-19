/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Check, Database } from "@phosphor-icons/react";
import React, { useState } from "react";

import { Badge, Box, Input, Stack, Text, useNaturalDate } from "../src/index";

const DateParser = (): JSX.Element => {
  const [input, setInput] = useState("");
  const date = useNaturalDate(input);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <Stack align="center">
      <Box>
        <Input
          placeholder="Enter a date"
          reset
          resetFunction={() => setInput("")}
          type="text"
          value={input}
          onChange={handleInputChange}
        />
        <Stack flexduo top="medium">
          <Text accent>Natural Language</Text>
          <Badge icon={input ? <Database /> : undefined}>{input || "..."}</Badge>
        </Stack>
        <Stack flexduo top="small">
          <Text accent>Date (YYYY-MM-DD)</Text>
          <Badge icon={date ? <Check /> : undefined}>{date || "..."}</Badge>
        </Stack>
      </Box>
    </Stack>
  );
};

export default DateParser;
