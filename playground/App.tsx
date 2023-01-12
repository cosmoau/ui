/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ArrowRight, CheckCircle, Printer } from "phosphor-react";
import React, { ReactElement, useEffect } from "react";
import toast from "react-hot-toast";

import {
  Provider,
  Stack,
  View,
  Table,
  Badge,
  Button,
  Text,
  Input,
  Divider,
  Dialog,
  Popover,
  Box,
  Select,
  ProviderToggle,
  Avatar,
  LoadingOverlay,
  Logo,
  LogoIcon,
} from "../src/index";

export function App(): ReactElement {
  const [isMounted, setIsMounted] = React.useState(false);
  const [bodyChildren, setBodyChildren] = React.useState(null as any);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      setTimeout(() => {
        setBodyChildren([
          ["1", "2", "3", "4"],
          ["3", "4", "3", "4"],
          ["2", "4", "3", "4"],
        ]);
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Provider locked="light">
      <View bottom="largest" container inverted top="largest">
        <Logo />
        <LogoIcon />
        <Stack direction="row">
          <Stack direction="column">
            <Text as="h1">Heading One</Text>
            <Text as="h2">Heading Two</Text>
            <Text as="h3">Heading Three</Text>
            <Text as="h4">Heading Four</Text>
            <Text as="h5">Heading Five</Text>
            <Text as="h6">Heading Six</Text>
            <Text as="p">Paragraph</Text>
            <Text as="span">Span</Text>
            <Text as="small">Small</Text>
            <Text as="ul">
              <Text as="li">List Item</Text>
              <Text as="li">List Item</Text>
            </Text>
          </Stack>
        </Stack>
      </View>
      <View bottom="largest" container top="largest">
        <Stack direction="row">
          <Stack direction="column">
            <LoadingOverlay />

            <Text as="h1">
              Heading One - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
              leo vel tincidunt vestibulum
            </Text>
            <Text as="h2">
              Heading Two - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
              leo vel tincidunt vestibulum
            </Text>
            <Text as="h3">
              Heading Three - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor, leo vel tincidunt vestibulum
            </Text>
            <Text as="h4">
              Heading Four - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
              leo vel tincidunt vestibulum
            </Text>
            <Text as="h5">
              Heading Five - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
              leo vel tincidunt vestibulum
            </Text>
            <Text as="h6">
              Heading Six - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
              leo vel tincidunt vestibulum
            </Text>
            <Text as="p">
              Paragraph - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
              leo vel tincidunt vestibulum. Paragraph - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nullam auctor, leo vel tincidunt vestibulum Paragraph - Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nullam auctor, leo vel tincidunt
              vestibulum Paragraph - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor, leo vel tincidunt vestibulum Paragraph - Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nullam auctor, leo vel tincidunt vestibulum Paragraph -
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, leo vel
              tincidunt vestibulum
            </Text>
            <Text as="p">
              Paragraph - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
              leo vel tincidunt vestibulum
            </Text>
            <Text as="p">
              Paragraph - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
              leo vel tincidunt vestibulum
            </Text>
            <Text as="span">
              Span - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, leo vel
              tincidunt vestibulum
            </Text>
            <Text as="small">Small</Text>
            <Text as="ul">
              <Text as="li">
                List Item - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
                leo vel tincidunt vestibulum
              </Text>
              <Text as="li">
                List Item - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
                leo vel tincidunt vestibulum
              </Text>
            </Text>
          </Stack>
        </Stack>
      </View>
      <View bottom="largest" container top="largest">
        <Stack direction="row" flex="initial" top="medium">
          <Stack direction="column">
            <Box hover>
              <Text as="h1">
                Heading One is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae aliquet nisl
                nunc vel nisl. <Text as="span">Nulla facilisi.</Text>
              </Text>
              <Button inline="medium">Test</Button>
              <Button inline="medium" theme="solid">
                Test
              </Button>
              <ProviderToggle trigger={<Button inline="medium">Test</Button>} />
              <Select
                options={[
                  {
                    label: "Test One",
                    value: "test1",
                  },
                  {
                    label: "Test Two",
                    value: "test2",
                  },
                ]}
                selection="test1"
                trigger={<Button>Test</Button>}
                onSelection={(value: string, label: string) => {
                  alert(`Value: ${value}, Label: ${label} `);
                }}
              />
            </Box>
          </Stack>
        </Stack>
      </View>
      <View bottom="largest" container top="largest">
        <Stack direction="row" flex="initial">
          <Stack direction="column" offset={50} width={50}>
            <Text as="h6">
              Heading Six is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
              leo vel tincidunt vestibulum, mauris nisl porta odio, vitae aliquet nisl nunc vel
              nisl. Nulla facilisi. Nulla facilisi.{" "}
            </Text>
            <Text accent as="h6">
              Heading Six is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
              leo vel tincidunt vestibulum, mauris nisl porta odio, vitae aliquet nisl nunc vel
              nisl. Nulla facilisi. Nulla facilisi.{" "}
            </Text>
            <Text as="h6">
              Heading Six is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
              leo vel tincidunt vestibulum, mauris nisl porta odio, vitae aliquet nisl nunc vel
              nisl. Nulla facilisi. Nulla facilisi.{" "}
            </Text>
            <Stack bottom="medium" top="medium">
              <Badge block closable icon={<CheckCircle />}>
                Test badge
              </Badge>
            </Stack>
            <Avatar fallback="Jackson" />
            <Avatar fallback="Jack" />
            <Avatar fallback="JD" />
            <Avatar fallback="Jac" />

            <Stack bottom="medium">
              <Badge icon={<CheckCircle />} theme="green">
                Test badge
              </Badge>
            </Stack>
            <Stack bottom="medium">
              <Badge icon={<CheckCircle />}>Test badge</Badge>
            </Stack>
            <Stack bottom="medium">
              <Badge icon={<CheckCircle />}>Test badge</Badge>
            </Stack>
            <Stack bottom="medium">
              <Badge icon={<CheckCircle />}>Test badge</Badge>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" flex="initial" top="medium">
          <Stack direction="column">
            <Divider bottom="medium" top="medium" />
            <Text as="h1">
              Heading One is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
              leo vel tincidunt vestibulum, mauris nisl porta odio, vitae aliquet nisl nunc vel
              nisl. Nulla facilisi. Nulla facilisi.
            </Text>
            <Text as="h2">
              Heading Two is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
              leo vel tincidunt vestibulum, mauris nisl porta odio, vitae aliquet nisl nunc vel
              nisl. Nulla facilisi. Nulla facilisi.{" "}
            </Text>
            <Text as="h3">
              Heading Three is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae aliquet nisl nunc
              vel nisl. Nulla facilisi. Nulla facilisi.{" "}
            </Text>
            <Text as="h4">
              Heading Four is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae aliquet nisl nunc
              vel nisl. Nulla facilisi. Nulla facilisi.{" "}
            </Text>
            <Text accent as="h5">
              Heading Five is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae aliquet nisl nunc
              vel nisl. Nulla facilisi. Nulla facilisi.{" "}
            </Text>
            <Stack bottom="medium" top="medium">
              <Box theme="fill">
                <Text as="h6">
                  Heading Six is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae aliquet nisl
                  nunc vel nisl. Nulla facilisi. Nulla facilisi.{" "}
                </Text>
              </Box>
            </Stack>
            <Text as="p">
              Paragraph is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
              leo vel tincidunt vestibulum, mauris nisl porta odio, vitae aliquet nisl nunc vel
              nisl. Nulla facilisi. Nulla facilisi.{" "}
            </Text>
            <Text as="small">
              Small is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, leo
              vel tincidunt vestibulum, mauris nisl porta odio, vitae aliquet nisl nunc vel aliquet
              nisl nunc vel nisl. Nulla facilisi. Nulla facilisi. aliquet nisl nunc vel nisl. Nulla
              facilisi. Nulla facilisi. aliquet nisl nunc vel nisl. Nulla facilisi. Nulla facilisi.
              aliquet nisl nunc vel nisl. Nulla facilisi. Nulla facilisi. aliquet nisl nunc vel
              nisl. Nulla facilisi. Nulla facilisi. aliquet nisl nunc vel nisl. Nulla facilisi.
              Nulla facilisi. nisl. Nulla facilisi. Nulla facilisi.{" "}
            </Text>
            <Text as="ol">
              <Text as="li">Ordered List</Text>
              <Text as="li">Ordered List</Text>
            </Text>
            <Text as="ul">
              <Text as="li">Unordered List</Text>
              <Text as="li">Unordered List</Text>
            </Text>
            <Text as="h4">
              Heading Four is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae aliquet nisl nunc
              vel nisl. Nulla facilisi. Nulla facilisi.{" "}
            </Text>

            <Stack align="center" top="medium">
              <Input
                icon={<Printer />}
                listen
                submit="Alert"
                submitFunction={(value): void => {
                  alert(value);
                }}
                submitValid
              />
            </Stack>

            <Button
              external
              icon={<ArrowRight />}
              iconPosition="right"
              small
              onClick={() =>
                toast.success(
                  "Heading Three is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae aliquet nisl nunc vel nisl. Nulla facilisi. Nulla facilisi."
                )
              }>
              Button test
            </Button>

            <Button
              external
              icon={<ArrowRight />}
              iconPosition="right"
              small
              onClick={() => toast.success("Heading Three is Lorsi.")}>
              Button test
            </Button>
            <Popover
              trigger={
                <Button icon={<ArrowRight />} iconPosition="right">
                  Popover hover
                </Button>
              }
              type="hover">
              <Text as="h3">Test</Text>
            </Popover>
            <Popover
              trigger={
                <Button icon={<ArrowRight />} iconPosition="right">
                  Popover hover
                </Button>
              }>
              <Text as="h3">Test</Text>
            </Popover>
            <Dialog
              trigger={
                <Button icon={<ArrowRight />} iconPosition="right">
                  Dialog
                </Button>
              }>
              <Text as="h3">Test Test Test Test Test Test Test Test Test Test Test Test Test</Text>
            </Dialog>

            <Button

              block
              icon={<ArrowRight />}
              iconPosition="right"
              theme="fill">
              Button
            </Button>
            <Stack bottom="medium" top="medium">
              <Badge>Normal</Badge>
              <Badge closable>Normal</Badge>
            </Stack>

            <Table bodyChildren={bodyChildren} headChildren={["Name", "Age", "Country", "City"]} />
          </Stack>
        </Stack>
      </View>
    </Provider>
  );
}
