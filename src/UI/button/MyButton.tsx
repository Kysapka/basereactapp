import React, {FC, SyntheticEvent} from 'react';
import classes from './MyButton.module.css';

type MyButtonProps = {
    onClick: (e: SyntheticEvent) => void
    children: string
}

export const MyButton:FC<MyButtonProps> = ({children, ...props}) => {
    return (
           <button {...props} className={classes.myBtn}>{children}</button>
    );
};

