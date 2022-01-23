import {SyntheticEvent} from "react";

export type MyButtonProps = {
    onClick: (e: SyntheticEvent) => void
    children: string
}