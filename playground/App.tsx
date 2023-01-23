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
} from "../src/index";

export function App(): ReactElement {
  return (
    <Provider>
      <View bottom="largest" container top="largest">
        <Stack direction="row">
          <Stack direction="column">
            <Stack bottom="small">
              <Badge theme="green">A green badge</Badge>
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
            paddingTop: "0",
          },
        }}
        top="largest">
        <Box minimal>
          <Table
            bodyChildren={[
              [
                "Body 2",
                "Body 2",
                "Body 2",
                // eslint-disable-next-line react/jsx-key
                <Select
                  horizontal="left"
                  options={[
                    { label: "Test", value: "test" },
                    { label: "Test 2", value: "test2" },
                  ]}
                  trigger={<Button>Test</Button>}
                  vertical="top"
                />,
              ],
              [
                "Body 2",
                "Body 2",
                "Body 2",
                // eslint-disable-next-line react/jsx-key
                <Select
                  horizontal="center"
                  options={[
                    { label: "Test", value: "test" },
                    { label: "Test 2", value: "test2" },
                  ]}
                  trigger={<Button>Test</Button>}
                  vertical="top"
                />,
              ],
            ]}
            headChildren={["Head 2", "Head 2", "Head 2", "Head 2"]}
            sort
          />
        </Box>
      </View>
    </Provider>
  );
}
