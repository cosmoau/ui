import { CurrencyEth } from "phosphor-react";
import React, { ReactElement, useState } from "react";
import toast from "react-hot-toast";

import {
  Provider,
  View,
  Table,
  Text,
  Button,
  Badge,
  Box,
  Stack,
  Command,
  LoadingOverlay,
  Dialog,
  Input,
} from "../src/index";

const data = Array.from({ length: Math.floor(Math.random() * 2000) }, (_, i) => [
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

const smallData = data.slice(0, data.length / 2);

export function App(): ReactElement {
  const [fullDataSet, setFullDataSet] = useState(true);
  const temp = {
    "*": {
      height: "100%",
      opacity: 0.25,
      width: "100%",
    },
    display: "inline-block",
    height: "10rem",
    marginRight: "1rem",
    width: "5rem",
  };

  return (
    <Provider>
      <LoadingOverlay />
      <Command>
        <Button>do something</Button>
      </Command>
      <div style={{ height: "50vh" }}>
        <Input
          placeholder="Enter 5 characters or more"
          submit="Test"
          submitFunction={(value): void => {
            toast(value.toString());
          }}
          submitValid={(value): boolean => value.toString().length > 4}
        />
      </div>
      <View top="largest">
        <Dialog trigger={<Button>test button</Button>}>
          <Button onClick={(): string => toast("overlap?")}>toast</Button>
        </Dialog>
      </View>
      <View bottom="largest" container top="largest">
        <Text as="h3" top="largest">
          Hello World, it is <i>good</i> to see you!
        </Text>
        <Text accent bottom="large">
          This is an accent text
        </Text>
        <Badge icon={<CurrencyEth />}>Test</Badge>
        <Badge theme="red">Test small</Badge>
        <Badge theme="orange">Test small</Badge>
        <Badge theme="yellow">Test small</Badge>
        <Badge theme="green">
          <b>Test small</b>
        </Badge>
        <Badge theme="blue">Test small</Badge>
        <Badge theme="purple">Test small</Badge>
        <Badge theme="border">Test small</Badge>
        <Button>Testing</Button>
        <Button icon={<CurrencyEth />}>Testing</Button>
        <Button>
          <CurrencyEth />
        </Button>

        <Stack bottom="larger" direction="row" flex="stretch" top="largest">
          <Stack direction="column" width={33}>
            <Box header={<Text as="h5">Testing</Text>} minimal>
              <Table
                bodyChildren={fullDataSet ? data : smallData}
                headChildren={["Check In", "Head 2", "Head 3"]}
                pagination
              />
            </Box>
          </Stack>
          <Stack direction="column" width={33}>
            <Box header={<Text as="h5">Testing</Text>} minimal>
              <Table
                bodyChildren={fullDataSet ? data : smallData}
                headChildren={["Check In", "Head 2", "Head 3"]}
                pagination
              />
            </Box>
          </Stack>
          <Stack direction="column" width={33}>
            <Box header={<Text as="h5">Testing</Text>} minimal>
              <Table
                bodyChildren={fullDataSet ? data : smallData}
                headChildren={["Check In", "Head 2", "Head 3"]}
                pagination
                sortable
              />
            </Box>
          </Stack>
        </Stack>
      </View>
      <View bottom="largest" container top="largest">
        <Stack align="center" bottom="larger" direction="row" flex="center">
          <Stack direction="column" width={33.33}>
            <Stack
              css={{
                borderTop: "0.2rem solid $default",
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
                borderTop: "0.2rem solid $defaultHover",
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
                borderTop: "0.2rem solid $default",
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
      </View>
      <View container inverted top="largest">
        <Stack flexduo>
          <Text as="h5">Cosmo</Text>
          <Button onClick={(): string => toast("WAZZZZUP")}>Toggle Cosmo</Button>
        </Stack>
      </View>
      <View
        bottom="largest"
        container
        css={{
          borderBottom: "0.1rem solid $border",
        }}
        gradient
        inverted
        top="largest">
        <Box minimal>
          <Table
            bodyChildren={fullDataSet ? data : smallData}
            headChildren={["Check In", "Head 2", "Head 3"]}
            identifier="test"
            pagination
          />
        </Box>
        <Button block onClick={(): void => setFullDataSet(!fullDataSet)}>
          Toggle Full Data Set
        </Button>
      </View>
      <View bottom="largest" container inverted top="largest">
        <h1>Looking good</h1>
      </View>
    </Provider>
  );
}
