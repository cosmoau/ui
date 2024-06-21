/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { FacebookLogo, RadioButton } from "@phosphor-icons/react";
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
      <C.Icon>
        <FacebookLogo />
      </C.Icon>
      <C.CalendarInline
        endDate={endDate}
        minLength={10}
        mode="range"
        startDate={startDate}
        title="Test"
        trigger={<C.Button>Calendar Inline</C.Button>}
        onSelection={(dates) => {
          setStartDate(dates.startDate);
          setEndDate(dates.endDate);
          toast.success(`Selected dates: ${JSON.stringify(dates)}`);
        }}
      />

      <C.View bottom="larger" container id="view-3" top="larger">
        <C.Stack align="center" bottom="large">
          <C.Text as="h1" bottom="large">
            <C.Text as="span" highlight="red">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget.
            </C.Text>
          </C.Text>
          <C.Menu
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },

              { label: "Option 3", value: "option3" },
              { label: "Option 4", value: "option4" },
              { label: "Option 5", value: "option5" },
              {
                label: "Option 6",
                sub: [
                  { label: "Sub Option 1", value: "sub-option1" },
                  { label: "Sub Option 2", value: "sub-option2" },
                  { label: "Sub Option 3", value: "sub-option3" },
                  { label: "Sub Option 4", value: "sub-option4" },
                ],
                value: "option6",
              },
            ]}
            trigger={<C.Button>Select</C.Button>}
          />
          <C.Select
            filter
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },

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
            ]}
            trigger={<C.Button>Select</C.Button>}
          />
          <C.Select
            filter
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },

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
            ]}
            trigger={<C.Input id="test-1" loading={false} name="test-1" type="numeric" />}
          />
          <C.Input error errorMessage="errrrror bro!" id="test-2" name="test-2" />
          <C.Input id="test-3" name="test-3" submit="yes" />
          <C.Input copy id="test-4" name="test-4" reset submit="Submit" />
          <C.Input id="test-5" loading name="test-5" />
          <C.Field copy id="test-4" name="test-4" reset submit="Submit" />
        </C.Stack>
      </C.View>
      <C.View bottom="larger" container id="view-1" inverted top="larger">
        <C.Stack direction="row">
          <C.Stack align="center" direction="column" width={50}>
            <C.Text as="h1">Small Dialog</C.Text>
            <C.Dialog
              forceHeight={70}
              small
              title="Dialog Title"
              trigger={<C.Button>Open Dialog</C.Button>}>
              <C.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
              </C.Text>
            </C.Dialog>
          </C.Stack>
          <C.Stack align="center" direction="column" width={50}>
            <C.Text as="h1">Normal Dialog</C.Text>
            <C.Dialog title="Dialog Title" trigger={<C.Button>Open Dialog</C.Button>}>
              <C.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
              </C.Text>
            </C.Dialog>
          </C.Stack>
        </C.Stack>
      </C.View>
      <C.View app bottom="larger" id="view-2-1" inverted top="larger">
        <C.Stack direction="row">
          <C.Stack align="center" direction="column">
            <C.Badge inline="medium" theme="red">
              Red
            </C.Badge>
            <C.Badge inline="medium" theme="blue">
              Blue
            </C.Badge>
            <C.Badge inline="medium" theme="green">
              Green
            </C.Badge>
            <C.Badge inline="medium" theme="purple">
              Purple
            </C.Badge>
            <C.Badge inline="medium" theme="orange">
              Orange
            </C.Badge>
          </C.Stack>
        </C.Stack>
      </C.View>
      <C.View app bottom="larger" id="view-2-1" top="larger">
        <C.Stack direction="row">
          <C.Stack align="center" direction="column">
            <C.Badge inline="medium" theme="red">
              Red
            </C.Badge>
            <C.Badge inline="medium" theme="blue">
              Blue
            </C.Badge>
            <C.Badge inline="medium" theme="green">
              Green
            </C.Badge>
            <C.Badge inline="medium" theme="purple">
              Purple
            </C.Badge>
            <C.Badge inline="medium" theme="orange">
              Orange
            </C.Badge>
            <C.Badge
              css={{
                backgroundColor: "$redData",
              }}
              inline="medium"
              theme="orange">
              Red Data
            </C.Badge>
            <C.Badge
              css={{
                backgroundColor: "$redDataAlt",
              }}
              inline="medium"
              theme="orange">
              Red Data Alt
            </C.Badge>
            <C.Badge
              css={{
                backgroundColor: "$blueData",
              }}
              inline="medium"
              theme="orange">
              Blue Data
            </C.Badge>
            <C.Badge
              css={{
                backgroundColor: "$blueDataAlt",
              }}
              inline="medium"
              theme="orange">
              Blue Data Alt
            </C.Badge>
            <C.Badge
              css={{
                backgroundColor: "$greenData",
              }}
              inline="medium"
              theme="orange">
              Green Data
            </C.Badge>
            <C.Badge
              css={{
                backgroundColor: "$greenDataAlt",
              }}
              inline="medium"
              theme="orange">
              Green Data Alt
            </C.Badge>
            <C.Badge
              css={{
                backgroundColor: "$purpleData",
              }}
              inline="medium"
              theme="orange">
              Purple Data
            </C.Badge>
            <C.Badge
              css={{
                backgroundColor: "$purpleDataAlt",
              }}
              inline="medium"
              theme="orange">
              Purple Data Alt
            </C.Badge>
            <C.Badge
              css={{
                backgroundColor: "$orangeData",
              }}
              inline="medium"
              theme="orange">
              Orange Data
            </C.Badge>
            <C.Badge
              css={{
                backgroundColor: "$orangeDataAlt",
              }}
              inline="medium"
              theme="orange">
              Orange Data Alt
            </C.Badge>
          </C.Stack>
        </C.Stack>
      </C.View>

      <C.View app bottom="larger" id="view-2" top="larger">
        <C.Stack direction="row">
          <C.Stack direction="column" width={33}>
            <C.Box
              closable
              css={{ background: "$defaultSubtle !important", overflow: "visible" }}
              cta="google.com"
              footer={<C.Text>defaultSubtle </C.Text>}
              header={<C.Text as="h3">defaultSubtle</C.Text>}
              theme="fill">
              <C.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
              </C.Text>
              <C.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
              </C.Text>
              <C.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
              </C.Text>
              <C.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
              </C.Text>
            </C.Box>
          </C.Stack>
          <C.Stack direction="column" width={33}>
            <C.Box
              css={{ overflow: "visible" }}
              footer={
                <C.Places apiKey={process.env.GOOGLE_API_KEY || ""} id="places" name="places" />
              }
              theme="fill">
              <C.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
              </C.Text>
            </C.Box>
          </C.Stack>

          <C.Stack direction="column" width={33}>
            <C.Box
              css={{ background: "$defaultHover !important", overflow: "visible" }}
              footer={<C.Text>defaultHover </C.Text>}
              theme="fill">
              <C.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
              </C.Text>
            </C.Box>
          </C.Stack>
        </C.Stack>
      </C.View>
      <C.View
        app
        bottom="larger"
        css={{
          backgroundColor: "$defaultSubtle !important",
        }}
        id="view-2"
        top="larger">
        <C.Stack direction="row">
          <C.Stack direction="column" width={33}>
            <C.Box
              css={{ background: "$defaultSubtle !important", overflow: "visible" }}
              footer={<C.Text>defaultSubtle </C.Text>}
              theme="fill">
              <C.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
              </C.Text>
            </C.Box>
          </C.Stack>
          <C.Stack direction="column" width={33}>
            <C.Box
              css={{ overflow: "visible" }}
              footer={
                <C.Places apiKey={process.env.GOOGLE_API_KEY || ""} id="places" name="places" />
              }
              theme="fill">
              <C.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
              </C.Text>
            </C.Box>
          </C.Stack>

          <C.Stack direction="column" width={33}>
            <C.Box
              css={{ background: "$defaultHover !important", overflow: "visible" }}
              footer={<C.Text>defaultHover </C.Text>}
              theme="fill">
              <C.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
              </C.Text>
            </C.Box>
          </C.Stack>
        </C.Stack>
      </C.View>
      <C.View>
        <C.Stack bottom="larger" direction="column">
          <C.Input id="table-search" name="table-search" placeholder="Filter" />
          <C.Table
            filters={<C.Input id="table-search" name="table-search" placeholder="Filter" />}
            header={{
              full: true,
              options: (
                <>
                  <C.Button inline="small">
                    <RadioButton />
                  </C.Button>
                  <C.Button inline="small">
                    <RadioButton />
                  </C.Button>
                  <C.Button>
                    <RadioButton />
                  </C.Button>
                </>
              ),
              title: "Table Table Table Table",
            }}
            identifier="table-a"
            kbd
            pagination
            sortable
            tbody={Array.from(Array(30).keys()).map((i) => [
              {
                label:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget",
                value: "a",
              },
              {
                label: i === 10 ? "50%" : "AUTO",
                value: "b",
              },
              {
                label: i <= 10 ? "10%" : "30%",
                value: "c",
              },
              {
                label: i <= 10 ? "10%" : "30%",
                value: "c",
              },
            ])}
            thead={["Column A", "Column B", "Column C", "Column D"]}
          />
          CC.
        </C.Stack>
      </C.View>
      <C.View>
        <C.Stack bottom="larger" direction="column">
          <C.Table
            collapse
            filters={<C.Input id="table-search-2" name="table-search-2" placeholder="Filter" />}
            header={{
              options: (
                <>
                  <C.Button inline="small">
                    <RadioButton />
                  </C.Button>
                  <C.Button inline="small">
                    <RadioButton />
                  </C.Button>
                  <C.Button>
                    <RadioButton />
                  </C.Button>
                </>
              ),
              title: "Table",
            }}
            identifier="table-a"
            kbd
            pagination
            sortable
            tbody={Array.from(Array(30).keys()).map((i) => [
              {
                label:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget",
                value: "a",
              },
              {
                label: i === 10 ? "50%" : "AUTO",
                value: "b",
              },
              {
                label: i <= 10 ? "10%" : "30%",
                value: "c",
              },
              {
                label: i <= 10 ? "10%" : "30%",
                value: "c",
              },
            ])}
            thead={["Column A", "Column B", "Column C", "Column D"]}
          />
        </C.Stack>
        <C.Stack direction="column">
          <C.Table
            filters={<C.Input id="table-search-3" name="table-search-3" placeholder="Filter" />}
            header={{
              options: (
                <>
                  <C.Button inline="small">
                    <RadioButton />
                  </C.Button>
                  <C.Button inline="small">
                    <RadioButton />
                  </C.Button>
                  <C.Button>
                    <RadioButton />
                  </C.Button>
                </>
              ),
              title: "Table",
            }}
            identifier="table-a"
            kbd
            pagination
            sortable
            tbody={Array.from(Array(30).keys()).map((i) => [
              {
                label:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget",
                value: "a",
              },
              {
                label: i === 10 ? "50%" : "AUTO",
                value: "b",
              },
              {
                label: i <= 10 ? "10%" : "30%",
                value: "c",
              },
              {
                label: i <= 10 ? "10%" : "30%",
                value: "c",
              },
            ])}
            thead={["Column A", "Column B", "Column C", "Column D"]}
          />
        </C.Stack>
      </C.View>
      <C.View bottom="larger" container gradient id="view-3" inverted top="larger">
        <C.Stack align="center" bottom="large">
          <C.Select
            filter
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },

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
            ]}
            trigger={<C.Input id="test-1" loading={false} name="test-1" type="numeric" />}
          />
          <C.Input error errorMessage="errrrror bro!" id="test-2" name="test-2" />
          <C.Input id="test-3" name="test-3" submit="yes" />
          <C.Input copy id="test-4" name="test-4" reset submit="Submit" />
          <C.Input id="test-5" loading name="test-5" />
        </C.Stack>
      </C.View>
      <C.View bottom="larger" container id="view-4" top="larger">
        <C.Stack align="center" bottom="large">
          <C.Box>
            <C.Accordion
              defaultOpen={0}
              options={[
                {
                  content: <C.Text as="h3">Custom Content</C.Text>,
                  description: "",
                  title: "Item 1",
                },
                { description: "Description for item 2\n\nTest new line", title: "Item 2" },
                {
                  cta: [
                    { label: "CTA 1", url: "https://example.com/cta1" },
                    { label: "CTA 2", url: "https://example.com/cta2" },
                  ],
                  description: "Description for item 3",
                  title: "Item 3",
                },
                { description: "Description for item 4", title: "Item 4" },
              ]}
            />
          </C.Box>
        </C.Stack>
      </C.View>
      <C.Text as="h2">Single date: {singleDate}</C.Text>
      <C.View bottom="larger" container id="view-5" top="larger">
        <C.Stack align="center" bottom="large">
          <C.Text as="h2">
            Range dates: {startDate} - {endDate}
          </C.Text>
          <C.Text as="h2">Single date: {singleDate}</C.Text>
        </C.Stack>
        <C.Stack align="center" bottom="medium">
          <C.Dialog small title="Calendar" trigger={<C.Button>Calendar Range</C.Button>}>
            <C.Calendar
              endDate={endDate}
              maxDate="2025-01-01"
              minDate="2023-01-01"
              minLength={10}
              mode="range"
              startDate={startDate}
              onSelection={(dates) => {
                setStartDate(dates.startDate);
                setEndDate(dates.endDate);
                toast.success(`Selected dates: ${JSON.stringify(dates)}`);
              }}
            />
          </C.Dialog>
          <C.Popover small trigger={<C.Button>Test Long Small</C.Button>}>
            <C.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quas facere odio
              obcaecati, cupiditate quibusdam eum explicabo sunt quasi repudiandae earum molestiae
              enim voluptatibus beatae praesentium. Sit magnam molestias unde!
            </C.Text>
            <C.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quas facere odio
              obcaecati, cupiditate quibusdam eum explicabo sunt quasi repudiandae earum molestiae
              enim voluptatibus beatae praesentium. Sit magnam molestias unde!
            </C.Text>
            <C.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quas facere odio
              obcaecati, cupiditate quibusdam eum explicabo sunt quasi repudiandae earum molestiae
              enim voluptatibus beatae praesentium. Sit magnam molestias unde!
            </C.Text>
          </C.Popover>
          <C.Popover trigger={<C.Button>Test Long</C.Button>}>
            <C.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quas facere odio
              obcaecati, cupiditate quibusdam eum explicabo sunt quasi repudiandae earum molestiae
              enim voluptatibus beatae praesentium. Sit magnam molestias unde!
            </C.Text>
            <C.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quas facere odio
              obcaecati, cupiditate quibusdam eum explicabo sunt quasi repudiandae earum molestiae
              enim voluptatibus beatae praesentium. Sit magnam molestias unde!
            </C.Text>
            <C.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quas facere odio
              obcaecati, cupiditate quibusdam eum explicabo sunt quasi repudiandae earum molestiae
              enim voluptatibus beatae praesentium. Sit magnam molestias unde!
            </C.Text>
          </C.Popover>
          <C.Popover small trigger={<C.Button>Test Short Small</C.Button>}>
            <C.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</C.Text>
          </C.Popover>
          <C.Popover trigger={<C.Button>Test Short</C.Button>}>
            <C.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</C.Text>
          </C.Popover>

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
              }}
            />
          </C.Popover>
        </C.Stack>
        <C.Stack align="center">
          <C.Popover trigger={<C.Button>Calendar Single</C.Button>}>
            <C.Calendar
              mode="single"
              startDate={singleDate}
              onSelection={(dates) => {
                setSingleDate(dates.startDate);
                toast.success(`Selected date: ${JSON.stringify(dates)}`);
              }}
            />
          </C.Popover>
        </C.Stack>
      </C.View>
      <C.View bottom="larger" container id="view-6" top="larger">
        <C.Stack direction="row">
          <C.Stack direction="column" offset={30} width={40}>
            <C.Stack bottom="medium">
              <C.Field copy name="field-1" />
            </C.Stack>
            <C.Stack bottom="medium">
              <C.Input copy name="input-100" />
            </C.Stack>

            <img src={file ? URL.createObjectURL(file) : ""} />
            <C.Upload
              accept="image/*"
              error
              maxFiles={3}
              multiple
              success
              onUpload={(files) => {
                setFile(files[0]);
                toast.success(`Uploaded: ${files[0].name}, total: ${files.length}`);
              }}
            />
          </C.Stack>
        </C.Stack>
        C
      </C.View>
    </C.Provider>
  );
}
