import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';

import { Button } from '../Button';
import { Stack } from '../Stack';
import { Text } from '../Text';

import { DatesStyled } from './Dates.styles';

export interface Props {
  startDate?: string;
  range?: 'week' | 'month';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: any;
}

export default function Dates(props: Props): JSX.Element {
  const [startDate, setStartDate] = useState(dayjs(props.startDate).startOf(props.range));
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs(props.startDate).format('YYYY-MM-DD'));

  const handleChange = (date: string): void => {
    setSelectedDate(date);
    if (props.onChange) {
      props.onChange(selectedDate);
    }
  };

  const handlePrevious = (): void => {
    setStartDate(dayjs(startDate).subtract(1, props.range));
    setDates([]);
    setSelectedDate(dayjs(startDate).subtract(1, props.range).format('YYYY-MM-DD'));
  };

  const handleNext = (): void => {
    setStartDate(dayjs(startDate).add(1, props.range));
    setDates([]);
    setSelectedDate(dayjs(startDate).add(1, props.range).format('YYYY-MM-DD'));
  };

  useEffect(() => {
    if (props.range === 'week') {
      // setDates to array of 7 days, starting with startDate
      for (let i = 0; i < 8; i++) {
        setDates((dates) => [...dates, dayjs(startDate).add(i, 'day').format('YYYY-MM-DD')]);
      }
    }
    if (props.range === 'month') {
      // setDates to array of days in month, starting with startDate - use dayjs.getDaysInMonth() to get number of days in month
      for (let i = 0; i < dayjs(startDate).daysInMonth(); i++) {
        setDates((dates) => [...dates, dayjs(startDate).add(i, 'day').format('YYYY-MM-DD')]);
      }
    }
  }, [startDate, props.range]);

  return (
    <DatesStyled>
      <Stack bottom='4' direction='row' align='center' flex='center'>
        <Stack direction='column' width={20} widthPhone={20} minimal>
          <Button onClick={handlePrevious}>-</Button>
        </Stack>
        <Stack direction='column' width={60} widthPhone={60} minimal align='center'>
          <Text
            as='h6'
            bold
            css={{
              opacity: 1,
            }}>
            {dayjs(selectedDate).format('DD MMMM, YYYY')}
          </Text>
        </Stack>
        <Stack direction='column' width={20} widthPhone={20} minimal align='right'>
          <Button onClick={handleNext}>+</Button>
        </Stack>
      </Stack>
      <Stack
        direction='row'
        align='center'
        flex='stretch'
        top='1'
        css={{
          border: '1px solid rgba(0,0,0,0.05)',
          padding: '0.5rem',
        }}>
        {dates.map((date) => (
          <Stack
            align='center'
            direction='column'
            width={25}
            widthPhone={25}
            key={date}
            minimal
            css={{
              lineHeight: 0,
            }}>
            <Button
              theme={selectedDate === date ? 'solid' : 'border'}
              onClick={(): void => handleChange(date)}
              css={{
                margin: '$2',
                verticalAlign: 'middle',
              }}>
              <Text
                css={{
                  fontSize: '0.8rem',
                  opacity: selectedDate === date ? 1 : 0.5,
                }}
                as='small'>
                {dayjs(date).format('ddd')}
              </Text>
              {dayjs(date).format('DD/M')}
            </Button>
          </Stack>
        ))}
      </Stack>
    </DatesStyled>
  );
}
