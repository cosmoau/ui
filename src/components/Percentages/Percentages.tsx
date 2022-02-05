import { CSS } from '@stitches/react/types/css-util';
import { TrendDown, TrendUp } from 'phosphor-react';
import React, { useState, useEffect } from 'react';

import { styled } from '../../stitches.config';
import { Badge } from '../Badge';
import Loading from '../Loading/Loading';
import { Heading } from '../Typography';

export interface Props {
  css?: CSS;
  id?: string;
  numberA: number;
  numberB: number;
  showDollarDifference?: boolean;
  toFixed?: number;
  trendDirection?: 'up' | 'down';
}

export default function Percentages({ css, id, numberA, numberB, showDollarDifference = false, toFixed = 1, trendDirection = 'up' }: Props): JSX.Element {
  const [isLoading, setIsLoading] = useState(true as boolean);
  const [value, setValue] = useState(0 as any);
  const [difference, setDifference] = useState(0 as any);
  const [differenceDirection, setDifferenceDirection] = useState('up' as 'up' | 'down');

  useEffect(() => {
    const mathPercentage = ((numberA - numberB) / numberB) * 100;
    const mathDifference = numberA - numberB;

    setValue(mathPercentage.toFixed(toFixed));
    setDifference(mathDifference.toFixed(toFixed));
    setIsLoading(false);

    if (mathDifference > 0) {
      if (trendDirection === 'up') {
        setDifferenceDirection('up');
      } else {
        setDifferenceDirection('down');
      }
    } else if (trendDirection === 'up') {
      setDifferenceDirection('down');
    } else {
      setDifferenceDirection('up');
    }

    return () => {
      setIsLoading(true);
    };
  }, [numberA, numberB, toFixed, trendDirection]);

  const Wrapper = styled('div', {
    display: 'inherit',
    position: 'relative',
    width: '100%',
    height: '100%',
  });

  return isLoading ? (
    <Loading />
  ) : (
    <Wrapper css={css} id={id}>
      <Badge theme={differenceDirection === 'up' ? 'green' : 'yellow'}>
        {differenceDirection === 'up' ? <TrendUp /> : <TrendDown />}
        &nbsp;{value}%
      </Badge>
      {showDollarDifference ? (
        <Heading
          level={6}
          css={{
            pt: '$1',
            opacity: 0.5,
          }}>
          ${difference.toLocaleString()}
        </Heading>
      ) : null}
    </Wrapper>
  );
}
