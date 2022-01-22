import { TrendDown, TrendUp } from 'phosphor-react';
import React from 'react';

import { Badge } from '../Badge';
import Loading from '../Loading/Loading';

export interface Props {
  newNumber: number;
  previousNumber: number;
  percentageDollar?: boolean;
  financial?: boolean;
  inverse?: boolean;
}

function Percentages({ newNumber, previousNumber, percentageDollar, financial, inverse }: Props): JSX.Element {
  const presum = newNumber - previousNumber;
  const percentage = Math.round((presum / previousNumber) * 100);
  const dollar = Math.abs(newNumber - previousNumber).toLocaleString();

  const decrease = (
    <>
      <Badge theme={!inverse ? 'yellow' : 'green'}>
        <span className='hidden-phone hidden-tablet'>
          <TrendDown size={16} weight='duotone' />
          &nbsp;
        </span>
        {percentage}%
      </Badge>
      {percentageDollar && (
        <p className='padding-top-1-h'>
          -{financial && '$'}
          {dollar}
        </p>
      )}
    </>
  );
  const invalidDecrease = (
    <>
      <Badge theme='navy'>
        <span className='hidden-phone hidden-tablet'>
          <TrendDown size={16} weight='duotone' />
          &nbsp;
        </span>
        -100%
      </Badge>
      {percentageDollar && (
        <p className='padding-top-1-h'>
          -{financial && '$'}
          {dollar}
        </p>
      )}
    </>
  );
  const increase = (
    <>
      <Badge theme={!inverse ? 'green' : 'yellow'}>
        <span className='hidden-phone hidden-tablet'>
          <TrendUp size={16} weight='duotone' />
          &nbsp;
        </span>
        {percentage}%
      </Badge>
      {percentageDollar && (
        <p className='padding-top-1-h'>
          -{financial && '$'}
          {dollar}
        </p>
      )}
    </>
  );
  const invalidIncrease = (
    <>
      <Badge theme='navy'>
        <span className='hidden-phone hidden-tablet'>
          <TrendUp size={16} weight='duotone' />
          &nbsp;
        </span>
        100%
      </Badge>
      {percentageDollar && (
        <p className='padding-top-1-h'>
          -{financial && '$'}
          {dollar}
        </p>
      )}
    </>
  );
  const unch = <></>;

  if (isNaN(presum)) return <Loading />;
  else if (newNumber === 0 && previousNumber === 0) return unch;
  else if (isNaN(percentage)) return unch;
  else if (newNumber === 0 && previousNumber > 0) return invalidDecrease;
  else if (newNumber > 0 && previousNumber === 0) return invalidIncrease;
  else if (!isFinite(percentage)) return unch;
  else if (newNumber < previousNumber) return decrease;
  else if (newNumber > previousNumber) return increase;
  else if (newNumber === previousNumber) return unch;
  else return unch;
}
export default Percentages;
