import {SortType} from "../../types";

export type MySelectPropsType = {
    options: OptionType[]
    defaultValue: string
    value: string
    onChange: (value: string) => void
}

type OptionType = {
    value: string
    name: string
}