import { CSS } from '@stitches/react/types/css-util';
import React, { useState, useRef, ReactNode } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { Button } from '../Button';
import { Loading } from '../Loading';

import stitchesShared from './Dropdown.stitches';

export interface Props {
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
  width?: number;
}

export default function Dropdown({ actions, align = 'left', css, id, label, options, passKey, width }: Props): JSX.Element {
  const ref = useRef(null);
  const [isShown, setIsShown] = useState(false);

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

  const { Wrapper, GroupWrapper, ItemWrapper, IconWrapper } = stitchesShared({
    align,
    width,
  });

  return (
    <Wrapper css={css} id={id} key={passKey} ref={ref}>
      <Button onClick={handleClick}>{label || <Loading />}</Button>
      {isShown && (
        <GroupWrapper>
          {options.map((option) => (
            <ItemWrapper className={label === option.name ? 'active' : 'inactive'} key={option.value} onClick={() => handleActions(option.value, option.name)}>
              {option.icon && <IconWrapper>{option.icon}</IconWrapper>}
              {option.name}
            </ItemWrapper>
          ))}
        </GroupWrapper>
      )}
    </Wrapper>
  );
}
