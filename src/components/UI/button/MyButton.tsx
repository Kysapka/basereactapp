import React, {FC, SyntheticEvent} from 'react';
import classes from './MyButton.module.css';
import {MyButtonProps} from "./types";

export const MyButton:FC<MyButtonProps> = ({children, ...props}) => {
    return (
           <button {...props} className={classes.myBtn}>{children}</button>
    );
};

