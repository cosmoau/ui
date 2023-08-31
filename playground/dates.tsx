import React, { useState } from 'react';

import { useNaturalDate } from '../src/index';

const DateParser = (): JSX.Element => {
    const [input, setInput] = useState("");
    const date = useNaturalDate(input);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <input placeholder="Enter a date" type="text" value={input} onChange={handleInputChange} />
            <h1>{date || "Invalid date"}</h1>
        </div>
    );
};

export default DateParser;
