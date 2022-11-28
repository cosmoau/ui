/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ArrowRight } from 'phosphor-react';
import React, { ReactElement, useEffect } from 'react';
import toast from 'react-hot-toast';

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
} from '../src/index';

export function App(): ReactElement {
  const [isMounted, setIsMounted] = React.useState(false);
  const [bodyChildren, setBodyChildren] = React.useState(null as any);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      setTimeout(() => {
        setBodyChildren([
          ['1', '2', '3', '4'],
          ['1', '2', '3', '4'],
        ]);
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Provider locked='light'>
      <View bottom='8' container>
        <Stack direction='row' flex='initial' top='4'>
          <Stack direction='column'>
            <Box closable theme='fill'>
              <Text as='h1'>
                Heading One is Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam auctor, leo vel tincidunt vestibulum, mauris nisl porta odio,
                vitae aliquet nisl nunc vel nisl. Nulla facilisi. Nulla facilisi.
              </Text>
              <Button>Test</Button>
              <Button theme='fill'>Test</Button>
            </Box>
          </Stack>
        </Stack>
      </View>
      <View container>
        <Stack direction='row' flex='initial' top='4'>
          <Stack direction='column'>
            <Divider bottom='6' top='6' />
            <Text as='h1'>
              Heading One is Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae
              aliquet nisl nunc vel nisl. Nulla facilisi. Nulla facilisi.
            </Text>
            <Text as='h2'>
              Heading Two is Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae
              aliquet nisl nunc vel nisl. Nulla facilisi. Nulla facilisi.{' '}
            </Text>
            <Text as='h3'>
              Heading Three is Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae
              aliquet nisl nunc vel nisl. Nulla facilisi. Nulla facilisi.{' '}
            </Text>
            <Text as='h4'>
              Heading Four is Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae
              aliquet nisl nunc vel nisl. Nulla facilisi. Nulla facilisi.{' '}
            </Text>
            <Text accent as='h5'>
              Heading Five is Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae
              aliquet nisl nunc vel nisl. Nulla facilisi. Nulla facilisi.{' '}
            </Text>
            <Text as='h6'>
              Heading Six is Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae
              aliquet nisl nunc vel nisl. Nulla facilisi. Nulla facilisi.{' '}
            </Text>
            <Text as='p'>
              Paragraph is Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae
              aliquet nisl nunc vel nisl. Nulla facilisi. Nulla facilisi.{' '}
            </Text>
            <Text as='small'>
              Small is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae
              aliquet nisl nunc vel nisl. Nulla facilisi. Nulla facilisi.{' '}
            </Text>
            <Text as='ol'>
              <Text as='li'>Ordered List</Text>
              <Text as='li'>Ordered List</Text>
            </Text>
            <Text as='ul'>
              <Text as='li'>Unordered List</Text>
              <Text as='li'>Unordered List</Text>
            </Text>
            <Text as='h4'>
              Heading Four is Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae
              aliquet nisl nunc vel nisl. Nulla facilisi. Nulla facilisi.{' '}
            </Text>

            <Stack align='center' top='6'>
              <Input
                listen
                submit='Alert'
                submitFunction={() => alert('lol')}
                submitValid
              />
            </Stack>

            <Button
              external
              ariaLabel='button'
              icon={<ArrowRight />}
              iconPosition='right'
              onClick={() => toast.success('lol')}
              small>
              Button test
            </Button>
            <Popover
              trigger={
                <Button ariaLabel='button' icon={<ArrowRight />} iconPosition='right'>
                  Popover hover
                </Button>
              }
              type='hover'>
              <Text as='h3'>Test</Text>
            </Popover>
            <Popover
              trigger={
                <Button ariaLabel='button' icon={<ArrowRight />} iconPosition='right'>
                  Popover hover
                </Button>
              }>
              <Text as='h3'>Test</Text>
            </Popover>
            <Dialog
              trigger={
                <Button ariaLabel='button' icon={<ArrowRight />} iconPosition='right'>
                  Dialog
                </Button>
              }>
              <Text as='h3'>Test</Text>
            </Dialog>

            <Button
              ariaLabel='button'
              block
              icon={<ArrowRight />}
              iconPosition='right'
              theme='fill'>
              Button
            </Button>
            <Stack top='4' bottom='4'>
              <Badge>Normal</Badge>
              <Badge closable>Normal</Badge>
            </Stack>

            <Table
              sort
              sortDisabled={[1, 3]}
              bodyChildren={bodyChildren}
              headChildren={['Name', 'Age', 'Country', 'City']}
            />
          </Stack>
        </Stack>
      </View>
    </Provider>
  );
}
