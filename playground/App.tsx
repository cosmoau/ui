/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { ReactElement, useState } from "react";
import toast from "react-hot-toast";

import * as C from "../src/index";

export function App(): ReactElement {
    const [file, setFile] = useState<File | null>(null);
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [singleDate, setSingleDate] = useState<string>("");

    return (
    <C.Provider>
            <C.View bottom="larger" container top="larger">
                <C.Stack align="center" bottom="large">
                    <C.Text as="h2">
                        Range dates: {startDate} - {endDate}
                    </C.Text>
                    <C.Text as="h2">Single date: {singleDate}</C.Text>

                </C.Stack>
                <C.Stack align="center" bottom="medium">
                <C.Popover trigger={<C.Button>Calendar Range</C.Button>}>
                <C.Calendar
    endDate={endDate}
    minLength={10}
    mode="range"
    startDate={startDate}
                onSelection={(dates) => {
                    setStartDate(dates.startDate);
                    setEndDate(dates.endDate);
                    toast.success(`Selected dates: ${JSON.stringify(dates)}`);
                }} />
                </C.Popover>
                </C.Stack>
                <C.Stack align="center">
                    <C.Popover trigger={<C.Button>Calendar Single</C.Button>}>
                        <C.Calendar mode="single"
                        startDate={singleDate}
                        onSelection={(dates) => {
                            setSingleDate(dates.startDate);
                            toast.success(`Selected date: ${JSON.stringify(dates)}`);
                        }
                        } />
                    </C.Popover>
                </C.Stack>
                </C.View>
        <C.View bottom="larger" container top="larger">
            <C.Stack direction="row">
                <C.Stack direction="column" offset={30} width={40}>
                        <C.Stack bottom="medium">
                            <C.Field copy />
                        </C.Stack>
                    <C.Stack bottom="medium">
                        <C.Input copy />
                    </C.Stack>

                    <img src={file ? URL.createObjectURL(file) : ""} />
                <C.Upload
                    accept="image/*"
error
success
        
                    onUpload={(file) => {
                        setFile(file);
                    }
                    }
                />
                </C.Stack>
            </C.Stack>
            C</C.View>
            </C.Provider>
    )
}
