/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CurrencyEth, Hexagon } from "@phosphor-icons/react";
import React, { ReactElement, useState } from "react";

import * as C from "../src/index";

export function App(): ReactElement {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <C.Provider dark={dark}>
      <C.View bottom="largest" container gradient inverted top="largest">
        <C.Text as="h1">This is the gradient.</C.Text>
      </C.View>

      <C.View bottom="largest" container top="largest">
        <C.Stack direction="row">
          <C.Stack direction="column">
            <C.Stack top="medium">
              <C.Places
                apiKey={process.env.GOOGLE_API_KEY || ""}
                handleAutocomplete={console.log}
                submit="DJKASDJFHSDJFSJDFJKSD"
              />
            </C.Stack>
            <C.Stack align="center">
              <C.Icon
                forceColor="default"
                forceSize={420}
                icon={<Hexagon weight="fill" />}
                inline="large"
              />
              <C.Icon
                forceColor="defaultHover"
                forceSize={420}
                icon={<Hexagon weight="fill" />}
                inline="large"
              />
              <C.Icon
                forceColor="blueBackground"
                forceSize={420}
                icon={<Hexagon weight="fill" />}
              />
            </C.Stack>
            <C.Stack top="larger">
              <C.Box
                css={{
                  borderRadius: "$large",
                }}>
                <C.Stack flexduo>
                  <C.Icon icon={<CurrencyEth />} inline="smaller" />
                  <C.Text link="default">This is a default link (at least in appearance)</C.Text>
                  <C.Icon icon={<CurrencyEth />} inline="smaller" />
                  <C.Text link="minimal">This is a minimal link (at least in appearance)</C.Text>
                  <C.Icon icon={<CurrencyEth />} inline="smaller" />

                  <C.Text link="alternate" onClick={(): void => setDark(!dark)}>
                    This too, and it toggles the theme
                  </C.Text>
                </C.Stack>
              </C.Box>
            </C.Stack>
            <C.Stack top="medium">
              <C.Box theme="fill">
                <C.Badge theme="alternate">Test</C.Badge>
                <C.Text as="span" highlight="alternate">
                  This is a heading (h1)
                </C.Text>
                <C.Text as="h2">This is a heading (h2)</C.Text>
                <C.Text as="h3">This is a heading (h3)</C.Text>
                <C.Text as="h4">This is a heading (h4)</C.Text>
                <C.Text as="h5">This is a heading (h5)</C.Text>
                <C.Text as="h6">This is a heading (h6)</C.Text>

                <C.Text accent as="p">
                  This is a paragraph
                </C.Text>
                <C.Stack top="small">
                  <C.Dialog small title="Open Dialog" trigger={<C.Button>Open Dialog</C.Button>}>
                    <C.Text as="h1">This is a heading (h1)</C.Text>
                  </C.Dialog>
                </C.Stack>
              </C.Box>
            </C.Stack>
            <C.Stack top="medium">
              <C.Badge inline="large">This is a badge</C.Badge>
              <C.Badge link theme="border">
                This is a badge
              </C.Badge>
            </C.Stack>
            <C.Stack top="largest">
              <C.Table
                bodyChildren={Array.from(Array(1000).keys()).map((i) => [
                  {
                    label: `Row ${i * 1}`,
                    value: i * 1,
                  },
                  {
                    label: `Row ${i * 2}`,
                    value: i * 2,
                  },
                  {
                    label: `Row ${i * 3}`,
                    value: i * 3,
                  },
                  {
                    label: `Row ${i * 4}`,
                    value: i * 4,
                  },
                  {
                    label: `Row ${i * 5}`,
                    value: i * 5,
                  },
                  {
                    label: `Row ${i * 6}`,
                    value: i * 6,
                  },
                  {
                    label: `Row ${i * 7}`,
                    value: i * 7,
                  },
                  {
                    label: `Row ${i * 8}`,
                    value: i * 8,
                  },
                  {
                    label: `Row ${i * 9}`,
                    value: i * 9,
                  },
                  {
                    label: `Row ${i * 10}`,
                    value: i * 10,
                  },
                  {
                    label: `Row ${i * 11}`,
                    value: i * 11,
                  },
                  {
                    label: `Row ${i * 12}`,
                    value: i * 13,
                  },
                  {
                    label: `Row ${i * 13}`,
                    value: i * 13,
                  },
                  {
                    label: `Row ${i * 14}`,
                    value: i * 14,
                  },
                  {
                    label: `Row ${i * 15}`,
                    value: i * 15,
                  },
                ])}
                filters={<C.Input placeholder="Filter" />}
                headChildren={[
                  "Column A",
                  "Column B",
                  "Column C",
                  "Column D",
                  "Column E",
                  "Column F",
                  "Column G",
                  "Column H",
                  "Column I",
                  "Column J",
                  "Column K",
                  "Column L",
                  "Column M",
                  "Column N",
                  "Column O",
                ]}
                header={{
                  count: "1000",
                  options: <C.Button>Options</C.Button>,
                  title: "Table",
                }}
                identifier="table"
                kbd
                pagination
                sortable
              />
            </C.Stack>
          </C.Stack>
        </C.Stack>
      </C.View>
    </C.Provider>
  );
}
