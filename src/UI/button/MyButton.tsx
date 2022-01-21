import React, {FC} from 'react';
import classes from './MyButton.module.css';

type MyButtonProps = {
    children: string
}

export const MyButton:FC<MyButtonProps> = ({children, ...props}) => {
    return (
           <button {...props} className={classes.myBtn}>{children}</button>
    );
};

