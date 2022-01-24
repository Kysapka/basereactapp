import React, {FC, SyntheticEvent, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import {filterType} from "./types";

type PostFilterPropsType = {
    filter: filterType
    setFilter: (filter: filterType) => void
}

export const PostFilter:FC<PostFilterPropsType> = ({filter, setFilter}) => {

    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(e: SyntheticEvent<HTMLInputElement>) => setFilter({...filter, query: e.currentTarget.value})}
                placeholder={"Поиск..."}
            />
            <MySelect
                value={filter.sort}
                onChange={sort => setFilter({...filter, sort})}
                options={[
                    {value: 'title', name: 'по названию'},
                    {value: 'body', name: 'по описанию'}
                ]}
                defaultValue={"Сортировка"}
            />
        </div>
    );
};