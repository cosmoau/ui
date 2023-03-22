import { CurrencyEth } from "phosphor-react";
import React, { ReactElement } from "react";

import {
  Provider,
  View,
  Code,
  Table,
  Text,
  Button,
  Dialog,
  Badge,
  Box,
  Select,
  Stack,
  Avatar,
  Input,
} from "../src/index";

export function App(): ReactElement {
  return (
    <Provider>
      <View bottom="largest" container top="largest">
        <Stack bottom="larger" direction="row">
          <Stack direction="column">
            <Text as="h1">metricColorA/B</Text>
            <Stack
              css={{
                background: "$metricBlueA",
                display: "inline-block",
                height: "10rem",
                marginRight: "1rem",
                width: "4rem",
              }}>
              &nbsp;
            </Stack>
            <Stack
              css={{
                background: "$metricBlueB",
                display: "inline-block",
                height: "10rem",
                marginRight: "1rem",
                width: "4rem",
              }}>
              &nbsp;
            </Stack>
            <Stack
              css={{
                background: "$metricGreenA",
                display: "inline-block",
                height: "10rem",
                marginRight: "1rem",
                width: "4rem",
              }}>
              &nbsp;
            </Stack>
            <Stack
              css={{
                background: "$metricGreenB",
                display: "inline-block",
                height: "10rem",
                marginRight: "1rem",
                width: "4rem",
              }}>
              &nbsp;
            </Stack>
            <Stack
              css={{
                background: "$metricOrangeA",
                display: "inline-block",
                height: "10rem",
                marginRight: "1rem",
                width: "4rem",
              }}>
              &nbsp;
            </Stack>
            <Stack
              css={{
                background: "$metricOrangeB",
                display: "inline-block",
                height: "10rem",
                marginRight: "1rem",
                width: "4rem",
              }}>
              &nbsp;
            </Stack>
            <Stack
              css={{
                background: "$metricPurpleA",
                display: "inline-block",
                height: "10rem",
                marginRight: "1rem",
                width: "4rem",
              }}>
              &nbsp;
            </Stack>
            <Stack
              css={{
                background: "$metricPurpleB",
                display: "inline-block",
                height: "10rem",
                marginRight: "1rem",
                width: "4rem",
              }}>
              &nbsp;
            </Stack>
            <Stack
              css={{
                background: "$metricRedA",
                display: "inline-block",
                height: "10rem",
                marginRight: "1rem",
                width: "4rem",
              }}>
              &nbsp;
            </Stack>
            <Stack
              css={{
                background: "$metricRedB",
                display: "inline-block",
                height: "10rem",
                marginRight: "1rem",
                width: "4rem",
              }}>
              &nbsp;
            </Stack>
            <Stack
              css={{
                background: "$metricYellowA",
                display: "inline-block",
                height: "10rem",
                marginRight: "1rem",
                width: "4rem",
              }}>
              &nbsp;
            </Stack>
            <Stack
              css={{
                background: "$metricYellowB",
                display: "inline-block",
                height: "10rem",
                marginRight: "1rem",
                width: "4rem",
              }}>
              &nbsp;
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
              <Stack
                css={{
                  background: "$yellowText",
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
              <Stack
                css={{
                  background: "$yellowBackground",
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
        <Stack bottom="larger" direction="row">
          <Stack direction="column">
            <Text as="h1">Scaling Test</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec Lorem ipsum dolor sit
              amet, consectetur.
            </Text>
            <Text accent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec Lorem ipsum dolor sit
              amet, consectetur.
            </Text>
          </Stack>
        </Stack>
      </View>
      <View bottom="largest" container top="largest">
        <Stack bottom="larger" direction="row">
          <Select
            horizontal="left"
            options={[
              { label: "Test", value: "test" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
              { label: "Test 2", value: "test2" },
            ]}
            selection="test"
            trigger={<Button>Test</Button>}
          />
        </Stack>
        <Stack direction="row">
          <Stack direction="column">
            <Stack bottom="medium">
              <Avatar fallback="JD" />
            </Stack>
            <Stack bottom="small">
              <Badge copy copyText="green" icon={<Avatar fallback="JD" />} theme="green">
                A green badge
              </Badge>
            </Stack>
            <Stack bottom="small">
              <Badge theme="red">A red badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge theme="orange">An orange badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge theme="yellow">A yellow badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge theme="purple">A purple badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge theme="blue">A blue badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge icon={<CurrencyEth />} theme="blue">
                A blue badge
              </Badge>
            </Stack>
            <Stack bottom="small">
              <Badge icon={<CurrencyEth />} iconOnly>
                An icon only badge
              </Badge>
            </Stack>
          </Stack>
        </Stack>
      </View>
      <View bottom="largest" container inverted top="largest">
        <Stack direction="row">
          <Stack direction="column">
            <Stack bottom="small">
              <Badge theme="green">An inverted green badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge theme="red">An inverted red badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge theme="orange">An inverted orange badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge theme="yellow">An inverted yellow badge</Badge>
            </Stack>

            <Stack bottom="small">
              <Badge theme="purple">An inverted purple badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge theme="blue">An inverted blue badge</Badge>
            </Stack>
            <Stack bottom="small">
              <Badge icon={<CurrencyEth />} iconOnly>
                An icon only badge
              </Badge>
            </Stack>
          </Stack>
        </Stack>
      </View>
      <View bottom="largest" container inverted top="largest">
        <Dialog trigger={<Button>Test</Button>}>
          <Text as="h3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
          </Text>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
          </Text>
        </Dialog>

        <Badge closable>Test</Badge>
        <Text as="h1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text as="h2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text as="h3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text as="h4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text as="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text as="h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text accent as="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec? Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec! Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nullam auctor, nisl nec.
        </Text>

        <Text as="small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text as="label">
          This is a label Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
          nisl nec
        </Text>
        <Code>
          Test Test Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest
          Test Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test
          Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test
          TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test
          TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test Test Test Test Test
          Test Test Test Test Test Test
        </Code>
        <Code>Test T</Code>
      </View>
      <View
        bottom="largest"
        container
        css={{
          darkThemeSpec: {
            paddingTop: 0,
          },
        }}
        top="largest">
        <Box minimal>
          <Stack
            css={{
              padding: "$small",
            }}>
            <Input copy placeholder="Search" />
          </Stack>
          <Table
            bodyChildren={[
              [{ value: 3 }, { value: 5 }],
              [{ value: 5 }, { value: 10 }],
              [{ value: 400 }, { value: 500 }],
            ]}
            defaultDirection="desc"
            defaultSort={1}
            headChildren={["Head 1", "Head 2"]}
            rowNumbers
            sort
          />
        </Box>
      </View>
    </Provider>
  );
}
