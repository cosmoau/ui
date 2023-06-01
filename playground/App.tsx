/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CurrencyEth } from "@phosphor-icons/react";
import React, { ReactElement } from "react";

import {
  Provider,
  View,
  Text,
  Button,
  Badge,
  Stack,
  Dialog,
  Avatar,
  Table,
  Places,
  Input,
  Box,
} from "../src/index";

export function App(): ReactElement {
  const temp = {
    "*": {
      height: "100%",
      opacity: 0.5,
      width: "100%",
    },
    display: "inline-block",
    height: "10rem",
    marginRight: "1rem",
    width: "5rem",
  };

  const [tempAddress, setTempAddress] = React.useState("");

  return (
    <Provider>
      <View bottom="largest" container gradient inverted top="largest">
        <Stack direction="row">
          <Stack
            direction="column"
            widthDesktop={80}
            widthLaptop={70}
            widthPhone={50}
            widthTablet={60}
            widthWide={90}>
            <Box closable>
              <h1>{tempAddress}</h1>
              <Text as="ul">
                <Text as="li">
                  Wow this is a{" "}
                  <Text as="span" highlight="green">
                    test
                  </Text>
                </Text>
                <Text as="li">test</Text>
                <li>test</li>
                <Text as="li">
                  Another wow a{" "}
                  <Text as="span" highlight="default">
                    test
                  </Text>
                </Text>
              </Text>
              <Text as="ol">
                <Text as="li">test</Text>
                <Text as="li">test</Text>
                <li>test</li>
              </Text>
            </Box>

            <Places
              apiKey={process.env.GOOGLE_API_KEY || ""}
              placeholder="Search"
              onAutocomplete={(data) => {
                console.log(data);
                setTempAddress(data?.address || "");
              }}
            />
          </Stack>
        </Stack>
      </View>
      <View container gradient top="largest">
        <Stack direction="row">
          <Stack direction="column">
            <Dialog title="Test" trigger={<Button inline="medium">Normal Dialog</Button>}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Button inline="medium">Test</Button>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
            </Dialog>
            <Dialog small title="Test 2" trigger={<Button inline="medium">Small Dialog</Button>}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
            </Dialog>
            <Dialog title="Test" trigger={<Button inline="medium">Normal Dialog</Button>}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </Text>
            </Dialog>
            <Button small>Small Button</Button>
          </Stack>
        </Stack>
      </View>
      <View bottom="largest" container top="largest">
        <Text as="h3" top="largest">
          Text as{" "}
          <Text as="span" highlight="green">
            h3 with top
          </Text>{" "}
          largest spacing and bottom default spacing (large) and default size (medium) and default
          weight (normal) and default color (black) and default align (left) and default transform
          (none) and default decoration (none) and default spacing (normal)
        </Text>
        <Text accent bottom="large">
          This is an accent text
        </Text>
        {"abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
          <Avatar key={letter} colors fallback={letter} />
        ))}
        <Badge icon={<CurrencyEth />}>Test</Badge>
        <Badge theme="red">Test small</Badge>
        <Badge theme="orange">Test small</Badge>
        <Badge theme="green">Test small</Badge>
        <Badge theme="blue">Test small</Badge>
        <Badge theme="purple">Test small</Badge>
        <Badge theme="border">Test small</Badge>
        <Button inline="medium">Testing</Button>
        <Button icon={<CurrencyEth />}>Testing</Button>
      </View>
      <View bottom="largest" container top="largest">
        <Stack align="center" bottom="larger" direction="row" flex="center">
          <Stack direction="column" width={33.33}>
            <Stack
              css={{
                borderTop: "0.4rem solid $default",
                justifyContent: "center",
                margin: "0 auto",
                width: "20rem",
              }}>
              <Stack
                css={{
                  backgroundColor: "$default !important",
                  height: "80rem",
                  margin: "0 auto",
                }}>
                <h1>default</h1>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="column" width={33.33}>
            <Stack
              css={{
                borderTop: "0.4rem solid $defaultHover",
                justifyContent: "center",
                margin: "0 auto",
                width: "20rem",
              }}>
              <Stack
                css={{
                  backgroundColor: "$defaultHover !important",
                  height: "80rem",
                }}>
                <h1>defaultHover</h1>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="column" width={33.33}>
            <Stack
              css={{
                borderTop: "0.4rem solid $default",
                justifyContent: "center",
                margin: "0 auto",
                width: "20rem",
              }}>
              <Stack
                css={{
                  backgroundColor: "$default !important",
                  height: "80rem",
                }}>
                <h1>default</h1>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </View>
      <View bottom="largest" container top="largest">
        <Stack bottom="larger" direction="row">
          <Stack direction="column">
            <Text as="h1">metricColorA/B</Text>
            <Stack
              css={{
                borderTop: "0.4rem solid $blueData",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$blueData",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.4rem solid $blueDataAlt",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$blueDataAlt",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.4rem solid $greenData",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$greenData",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.4rem solid $greenDataAlt",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$greenDataAlt",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.4rem solid $orangeData",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$orangeData",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.4rem solid $orangeDataAlt",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$orangeDataAlt",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.4rem solid $purpleData",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$purpleData",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.4rem solid $purpleDataAlt",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$purpleDataAlt",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.4rem solid $redData",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$redData",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.4rem solid $redDataAlt",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$redDataAlt",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack top="medium">
              <Text as="h1">colorText</Text>
              <Stack
                css={{
                  background: "$blueText",
                  display: "inline-block",
                  height: "10rem",
                  marginRight: "1rem",
                  width: "4rem",
                }}>
                &nbsp;
              </Stack>
              <Stack
                css={{
                  background: "$greenText",
                  display: "inline-block",
                  height: "10rem",
                  marginRight: "1rem",
                  width: "4rem",
                }}>
                &nbsp;
              </Stack>
              <Stack
                css={{
                  background: "$orangeText",
                  display: "inline-block",
                  height: "10rem",
                  marginRight: "1rem",
                  width: "4rem",
                }}>
                &nbsp;
              </Stack>
              <Stack
                css={{
                  background: "$purpleText",
                  display: "inline-block",
                  height: "10rem",
                  marginRight: "1rem",
                  width: "4rem",
                }}>
                &nbsp;
              </Stack>
              <Stack
                css={{
                  background: "$redText",
                  display: "inline-block",
                  height: "10rem",
                  marginRight: "1rem",
                  width: "4rem",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack top="medium">
              <Text as="h1">colorBackground</Text>
              <Stack
                css={{
                  background: "$blueBackground",
                  display: "inline-block",
                  height: "10rem",
                  marginRight: "1rem",
                  width: "4rem",
                }}>
                &nbsp;
              </Stack>
              <Stack
                css={{
                  background: "$greenBackground",
                  display: "inline-block",
                  height: "10rem",
                  marginRight: "1rem",
                  width: "4rem",
                }}>
                &nbsp;
              </Stack>
              <Stack
                css={{
                  background: "$orangeBackground",
                  display: "inline-block",
                  height: "10rem",
                  marginRight: "1rem",
                  width: "4rem",
                }}>
                &nbsp;
              </Stack>
              <Stack
                css={{
                  background: "$purpleBackground",
                  display: "inline-block",
                  height: "10rem",
                  marginRight: "1rem",
                  width: "4rem",
                }}>
                &nbsp;
              </Stack>
              <Stack
                css={{
                  background: "$redBackground",
                  display: "inline-block",
                  height: "10rem",
                  marginRight: "1rem",
                  width: "4rem",
                }}>
                &nbsp;
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </View>
      <View container inverted top="largest">
        <Stack flexduo>
          <Button block>Block Button A</Button>
          <Button block>Block Button B</Button>
        </Stack>
        <Stack top="largest">
          <Table
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
            filters={<Input placeholder="Filter" />}
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
              options: <Button>Options</Button>,
              title: "Table",
            }}
            identifier="table"
            kbd
            pagination
            sortable
          />
        </Stack>
      </View>
    </Provider>
  );
}
