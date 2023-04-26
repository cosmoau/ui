import { CheckCircle, CurrencyEth } from "phosphor-react";
import React, { ReactElement, useState } from "react";

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
  Popover,
  Field,
} from "../src/index";

export function App(): ReactElement {
  const temp = {
    "*": {
      height: "100%",
      opacity: 0.15,
      width: "100%",
    },
    display: "inline-block",
    height: "10rem",
    marginRight: "1rem",
    width: "4rem",
  };

  const data = Array.from({ length: Math.floor(Math.random() * 9000) + 1000 }, (_, i) => [
    {
      value: i + 1,
    },
    {
      value:
        i > 25
          ? `${String.fromCharCode(65 + Math.floor(i / 26))}${String.fromCharCode(65 + (i % 26))}`
          : String.fromCharCode(65 + i),
      width: "30rem",
    },
    {
      value: `${i + 1}${
        i > 25
          ? `${String.fromCharCode(65 + Math.floor(i / 26))}${String.fromCharCode(65 + (i % 26))}`
          : String.fromCharCode(65 + i)
      }`,
    },
  ]);

  const [forceClose, setForceClose] = useState(false);

  return (
    <Provider>
      <View bottom="largest" container top="largest">
        <Stack bottom="larger" direction="row">
          <Stack direction="column">
            <Text as="h1">metricColorA/B</Text>
            <Stack
              css={{
                borderTop: "0.2rem solid $metricBlueA",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$metricBlueA",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.2rem solid $metricBlueB",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$metricBlueB",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.2rem solid $metricGreenA",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$metricGreenA",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.2rem solid $metricGreenB",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$metricGreenB",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.2rem solid $metricOrangeA",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$metricOrangeA",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.2rem solid $metricOrangeB",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$metricOrangeB",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.2rem solid $metricPurpleA",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$metricPurpleA",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.2rem solid $metricPurpleB",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$metricPurpleB",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.2rem solid $metricRedA",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$metricRedA",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.2rem solid $metricRedB",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$metricRedB",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.2rem solid $metricYellowA",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$metricYellowA",
                }}>
                &nbsp;
              </Stack>
            </Stack>
            <Stack
              css={{
                borderTop: "0.2rem solid $metricYellowB",
                ...temp,
              }}>
              <Stack
                css={{
                  backgroundColor: "$metricYellowB",
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
          <Stack direction="column">
            <Stack bottom="large" flexduo>
              <Popover
                horizontal="left"
                trigger={<Button>Popover</Button>}
                vertical="bottom"
                width={300}>
                <Text as="h6">
                  Test Label for Selectionsjsjsjsjsjsjsjs{forceClose ? "true" : "false"}
                </Text>
                <Button onClick={(): void => setForceClose(!forceClose)}>Toggle Menu</Button>
                <Input copy />
              </Popover>
              <Popover
                horizontal="center"
                trigger={<Button>Popover</Button>}
                vertical="bottom"
                width={400}>
                <Text as="h6">
                  Test Label for Selectionsjsjsjsjsjsjsjs{forceClose ? "true" : "false"}
                </Text>
                <Button onClick={(): void => setForceClose(!forceClose)}>Toggle Menu</Button>
                <Input error />
              </Popover>
              <Popover
                horizontal="right"
                trigger={<Button>Popover</Button>}
                vertical="bottom"
                width={600}>
                <Input copy />
              </Popover>
            </Stack>
            <Select
              horizontal="left"
              label="Test Label"
              options={[
                {
                  label: "home",
                  value: "/",
                },
                {
                  label: "about",
                  value: "/about",
                },
                {
                  label: "contact",
                  value: "/contact",
                },
              ]}
              selection={["/about"]}
              trigger={<Button>Test</Button>}
            />
            <Select
              horizontal="left"
              label="Test Label for Selectionsjsjsjsjsjsjsjs"
              last
              options={[
                { icon: <CheckCircle />, iconPosition: "right", label: "Test", value: "test" },
                {
                  icon: <CheckCircle />,
                  iconPosition: "right",
                  label: "Test Selectionsjsjsjsjsjsjsjs Selectionsjsjsjsjsjsjsjs ",
                  value: "test",
                },
              ]}
              trigger={<Button>Test</Button>}
            />
          </Stack>
        </Stack>
        <Stack direction="row">
          <Stack direction="column">
            <Stack bottom="medium">
              <Avatar fallback="djksfjksjkf" />
            </Stack>
            <Stack bottom="medium">
              <Avatar colors fallback="A" />
            </Stack>
            <Stack bottom="medium">
              <Avatar colors fallback="B" />
            </Stack>
            <Stack bottom="medium">
              <Avatar colors fallback="C" />
            </Stack>
            <Stack bottom="medium">
              <Avatar colors fallback="D" />
            </Stack>
            <Stack bottom="medium">
              <Avatar colors fallback="E" />
            </Stack>
            <Stack bottom="medium">
              <Avatar colors fallback="Z" />
            </Stack>
            <Stack bottom="medium">
              <Avatar colors fallback="JD" />
            </Stack>
            <Stack bottom="small">
              <Badge copy copyText="green" icon={<Avatar fallback="JD" />} loading theme="green">
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
        <Dialog trigger={<Button>Test Dialog</Button>} width={8000}>
          <Text as="h3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
          </Text>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
          </Text>
        </Dialog>
        <Dialog trigger={<Button>Test Dialog</Button>}>
          <Text as="h3">Lorem</Text>
          <Text as="p">Lorem</Text>
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
        <Box>
          <Input
            copy
            loading
            submit="Saveeeee"
            success
            successMessage="sdfkldfnjkdfjkds"
            warning
            warningMessage="failllllllllll"
          />
        </Box>

        <Field copy submit="Saveeeee" warning warningMessage="failllllllllll" />
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
          <Table
            bodyChildren={data}
            defaultDirection="desc"
            defaultLimit={50}
            defaultSort={1}
            headChildren={["Check In", "Head 2", "Head 3"]}
            hover
            pagination
            restrictLimit={4}
            rowNumbers
            sortable
          />
        </Box>
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
          <Table
            bodyChildren={data}
            defaultLimit={50}
            headChildren={["Check In", "Head 2", "Head 3"]}
            rowNumbers
          />
        </Box>
      </View>
    </Provider>
  );
}
