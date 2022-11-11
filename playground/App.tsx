/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ArrowRight } from 'phosphor-react';
import React, { ReactElement } from 'react';
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
} from '../src/index';

export function App(): ReactElement {
  return (
    <Provider locked='light'>
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
            <Badge theme='border'>aIRBNB </Badge>
            <Table
              bodyChildren={[
                [
                  'John DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn Doe',
                  '32',
                  'United States',
                ],

                ['Jane Doe', '25', 'United States'],
                ['John Doe', '32', 'United States'],
                ['Jane Doe', '25', 'United States'],
                ['Jane Doe', '25', 'United States'],
                ['Jane Doe', '25', 'United States'],
                ['Jane Doe', '25', 'United States'],
                ['Jane Doe', '25', 'United States'],
                ['Jane Doe', '25', 'United States'],
              ]}
              headChildren={['Name', 'Age', 'Country']}
            />
          </Stack>
        </Stack>
      </View>
    </Provider>
  );
}
