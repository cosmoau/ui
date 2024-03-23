/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { RadioButton } from "@phosphor-icons/react";
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
        <C.View
            app
            bottom="larger"
            inverted
            top="larger"
        >
                <C.Places
                    apiKey={process.env.GOOGLE_API_KEY || ""}
                    submit="DJKASDJFHSDJFSJDFJKSD"
                />
            <C.Stack direction="row">
                <C.Stack direction="column" offset={30} width={40}>
                    <C.Box header={<C.Text as="h4">Test</C.Text>}>
                        <C.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
                        </C.Text>
                    </C.Box>
                    </C.Stack>
                    <C.Stack bottom="larger" direction="column">

                        <C.Table

                            filters={<C.Input placeholder="Filter" />}

                            header={{
                                count: true,
                                full: true,
                                options: (
                                    <>
                                        <C.Button inline="small"><RadioButton /></C.Button>
                                        <C.Button inline="small"><RadioButton /></C.Button>
                                        <C.Button><RadioButton /></C.Button>
                                    </>
                                ),
                                title: "Table",
                            }}
                            identifier="table-a"
                            kbd
                            pagination
                            slim
                            sortable
                            tbody={
                                Array.from(Array(30).keys()).map((i) => [
                                    {
                                        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget',
                                        value: 'a',
                                    },
                                    {
                                        label: i === 10 ? '50%' : 'AUTO',
                                        value: 'b',
                                    },
                                    {
                                        label: i <= 10 ? '10%' : '30%',
                                        value: 'c',

                                    },
                                    {
                                        label: i <= 10 ? '10%' : '30%',
                                        value: 'c',

                                    },
                                ])
                            }
                            thead={[
                                "Column A",
                                "Column B",
                                "Column C",
                                "Column D",
                            ]}
                        />
                    CC.</C.Stack>
                    <C.Stack bottom="larger" direction="column">
                        <C.Table
    collapse
                            filters={<C.Input placeholder="Filter" />}

                            header={{
                                count: true,
                                options: (
                                    <>
                                        <C.Button inline="small"><RadioButton /></C.Button>
                                        <C.Button inline="small"><RadioButton /></C.Button>
                                        <C.Button><RadioButton /></C.Button>
                                    </>
                                ),
                                title: "Table",
                            }}
                            identifier="table-a"
                            kbd
                            pagination
                            slim
                            sortable
                            tbody={
                                Array.from(Array(30).keys()).map((i) => [
                                    {
                                        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget',
                                        value: 'a',
                                    },
                                    {
                                        label: i === 10 ? '50%' : 'AUTO',
                                        value: 'b',
                                    },
                                    {
                                        label: i <= 10 ? '10%' : '30%',
                                        value: 'c',

                                    },
                                    {
                                        label: i <= 10 ? '10%' : '30%',
                                        value: 'c',

                                    },
                                ])
                            }
                            thead={[
                                "Column A",
                                "Column B",
                                "Column C",
                                "Column D",
                            ]}
                        />
                    </C.Stack>
                <C.Stack direction="column">
                <C.Table

                    filters={<C.Input placeholder="Filter" />}

                    header={{
                        count: true,
                        options:  (
                            <>
                                <C.Button inline="small"><RadioButton /></C.Button>
                                <C.Button inline="small"><RadioButton /></C.Button>
                                <C.Button><RadioButton /></C.Button>
                            </>
                        ),
                        title: "Table",
                    }}
                    identifier="table-a"
                    kbd
                    pagination
                    slim
                    sortable
                    tbody={
                        Array.from(Array(30).keys()).map((i) => [
                            {
                                label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget',
                                value: 'a',
                            },
                            {
                                label: i === 10 ? '50%' : 'AUTO',
                                value: 'b',
                            },
                            {
                                label: i <= 10 ? '10%' : '30%',
                                value: 'c',

                            },
                            {
                                label: i <= 10 ? '10%' : '30%',
                                value: 'c',

                            },
                        ])
                    }
                    thead={[
                        "Column A",
                        "Column B",
                        "Column C",
                        "Column D",
                    ]}
                />
                </C.Stack>
                    </C.Stack>
            </C.View>
            <C.View bottom="larger" container top="larger">
                <C.Stack align="center" bottom="large">
                    <C.Select
                    filter
                    options={[{ label: "Option 1", value: "option1" }, { label: "Option 2", value: "option2",
                    
                    },
                    
                        { label: "Option 3", value: "option3" },
                        { label: "Option 4", value: "option4" },
                        { label: "Option 5", value: "option5" },
                    { label: "Option 6", value: "option6" },
                    { label: "Option 7", value: "option7" },
{ label: "Option 8", value: "option8" },
{ label: "Option 9", value: "option9" },
{ label: "Option 10", value: "option10" },
{ label: "Option 11", value: "option11" },
{ label: "Option 12", value: "option12" },
{ label: "Option 13", value: "option13" },
                    { label: "Option 14", value: "option14" },
                    { label: "Option 15", value: "option15" },
                    { label: "Option 16", value: "option16" },
                    { label: "Option 17", value: "option17" },
                    { label: "Option 18", value: "option18" },
                    { label: "Option 19", value: "option19" },
                    { label: "Option 20", value: "option20" },

]} trigger={<C.Input loading={false} type="numeric" />} />
                    <C.Input error errorMessage="errrrror bro!" />
                    <C.Input submit="yes" />
                    <C.Input copy reset submit="Submit" />
                    <C.Input loading />
                    </C.Stack>
        </C.View>
        <C.View bottom="larger" container top="larger">
            <C.Stack align="center" bottom="large">
                <C.Box>
                    <C.Accordion
                    defaultOpen={0}
                        options={[
                            { content: (<C.Text as="h3">Custom Content</C.Text>),
                            description: "",
                            title: "Item 1" },
                            { description: "Description for item 2\n\nTest new line", title: "Item 2" },
                            {
                                cta: [
                                    { label: "CTA 1", url: "https://example.com/cta1" },
                                    { label: "CTA 2", url: "https://example.com/cta2" },
                                ], description: "Description for item 3", title: "Item 3", },
                            { description: "Description for item 4", title: "Item 4"}
                        ]}
                    />
                </C.Box>
            </C.Stack>
        </C.View>
                <C.Text as="h2">Single date: {singleDate}</C.Text>
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
