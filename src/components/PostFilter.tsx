import React, { FC, SyntheticEvent } from 'react';

import { PostFilterPropsType } from 'components/types';
import { MyInput, MySelect } from 'components/UI';

export const PostFilter: FC<PostFilterPropsType> = ({ filter, setFilter }) => (
  <div>
    <MyInput
      value={filter.query}
      onChange={(e: SyntheticEvent<HTMLInputElement>) =>
        setFilter({ ...filter, query: e.currentTarget.value })
      }
      placeholder="Поиск..."
    />
    <MySelect
      value={filter.sort}
      onChange={sort => setFilter({ ...filter, sort })}
      options={[
        { value: 'title', name: 'по названию' },
        { value: 'body', name: 'по описанию' },
      ]}
      defaultValue="Сортировка"
    />
  </div>
);
