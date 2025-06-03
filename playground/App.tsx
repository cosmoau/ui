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
  const [viewStartDate, setViewStartDate] = useState<string>("");
  const [viewEndDate, setViewEndDate] = useState<string>("");
  const [singleDate, setSingleDate] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [tableFilter, setTableFilter] = useState("");
  const { isDarkTheme } = C.useTheme();

  return (
    <C.Provider dark={isDarkTheme}>
      <C.ProviderToggle />
      <C.LoadingOverlay title="Loading..." />
      <C.Stack bottom="largest">
        <C.Stack>
          <C.Icon inline="small">
            <FacebookLogo />
          </C.Icon>
          <C.Button inline="small" theme="cosmo">
            Cosmo Button
          </C.Button>
          <C.Text as="span" highlight="cosmo">
            Label
          </C.Text>
        </C.Stack>
        <C.Stack top="small">
          <C.Icon inline="small">
            <FacebookLogo />
          </C.Icon>
          <C.Text as="small" inline="auto">
            Label
          </C.Text>
        </C.Stack>
      </C.Stack>
      <C.Stack flexduo>
        <C.Text>
          Flexduo side 2: Lorem{" "}
          <C.Text as="a" href="/start" inline="smallest" link="blog" target="_blank">
            Flexduo side 1
          </C.Text>
          ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur
          adipiscing elit. Donec euismod, nisl eget
        </C.Text>
      </C.Stack>
      <C.Text inline="small">Test inlining</C.Text>
      <C.Button onClick={() => toast.success("Hello toast!")}>Toast</C.Button>
      <C.Icon>
        <FacebookLogo />
      </C.Icon>
      <h1>
        {JSON.stringify({
          startDate,
          endDate,
          viewStartDate,
          viewEndDate,
        })}
      </h1>
      <C.CalendarInline
        blockedDates={["2024-04-05", "2024-04-20", "2024-05-05"]}
        description="From $200 /night (savings applied)"
        endDate={endDate}
        minLength={0}
        mode="range"
        startDate={startDate}
        title="Test"
        trigger={<C.Button>Calendar Inline</C.Button>}
        viewDate="2024-04-01"
        onSelection={(dates) => {
          setStartDate(dates.startDate);
          setEndDate(dates.endDate);
          toast.success(`Selected dates: ${JSON.stringify(dates)}`);
        }}
        onViewChange={({ startDate, endDate }) => {
          setViewStartDate(startDate);
          setViewEndDate(endDate);
        }}
      />
      <C.Popover trigger={<C.Button>Calendar Months</C.Button>}>
        <C.CalendarMonths
          maxDate="2026-05-01"
          minDate="2020-04-01"
          selectedDate={selectedDate}
          viewDate="2021-04-01"
          onSelection={(date) => {
            setSelectedDate(date);
            toast.success(`Selected month: ${date}`);
          }}
        />
      </C.Popover>

      <C.View bottom="larger" container id="view-3" top="larger">
        <C.Stack align="center" bottom="large">
          <C.Text as="h1" bottom="large">
            <C.Text as="span" highlight="red">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget.
            </C.Text>
          </C.Text>
          <C.Text as="h1" bottom="large">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Donec euismod, nisl eget. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Donec euismod, nisl eget.
          </C.Text>
          <C.Text as="h1" balanced bottom="large">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Donec euismod, nisl eget. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Donec euismod, nisl eget.
          </C.Text>
          <C.Menu
            full
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },

              { label: "Option 3", value: "option3" },
              { label: "Option 4", value: "option4" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
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
            trigger={<C.Button>MENU MENU </C.Button>}
          />
          <C.Select
            filter
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },

              { label: "Option 3", value: "option3" },
              { label: "Option 4", value: "option4" },
              { label: "Option 5", value: "option5" },
              { icon: <FacebookLogo />, label: "Option 6", value: "option6" },
              {
                icon: (
                  <C.Icon>
                    <FacebookLogo />
                  </C.Icon>
                ),
                label: "Option 7",
                value: "option7",
              },
              { icon: <C.Avatar fallback="s" />, label: "Option 8", value: "option8" },
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
            height={50}
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
          <C.Input copy id="table-search" name="table-search" placeholder="Filter" />
          <C.Table
            filters={
              <C.Input
                id="table-search"
                name="table-search"
                placeholder="Filter"
                onChange={(e) => setTableFilter(e.target.value)}
              />
            }
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
            tbody={Array.from(Array(30).keys())
              .map((i) => [
                {
                  label: i + "a",
                  value: i + "a",
                },
                {
                  label: i + "b",
                  value: i * 2 + "b",
                },
                {
                  label: i + "c",
                  value: i * 3 + "c",
                },
                {
                  label: i + "d",
                  value: i * 4 + "d",
                },
              ])
              .filter((row) => row[0].label.includes(tableFilter))}
            thead={["Column A", "Column B", "Column C"]}
          />
          CC.
        </C.Stack>
      </C.View>
      <C.View>
        <C.Stack bottom="larger" direction="column">
          <C.Table
            collapse
            collapseSortable
            filters={<C.Input id="table-search-2" name="table-search-2" placeholder="Filter" />}
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
                  description:
                    "We allow early check-ins and late check-outs, but this is always dependent on availability. To secure your adjusted arrival or departure time, please submit a request through our ‘Guest Portal’ link, which you’ll see when booking and can access after verification. Please keep in mind that this is only a request and requires approval from our Guest Support team. If you request too far in advance, we may ask you to contact us again closer to your arrival date. Requests for early check-in or late check - out may be declined for reasons such as back-to-back reservations or if another guest has already been approved for an altered check-in /check-out time. If you have any questions, please contact our team through your booking channel.",
                  title: "Are early check-ins and late check-outs available with Cosmo properties?",
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
          <C.Dialog small title="Calendar" trigger={<C.Button>Calendar Range RESTRICTED</C.Button>}>
            <C.Calendar
              endDate={endDate}
              maxDate="2025-01-01"
              maxLength={10}
              minDate="2023-01-01"
              minLength={5}
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
