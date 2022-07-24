/* eslint-disable @typescript-eslint/no-explicit-any */
import { CurrencyEth, Heart } from 'phosphor-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

import {
  Provider,
  Stack,
  Text,
  View,
  Badge,
  Button,
  ProviderToggle,
  Box,
  Divider,
  Dialog,
  Input,
  Loading,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableHeadCell,
  TableRow,
  TableHead,
  Dates,
  Dropdown,
  Code,
  Field,
} from '../src/index';

export function App(): any {
  const [activeOption, setActiveOption] = useState('Option 1');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleActiveOption(label: string, value: string): any {
    setActiveOption(label);
    // eslint-disable-next-line no-console
    console.log(value);
  }
  return (
    <Provider default='light'>
      <View inverted container>
        <Stack direction='row' flex='center' top='4'>
          <Stack direction='column' width={33}>
            <img src='https://app.cosmogroup.io/images/vector/logo-light.svg' width='100' />
          </Stack>
          <Stack direction='column' width={33} align='center'>
            <Text as='h5' bold inline='4'>
              Features
            </Text>
            <Dialog
              trigger={
                <Text as='h5' inline='4'>
                  Pricing
                </Text>
              }>
              Test
            </Dialog>
            <Text as='h5' inline='4'>
              Pricing
            </Text>
            <Text as='h5' inline='4'>
              Demo
            </Text>
            <Text as='h5' inline='4'>
              Company
            </Text>
          </Stack>
          <Stack direction='column' width={33} align='right'>
            <Button theme='border' inline='4'>
              App
            </Button>
            <Button theme='solid' icon={<Heart weight='duotone' />}>
              Join Cosmo
            </Button>
          </Stack>
        </Stack>
        <Stack direction='row' flex='center' top='8' bottom='8'>
          <Stack direction='column' width={50} offset={25} align='center'>
            <Text as='h2' bottom='4'>
              Plans and Pricing{' '}
            </Text>
            <Text as='h5' accent>
              OpenPhone makes it ridiculously easy to get a separate phone number for work. Want to keep using your existing work numbers? Port them over for free.
            </Text>
          </Stack>
        </Stack>
      </View>
      '
      <View container top='8' bottom='8'>
        <Stack direction='row' flex='center' top='8' bottom='8'>
          <Stack direction='column' width={50}>
            <Badge>Just listed | Comfort on McCrae</Badge>
            <Text as='h1' bottom='4' top='6'>
              An effortless way to manage, built for all short term investors
            </Text>
            <ProviderToggle trigger={<h1>Switch</h1>} />
            <Text
              accent
              as='h5'
              bottom='6'
              css={{
                opacity: 0.8,
              }}>
              Cosmo combines intuitive technology with tailored management services, enabling you to get the most from your investments.
            </Text>
            <Button inline='2'>Test</Button>
            <Button theme='border'>Test</Button>
          </Stack>
        </Stack>
      </View>
      <View container top='8' bottom='8'>
        <Stack direction='row' bottom='8'>
          <Stack direction='column' width={20}>
            <Box theme='border'>
              <Text as='p'>test</Text>
            </Box>
          </Stack>
          <Stack direction='column' width={20}>
            <Box theme='border'>
              <Text as='p'>test</Text>
            </Box>
          </Stack>
          <Stack direction='column' width={20}>
            <Box theme='border'>
              <Text as='p'>test</Text>
            </Box>
          </Stack>
          <Stack direction='column' width={20}>
            <Box theme='border'>
              <Text as='p'>test</Text>
            </Box>
          </Stack>

          <Stack direction='column' width={20}>
            <Box>
              <Text as='p'>Housekeeping Services</Text>
            </Box>
          </Stack>
        </Stack>
        <Stack direction='row' flex='center' top='6'>
          <Stack direction='column'>
            <Text as='h1'>Switch</Text>
          </Stack>
        </Stack>
        <Stack direction='row' flex='center' top='6'>
          <Stack direction='column'>
            <Text as='h1'>Avatar</Text>
            <Text as='h5'>All good</Text>
          </Stack>
        </Stack>

        <Stack direction='row' flex='center' top='6'>
          <Stack direction='column'>
            <Text as='h1'>Badge</Text>
            <Badge inline='3'>Normal</Badge>
            <Badge theme='red' inline='3'>
              Red
            </Badge>
            <Badge theme='orange' inline='3'>
              Orange
            </Badge>
            <Badge theme='pink' inline='3'>
              Pink
            </Badge>
            <Badge theme='purple' inline='3'>
              Purple
            </Badge>
            <Badge theme='blue' inline='3'>
              Blue
            </Badge>
            <Badge theme='green' inline='3'>
              Green
            </Badge>
            <Badge theme='border' inline='3'>
              Border
            </Badge>
            <Badge dot inline='3'>
              Dot
            </Badge>
            <Badge dot='pulse' inline='3'>
              Dot (Pulsing)
            </Badge>
            <Badge icon={<CurrencyEth weight='duotone' />} inline='3'>
              Icon (Left)
            </Badge>
            <Badge icon={<CurrencyEth weight='duotone' />} iconPosition='right' inline='3'>
              Icon (Right)
            </Badge>
          </Stack>
        </Stack>
        <Stack direction='row' flex='center' top='6'>
          <Stack direction='column'>
            <Text as='h1'>Box</Text>
            <Box>
              <Button>Box</Button>
            </Box>
            <Divider top='3' bottom='3' />
            <Box theme='border'>Border</Box>
            <Divider top='3' bottom='3' />
            <Box theme='error'>Error</Box>
            <Divider top='3' bottom='3' />
            <Box theme='warning'>Warning</Box>
            <Divider top='3' bottom='3' />
            <Box theme='success'>Success</Box>
            <Divider top='3' bottom='3' />
            <Box theme='transparent'>Transparent</Box>
            <Divider top='3' bottom='3' />
            <Box hover theme='border'>
              Border + Hover
            </Box>
            <Divider top='3' bottom='3' />
            <Box loading>Loading</Box>
          </Stack>
        </Stack>
        <Stack direction='row' flex='center' top='6'>
          <Stack direction='column'>
            <Text as='h1'>Button</Text>
            <Button inline='3'>Default</Button>
            <Button inline='3' theme='border'>
              Border
            </Button>
            <Button inline='3' theme='minimal'>
              Minimal
            </Button>
            <Button inline='3' theme='solid'>
              Solid
            </Button>
            <Button icon={<CurrencyEth weight='duotone' />} inline='3'>
              Icon (Left)
            </Button>
            <Button icon={<CurrencyEth weight='duotone' />} iconPosition='right' inline='3'>
              Icon (Right)
            </Button>
          </Stack>
        </Stack>
        <Stack direction='row' flex='center' top='6'>
          <Stack direction='column'>
            <Text as='h1'>Code</Text>
            <Code copy>
              {'/* Must be wrapped in Block, and is the parent of Column */\n' +
                '<Block>\n' +
                "   <Section align='stretch'>\n" +
                '       <Column width={50}>\n' +
                '           /*...children */ \n' +
                '       </Column> \n' +
                '       <Column width={50}>\n' +
                '           /*...children */ \n' +
                '       </Column> \n' +
                '   </Section> \n' +
                '/Block>\n'}
            </Code>
          </Stack>
        </Stack>
        <Stack direction='row' flex='center' top='6'>
          <Stack direction='column'>
            <Text as='h1'>Dates</Text>
            <Popover minimal trigger={<Button>Select Dates (Week Range)</Button>}>
              <Dates range='week' onChange={undefined} />
            </Popover>
            <Popover minimal trigger={<Button>Select Dates (Month Range)</Button>}>
              <Dates range='month' onChange={undefined} />
            </Popover>
          </Stack>
        </Stack>
        <Stack direction='row' flex='center' top='6'>
          <Stack direction='column'>
            <Text as='h1'>Dialog</Text>
            <Dialog trigger={<Button>Open Dialog</Button>}>This is a dialog.</Dialog>
          </Stack>
        </Stack>
        <Stack direction='row' flex='center' top='6'>
          <Stack direction='column'>
            <Text as='h1'>Divider</Text>
            <Divider top='3' bottom='3' />
          </Stack>
        </Stack>
        <Stack direction='row' flex='center' top='6'>
          <Stack direction='column'>
            <Text as='h1'>Dropdown</Text>
            <Divider top='3' bottom='3' />
            <Dropdown
              options={[
                { label: '🇦🇺 Australia', value: 'option-1' },
                { label: '🇺🇸 United States', value: 'option-2' },
                { label: '🇨🇦 Canada', value: 'option-2' },
                { label: '🇳🇿 New Zealand', value: 'option-3' },
              ]}
              trigger={
                <Button>
                  {activeOption === 'option-1' ? 'Option 1' : activeOption === 'option-2' ? 'Option 2' : activeOption === 'option-3' ? 'Option 3' : 'Select an option'}
                </Button>
              }
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              actions={handleActiveOption}
              active={activeOption}
              submenu={false}
            />
          </Stack>
        </Stack>
        <Stack direction='row' flex='center' top='6'>
          <Stack direction='column'>
            <Text as='h1'>Element</Text>
            <Text as='h5'>All good</Text>
          </Stack>
        </Stack>
        <Stack direction='row' flex='center' top='6'>
          <Stack direction='column'>
            <Text as='h1'>Field</Text>
            <Field placeholder='Placeholder' copy reveal />
          </Stack>
        </Stack>

        <Stack direction='row' flex='center' top='6'>
          <Stack direction='column'>
            <Text as='h1'>Image</Text>
            <Text as='h5'>All good</Text>
          </Stack>
        </Stack>
        <Stack direction='row' flex='center' top='6'>
          <Stack direction='column'>
            <Text as='h1'>Input</Text>
            <Input placeholder='Default' />
            <Divider top='3' bottom='3' />
            <Input placeholder='Copy' copy />
            <Divider top='3' bottom='3' />
            <Input placeholder='Password' reveal type='password' />
            <Divider top='3' bottom='3' />
            <Input placeholder='Disabled' disabled />
            <Divider top='3' bottom='3' />
            <Input placeholder='Error' error />
            <Divider top='3' bottom='3' />
            <Input placeholder='Success' success />
            <Divider top='3' bottom='3' />
            <Input placeholder='Warning' warning />
            <Divider top='3' bottom='3' />
            <Input placeholder='Loading' loading />
          </Stack>
        </Stack>
        <Stack direction='row' flex='center' top='6'>
          <Stack direction='column'>
            <Text as='h1'>Loading</Text>
            <Loading />
          </Stack>
        </Stack>
        <Stack direction='row' flex='center' top='6'>
          <Stack direction='column'>
            <Text as='h1'>Popover</Text>
            <Popover trigger={<Button>Normal Popover (tooltip)</Button>}>This is a popover.</Popover>
            <Divider top='3' bottom='3' />
            <Popover type='hover' trigger={<Button>Normal Popover + hover (tooltip)</Button>}>
              This is a popover.
            </Popover>
            <Divider top='3' bottom='3' />
            <Popover minimal trigger={<Button>Popover with Icon</Button>}>
              <Box theme='transparent'>This is a big Popover</Box>
            </Popover>
          </Stack>
        </Stack>
        <Stack direction='row' flex='center' top='6'>
          <Stack direction='column'>
            <Text as='h1'>Table</Text>
            <Box theme='border'>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeadCell>Hey</TableHeadCell>
                    <TableHeadCell>Hey</TableHeadCell>
                    <TableHeadCell>Hey</TableHeadCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Hey</TableCell>
                    <TableCell>Hey</TableCell>
                    <TableCell>Hey</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Hey</TableCell>
                    <TableCell>Hey</TableCell>
                    <TableCell>Hey</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Stack>
        </Stack>
        <Stack direction='row' flex='center' top='6'>
          <Stack direction='column'>
            <Text as='h1'>Text</Text>
            <Text as='h1'>
              H1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eu consectetur consectetur, nisl nisl consectetur nisl, euismod nisl nisl nisl.
            </Text>
            <Text as='h2'>
              H2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eu consectetur consectetur, nisl nisl consectetur nisl, euismod nisl nisl nisl.
            </Text>
            <Text as='h3'>
              H3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eu consectetur consectetur, nisl nisl consectetur nisl, euismod nisl nisl nisl.
            </Text>
            <Text as='h4'>
              H4: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eu consectetur consectetur, nisl nisl consectetur nisl, euismod nisl nisl nisl.
            </Text>
            <Text as='h5'>
              H5: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eu consectetur consectetur, nisl nisl consectetur nisl, euismod nisl nisl nisl.
            </Text>
            <Text as='h6'>
              H6: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eu consectetur consectetur, nisl nisl consectetur nisl, euismod nisl nisl nisl.
            </Text>
            <Text as='p'>
              P: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eu consectetur consectetur, nisl nisl consectetur nisl, euismod nisl nisl nisl.
            </Text>
            <Text as='small'>
              SMALL: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eu consectetur consectetur, nisl nisl consectetur nisl, euismod nisl nisl nisl.
            </Text>
          </Stack>
        </Stack>
        <Stack direction='row' flex='center' top='6'>
          <Stack direction='column'>
            <Text as='h1'>Toast</Text>
            <Button
              inline='3'
              onClick={(): void => {
                toast.success('This is a success toast');
              }}>
              Success Toast
            </Button>
            <Button
              inline='3'
              onClick={(): void => {
                toast.error('This is a warning/error toast');
              }}>
              Warning/Error Toast
            </Button>
            <Button
              inline='3'
              onClick={(): void => {
                toast('This is a normal toast');
              }}>
              Default Toast
            </Button>
          </Stack>
        </Stack>
      </View>
    </Provider>
  );
}
