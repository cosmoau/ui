import { CSS } from '@stitches/react/types/css-util';
import React, { useState, useRef, ReactNode } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { Button } from '../Button';
import { Loading } from '../Loading';

import DropdownStyles from './Dropdown.styles';

export interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actions: any;
  align?: 'left' | 'right' | 'center';
  css?: CSS;
  id?: string;
  label: string | ReactNode;
  options: Array<{
    icon?: ReactNode;
    name: string;
    value: string;
  }>;
  passKey: string;
  width?: number | string;
}

const { Wrapper, GroupWrapper, ItemWrapper, IconWrapper } = DropdownStyles();

export default function Dropdown({ actions, align = 'left', css, id, label, options, passKey, width }: Props): JSX.Element {
  const ref = useRef(null);
  const [isShown, setIsShown] = useState(false as boolean);

  const handleClick = (): void => {
    setIsShown(!isShown);
  };

  const handleActions = (value: string, name: string) => {
    actions(value, name);
    setIsShown(false);
  };

  useOnClickOutside(ref, () => {
    setIsShown(false);
  });

  return (
    <Wrapper css={css} id={id} key={passKey} ref={ref}>
      <Button onClickCapture={handleClick}>{label || <Loading />}</Button>
      {isShown && (
        <GroupWrapper
          animation={isShown}
          css={{
            minWidth: width || '15rem',
            maxWidth: width || '80rem',
            left: align === 'left' ? '0' : 'auto',
            right: align === 'right' ? '0' : 'auto',
          }}>
          {options.map((option) => (
            <ItemWrapper className={label === option.name ? 'active' : 'inactive'} key={option.value} onClickCapture={() => handleActions(option.value, option.name)}>
              {option.icon && <IconWrapper>{option.icon}</IconWrapper>}
              {option.name}
            </ItemWrapper>
          ))}
        </GroupWrapper>
      )}
    </Wrapper>
  );
}
