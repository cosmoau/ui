/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { RadioButton, SmileyMeh } from "@phosphor-icons/react";
import React, { ReactElement, useState } from "react";
import { toast } from "react-hot-toast";

import * as C from "../src/index";

import DateParser from "./dates";
export function App(): ReactElement {
  const {breakpoint, isPhone, isTablet, isLaptop, isDesktop, isWide} = C.useBreakpoints();
  const isDark = C.useTheme().isDarkTheme;

  // random between 100px and 1200px
  const randomHeight = Math.floor(Math.random() * 1100) + 100

  const [balance, setBalance] = useState<boolean>(false);
  const [tempInput, setTempInput] = useState<string>("");
  const [tempField, setTempField] = useState<string>("");
  const [tempText, setTempText] = useState<"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p">("h1");

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
    <C.Provider dark={isDark}>
      <C.View bottom="small" css={{
        borderBottom: '0.1rem solid $border'
      }} top="small">
        <C.Stack align="center">
          <C.Text as="small">
            breakpoint: {breakpoint} - {isPhone ? 'isPhone' : isTablet ? 'isTablet' : isLaptop ? 'isLaptop' : isDesktop ? 'isDesktop' : isWide ? 'isWide' : 'NOT KNOWN'}
          </C.Text>
        </C.Stack>
      </C.View>

      <C.View bottom="largest" container top="largest">
        <C.Stack bottom="largest">
          <C.ProviderToggle />
          <C.Box expandable expandableHeight={200}>
              <C.Text as="h1">
              Expander</C.Text>
              <C.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc.
              </C.Text>
              <C.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc.
              </C.Text>
              <C.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc.
              </C.Text>
              <C.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc.
              </C.Text>
              <C.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc.
              </C.Text>
              <C.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc.
              </C.Text>
              <C.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
                nunc.
              </C.Text>

            </C.Box>
        </C.Stack>
        <C.Stack align="center">
          <C.Popover trigger={<C.Button>Popover (default, large)</C.Button>}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultricies, nunc
            nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
            nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
            nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
            nunc
            
          </C.Popover>
          <C.Popover small trigger={<C.Button>Popover (small)</C.Button>}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultricies.

          </C.Popover>
          <C.Button inline="large" onClick={() => toast("C notess")}>
            Toast
          </C.Button>
          <C.Dialog
          small={randomHeight > 500}
          title="Dialog" trigger={<C.Button>Dialog</C.Button>}>
            <C.Stack css={{
              alignItems: 'center',
              backgroundColor: '$text',
              color: '$background',
              display: 'flex',
              height: randomHeight + 'px',
              justifyContent: 'center',
            }}>
              <C.Text as="h3">
                {randomHeight}
              </C.Text>
              
            </C.Stack>
            {
              Array.from(Array(Math.floor(Math.random() * 900) + 100).keys()).map((i) => (
                <C.Text as="h1" key={i}>
                  Heading {i}
                </C.Text>
              ))
            }
          </C.Dialog>
          <C.Select
            filter
            last
            options={[
              {
                icon: <SmileyMeh />,
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
            ]}
            selection={["/page2"]}
            trigger={<C.Button>Select</C.Button>}
            onSelection={(value, label) => toast.error(`Page selected: ${value} - ${label}`)}
          />
        </C.Stack>
        <C.Stack align="center" top="large">
          <C.Menu
            options={[
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
            ]}
            selection="/page2"
            trigger={<C.Button>Menu</C.Button>}
            onSelection={(value, label) => toast.error(`Page selected: ${value} - ${label}`)}>
            <C.Button block theme="solid">
              Sign In
            </C.Button>
            <C.Button block css={{ marginTop: "$small" }}>
              Sign Up
            </C.Button>
            <C.Text accent as="small" top="medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
            </C.Text>
          </C.Menu>
        </C.Stack>
      </C.View>

      <C.View bottom="largest" container gradient top="largest">
        <C.Stack align="center">
          <C.Button inline="large" onClick={(): void => handleTextCycle()}>
            Cycle Text
          </C.Button>
          <C.Button onClick={() => setBalance(!balance)}>Toggle Balance</C.Button>
          <C.Text as="h1" top="larger">
            Balance
          </C.Text>
          <C.Text as={tempText} balanced={balance}>
            {tempText} balancing {balance ? "on" : "off"}
          </C.Text>
          <C.Text as={tempText} balanced={balance}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultricies, nunc
            nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
            nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
            nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
            nunc
          </C.Text>
          <C.Text as="p" balanced={balance}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultricies, nunc
            nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
            nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
            nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
            nunc
          </C.Text>
          <C.Input copy error errorMessage="
          This is an error message, it can be as long as you want it to be. It can also be as short as you want it to be.
          " loading placeholder="Input" submit="Save" submitValid={() => true}/>
        </C.Stack>
        C
      </C.View>
      <C.View bottom="largest" container top="largest">
        <C.Form
          listen
          submit="Submit"
          submitFunction={() => toast("submitted")}
          submitValid={tempInput.length > 0 && tempField.length > 0}>
              <C.Input error errorMessage="
          This is an error message, it can be as long as you want it to be. It can also be as short as you want it to be.
          " placeholder="Input" onChange={(e) => setTempInput(e.target.value)} />
          <C.Input copy error errorMessage="
          This is an error message, it can be as long as you want it to be. It can also be as short as you want it to be.
          " placeholder="Input" reset submit="Save" onChange={(e) => setTempInput(e.target.value)} />
          <C.Field error errorMessage="
          This is an error message, it can be as long as you want it to be. It can also be as short as you want it to be.
          " placeholder="Field" reset submit="Save" onChange={(e) => setTempField(e.target.value)} />
        </C.Form>
      </C.View>
      <C.View bottom="largest" container top="largest">
        <C.Input loading placeholder="Filter" reset submit="Save" submitFunction={(value) => toast(value)} />
        <C.Field loading placeholder="Filter" reset submit="Save" submitFunction={(value) => toast(value)} />
      </C.View>
      <C.View bottom="largest" container top="largest">
          <C.Stack align="center" bottom="large">
            <C.Badge inline="small" link theme="orange">
              Test orange button
            </C.Badge>
            <C.Badge inline="small" theme="red">
              Test red button
            </C.Badge>
            <C.Badge inline="small" theme="purple">
              Test purple button
            </C.Badge>
            <C.Badge inline="small" theme="blue">
              Test blue button
            </C.Badge>
            <C.Badge inline="small" theme="green">
              Test green button
            </C.Badge>
          </C.Stack>
          <C.Stack flexduo>
            <C.Box theme="error">
            <C.Text as='h4'>
              Title
            </C.Text>
              Error box
            </C.Box>
          <C.Box theme="warning">
            <C.Text as='h4'>
              Title
            </C.Text>
            Warning box
          </C.Box>
          <C.Box theme="success">
            <C.Text as='h4'>
              Title
            </C.Text>
            Warning box
          </C.Box>
          </C.Stack>
          </C.View>
      <C.View bottom="largest" container top="largest">
        <C.Stack align="center" bottom="large">
          <C.Badge inline="small" theme="orange">
            Test orange button
          </C.Badge>
          <C.Badge inline="small" theme="red">
            Test red button
          </C.Badge>
          <C.Badge inline="small" theme="purple">
            Test purple button
          </C.Badge>
          <C.Badge inline="small" theme="blue">
            Test blue button
          </C.Badge>
          <C.Badge inline="small" theme="green">
            Test green button
          </C.Badge>
        </C.Stack>
        <C.Stack flexduo>
          <C.Box theme="error">
            <C.Text as='h4'>
              Title
            </C.Text>
            Error box
          </C.Box>
          <C.Box theme="warning">
            <C.Text as='h4'>
              Title
            </C.Text>
            Warning box
          </C.Box>
          <C.Box theme="success">
            <C.Text as='h4'>
              Title
            </C.Text>
            Warning box
          </C.Box>
        </C.Stack>
      </C.View>
      <C.View bottom="largest" container top="largest">
        <C.Stack bottom="largest" direction="row">
          <C.Stack direction="column" offset={33.33} width={33.33}>
            <DateParser />
          </C.Stack>
        </C.Stack>
        <C.Stack direction="row">

          <C.Stack direction="column" width={33.33}>
            <C.Box footer={<C.Button>Call to action</C.Button>} header={<h1>test</h1>}>
              <C.Text as="h5">Lorem A - First heading</C.Text>
              <C.Stack>
                <h1>lorem ipsum</h1>
              </C.Stack>
              <C.Stack>
                <h1>lorem ipsum</h1>
              </C.Stack>
              <C.Stack>
                <h1>lorem ipsum</h1>
                <h1>lorem ipsum</h1> <h1>lorem ipsum</h1> <h1>lorem ipsum</h1> <h1>lorem ipsum</h1>
                <h1>lorem ipsum</h1>
                <h1>lorem ipsum</h1>
                <h1>lorem ipsum</h1>
              </C.Stack>
              <C.Text accent>Lorem ipsum dolor sit amet.</C.Text>
            </C.Box>
          C.</C.Stack>
          <C.Stack direction="column" width={33.33}>
            <C.Box footer={<C.Button>Call to action</C.Button>}>
              <C.Text as="h5">Lorem A - First heading</C.Text>
              <C.Text accent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </C.Text>
            </C.Box>
          </C.Stack>
          <C.Stack direction="column" width={33.33}>
            <C.Box footer={<C.Button>Call to action</C.Button>}>
              <C.Text as="h5">Lorem A - First heading</C.Text>
              <C.Text accent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget.</C.Text>
            </C.Box>
          </C.Stack>
        </C.Stack>
      </C.View>
      <C.View bottom="largest" container top="largest">
        <C.Stack direction="row">
          <C.Stack direction="column">
            <C.Stack top="medium">
              <C.Text as="h1">Google Places</C.Text>
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
                  <C.Dialog
                  lightbox

                    title="El Camino"
                    trigger={<C.Button>Open Dialog</C.Button>}>
                    <img
                      src="https://cdn05.carsforsale.com/0088abd885617999338fcdf67f942ebc65/800x600/1983-chevrolet-el-camino-base-2dr-standard-cab.jpg"
                      style={{
                        borderRadius: "0.5rem",
                        display: "block",
                        height: "100%",
                        margin: "0 auto",
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        width: "100%",
                      }}
                    />
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
              collapse={isPhone}
              columns={
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
              
                filters={<C.Input placeholder="Filter" />}
                header={{
                  count: 10004,
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
                rows={[
                  "Column A",
                  "Column B",
                  "Column C",
                  "Column D",
                ]}
                sortable
              />
            </C.Stack>
            <C.Stack top="largest">
              <C.Table
                collapse={isPhone}
                columns={
                  Array.from(Array(30).keys()).map((i) => [
                    {
                      label: `${i} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget`,
                      value: 'a',
                    },
                    {
                      label: i + 1,
                      value: i + 1,
                    },
                    {
                      label: i <= 10 ? i * i * i * i * i : `${i} Lorem ipsum dolor sit amet, consectetur`,
                      value: 'c',

                    },
                  ])
                }

                filters={<C.Input placeholder="Filter" />}
                header={{
                  count: 10004,
                  options: (
                    <>
                      <C.Button inline="small"><RadioButton /></C.Button>
                      <C.Button inline="small"><RadioButton /></C.Button>
                      <C.Button><RadioButton /></C.Button>
                    </>
                  ),
                  title: "Table",
                }}
                identifier="table-b"
                kbd
                pagination
                rows={[
                  "Column A",
                  "Column B",
                  "Column C",
                ]}
                sortable
              />
            </C.Stack>
          </C.Stack>
        </C.Stack>
      </C.View>
      <C.View bottom="largest" container top="largest">
        <C.Stack align="center">
          <C.Popover trigger={<C.Button>Popover (default, large)</C.Button>}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultricies, nunc
            nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
            nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
            nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultricies, nunc
            nunc

          </C.Popover>
          <C.Popover small trigger={<C.Button>Popover (small)</C.Button>}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultricies.

          </C.Popover>
          <C.Select
            filter
            last
            options={[
              {
                icon: <SmileyMeh />,
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
            ]}
            selection={["/page2"]}
            trigger={<C.Button>Select</C.Button>}
            onSelection={(value, label) => toast.error(`Page selected: ${value} - ${label}`)}
          />
        </C.Stack>
        <C.Stack align="center" top="large">
          <C.Menu
            options={[
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
            ]}
            selection="/page2"
            trigger={<C.Button>Menu</C.Button>}
            onSelection={(value, label) => toast.error(`Page selected: ${value} - ${label}`)}>
            <C.Button block theme="solid">
              Sign In
            </C.Button>
            <C.Button block css={{ marginTop: "$small" }}>
              Sign Up
            </C.Button>
            <C.Text accent as="small" top="medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
            </C.Text>
          </C.Menu>
        </C.Stack>
      </C.View>
      <C.LoadingOverlay />
    </C.Provider>
  );
}
