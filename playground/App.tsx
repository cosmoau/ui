/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ArrowRight, CheckCircle } from 'phosphor-react';
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
      <View bottom='8' container inverted top={8}>
        <Stack direction='row' flex='initial' top='4'>
          <Stack direction='column'>
            <Box hover>
              <Text as='h1'>
                Heading One is Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam auctor, leo vel tincidunt vestibulum, mauris nisl porta odio,
                vitae aliquet nisl nunc vel nisl. <Text as='span'>Nulla facilisi.</Text>
              </Text>
              <Button inline='5'>Test</Button>
              <Button theme='fill'>Test</Button>
            </Box>
          </Stack>
        </Stack>
      </View>
      <View bottom='8' container top='8'>
        <Stack direction='row' flex='initial'>
          <Stack direction='column' offset={50} width={50}>
            <Text as='h6'>
              Heading Six is Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae
              aliquet nisl nunc vel nisl. Nulla facilisi. Nulla facilisi.{' '}
            </Text>
            <Text accent as='h6'>
              Heading Six is Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae
              aliquet nisl nunc vel nisl. Nulla facilisi. Nulla facilisi.{' '}
            </Text>
            <Text as='h6'>
              Heading Six is Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae
              aliquet nisl nunc vel nisl. Nulla facilisi. Nulla facilisi.{' '}
            </Text>
            <Stack bottom={3} top={5}>
              <Badge icon={<CheckCircle />}>Test badge</Badge>
            </Stack>
            <Stack bottom={3}>
              <Badge icon={<CheckCircle />}>Test badge</Badge>
            </Stack>
            <Stack bottom={3}>
              <Badge icon={<CheckCircle />}>Test badge</Badge>
            </Stack>
            <Stack bottom={3}>
              <Badge icon={<CheckCircle />}>Test badge</Badge>
            </Stack>
            <Stack bottom={3}>
              <Badge icon={<CheckCircle />}>Test badge</Badge>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction='row' flex='initial' top='6'>
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
            <Stack bottom={4} top={4}>
              <Box theme='fill'>
                <Text as='h6'>
                  Heading Six is Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nullam auctor, leo vel tincidunt vestibulum, mauris nisl porta
                  odio, vitae aliquet nisl nunc vel nisl. Nulla facilisi. Nulla
                  facilisi.{' '}
                </Text>
              </Box>
            </Stack>
            <Text as='p'>
              Paragraph is Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae
              aliquet nisl nunc vel nisl. Nulla facilisi. Nulla facilisi.{' '}
            </Text>
            <Text as='small'>
              Small is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor, leo vel tincidunt vestibulum, mauris nisl porta odio, vitae
              aliquet nisl nunc vel aliquet nisl nunc vel nisl. Nulla facilisi. Nulla
              facilisi. aliquet nisl nunc vel nisl. Nulla facilisi. Nulla facilisi.{' '}
              aliquet nisl nunc vel nisl. Nulla facilisi. Nulla facilisi. aliquet nisl
              nunc vel nisl. Nulla facilisi. Nulla facilisi. aliquet nisl nunc vel nisl.
              Nulla facilisi. Nulla facilisi. aliquet nisl nunc vel nisl. Nulla
              facilisi. Nulla facilisi. nisl. Nulla facilisi. Nulla facilisi.{' '}
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
              ariaLabel='button'
              external
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
            <Stack bottom='4' top='4'>
              <Badge>Normal</Badge>
              <Badge closable>Normal</Badge>
            </Stack>

            <Table
              bodyChildren={bodyChildren}
              headChildren={['Name', 'Age', 'Country', 'City']}
              sort
              sortDisabled={[1, 3]}
            />
          </Stack>
        </Stack>
      </View>
    </Provider>
  );
}
