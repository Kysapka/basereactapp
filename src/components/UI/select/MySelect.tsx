import React, { FC } from 'react';

import { MySelectPropsType } from 'components/UI/select/types';

export const MySelect: FC<MySelectPropsType> = ({
  options,
  defaultValue,
  value,
  onChange,
}) => (
  <select value={value} onChange={event => onChange(event.currentTarget.value)}>
    <option disabled value="">
      {defaultValue}
    </option>
    {options.map((option: any) => (
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
    ))}
  </select>
);
