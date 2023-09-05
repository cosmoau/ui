/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { ReactElement, useState } from "react";
import { toast } from "react-hot-toast";

import * as C from "../src/index";

import DateParser from "./dates";
export function App(): ReactElement {
  const [balance, setBalance] = useState<boolean>(false);
  const [tempInput, setTempInput] = useState<string>("");
  const [tempField, setTempField] = useState<string>("");
  const [tempText, setTempText] = useState<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'>("h1");

  function handleTextCycle(): void {
    switch (tempText) {
      case "h1":
        setTempText("h2");
        break;
      case "h2":
        setTempText("h3");
        break;
      case "h3":
        setTempText("h4");
        break;
      case "h4":
        setTempText("h5");
        break;
      case "h5":
        setTempText("h6");
        break;
      case "h6":
        setTempText("p");
        break;
      case "p":
        setTempText("h1");
        break;
      default:
        setTempText("h1");
        break;
    }
  }

  return (
    <C.Provider>
      <C.View bottom="largest" container gradient inverted top="largest">
        <C.Stack align="center">
          <C.Select options={[
            {
              label: "Home",
              value: "/page1",
            },
            {
              label: "Pricing",
              value: "/page2",
            },
            {
              label: "Enterprise",
              value: "/page3",
            },
            {
              label: "Platform",
              value: "/page4",
            },
            {
              label: "About",
              value: "/page5",
            },
            {
              label: "Blog",
              value: "/page6",
            },
            {
              label: "Contact",
              value: "/page7",
            },
            ...Array.from(Array(100).keys()).map((i) => ({
              label: `Option ${i}`,
              value: `Option ${i}`,
            })),
            
          ]} selection={["/page2"]}
            trigger={<C.Button>Menu</C.Button>}
            onSelection={(value, label) => toast.error(`Page selected: ${value} - ${label}`)}
         />
          </C.Stack>
        <C.Stack align="center" top="large">
          <C.Menu options={[
            {
              label: "Home",
              value: "/page1",
            },
            {
              label: "Pricing",
              value: "/page2",
            },
            {
              label: "Enterprise",
              value: "/page3",
            },
            {
              label: "Platform",
              value: "/page4",
            },
            {
              label: "About",
              value: "/page5",
            },
            {
              label: "Blog",
              value: "/page6",
            },
            {
              label: "Contact",
              value: "/page7",
            },
          ]} selection="/page2"
          trigger={<C.Button>Menu</C.Button>}
          onSelection={(value, label) => toast.error(`Page selected: ${value} - ${label}`)}
          >
            <C.Button block theme="solid">Sign In</C.Button>
            <C.Button block css={{marginTop: '$small'}}>Sign Up</C.Button>
            <C.Text accent as="small" top='medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
            </C.Text>
          </C.Menu>
          </C.Stack>
      </C.View>

      <C.View bottom="largest" container gradient inverted top="largest">
        <C.Stack align="center">
          <C.Button inline="large" onClick={(): void => handleTextCycle()}>Cycle Text</C.Button>
      <C.Button onClick={() => setBalance(!balance)}>Toggle Balance</C.Button>
        <C.Text as="h1" top="larger">Balance</C.Text>
        <C.Text as={tempText} balanced={balance}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
          ultricies ultricies, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec
          euismod, nisl eget ultricies ultricies, nunc nunc aliquet nunc, vitae aliquam nunc nunc
          vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc nunc aliquet nunc, vitae
          aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc nunc
          </C.Text>
            <C.Text as='p' balanced={balance}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
          ultricies ultricies, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec
          euismod, nisl eget ultricies ultricies, nunc nunc aliquet nunc, vitae aliquam nunc nunc
          vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc nunc aliquet nunc, vitae
          aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc nunc
          </C.Text>
          </C.Stack>
      C</C.View>
      <C.View bottom="largest" container top="largest">
        <C.Form
          listen
          submit="Submit"
          submitFunction={() => toast("submitted")}
          submitValid={tempInput.length > 0 && tempField.length > 0}>
          <C.Input
            placeholder="Input"
            reset
            submit="Save"
            onChange={(e) => setTempInput(e.target.value)}
          />
          <C.Field
            placeholder="Field"
            reset
            submit="Save"
            onChange={(e) => setTempField(e.target.value)}
          />
        </C.Form>
      </C.View>
      <C.View bottom="largest" container top="largest">
        <C.Input
          loading
          placeholder="Filter"
          reset
          submit="Save"
          submitFunction={(value) => toast(value)}
        />
        <C.Field
          loading
          placeholder="Filter"
          reset
          submit="Save"
          submitFunction={(value) => toast(value)}
        />
      </C.View>
      <C.View bottom="largest" container top="largest">
        <C.Stack bottom="largest" direction="row">
          <C.Stack direction="column" offset={33.33} width={33.33}>
          <DateParser />
        </C.Stack>
        </C.Stack>
        <C.Stack direction="row">
          <C.Stack direction="column" width={33.33}>
            <C.Box footer={
              <C.Button>Call to action</C.Button>
            } header={
              <h1>test</h1>
            }>
              <C.Text as="h5">
                Lorem A - First heading
              </C.Text>
              <C.Stack>
                <h1>
                  lorem ipsum
                </h1>
              </C.Stack>
              <C.Stack>
                <h1>
                  lorem ipsum
                </h1>
              </C.Stack>
              <C.Stack>
                <h1>
                  lorem ipsum
                </h1>
                <h1>
                  lorem ipsum
                </h1>  <h1>
                  lorem ipsum
                </h1>  <h1>
                  lorem ipsum
                </h1>  <h1>
                  lorem ipsum
                </h1>
                <h1>
                  lorem ipsum
                </h1>
                <h1>
                  lorem ipsum
                </h1>
                <h1>
                  lorem ipsum
                </h1>
              </C.Stack>
              <C.Text accent>
                Lorem ipsum dolor sit amet.
              </C.Text>
            </C.Box>
          </C.Stack>
          <C.Stack direction="column" width={33.33}>
            <C.Box footer={
              <C.Button>Call to action</C.Button>
            }>
              <C.Text as="h5">
                Lorem A - First heading
              </C.Text>
              <C.Text accent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 

              </C.Text>
            </C.Box>
          </C.Stack>
          <C.Stack direction="column" width={33.33}>
            <C.Box footer={
              <C.Button>Call to action</C.Button>
            }>
              <C.Text as="h5">
                Lorem A - First heading
              </C.Text>
              <C.Text accent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget.
              </C.Text>
            </C.Box>
          </C.Stack>
         
          </C.Stack>
      </C.View>
      <C.View bottom="largest" container top="largest">
        <C.Stack direction="row">
          <C.Stack direction="column">
            <C.Stack top="medium">
              <C.Text as="h1">
                Google Places
              </C.Text>
              <C.Places
                apiKey={process.env.GOOGLE_API_KEY || ""}
                handleAutocomplete={console.log}
                submit="DJKASDJFHSDJFSJDFJKSD"
              />
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
                    label: `Column 1 - ${i * 1}`,
                    value: i * 1,
                  },
                  {
                    label: `Column 2 - ${i * 2}`,
                    value: i * 2,
                  },
                  {
                    label: `Column 3 - ${i * 3}`,
                    value: i * 3,
                  },
                  {
                    label: `Column 4 - ${i * 4}`,
                    value: i * 4,
                  },
                  {
                    label: `Column 5 - ${i * 5}`,
                    value: i * 5,
                  },
                ])}
                collapse
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
      C</C.View>
    </C.Provider>
  );
}
