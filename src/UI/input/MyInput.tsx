import React, {forwardRef} from 'react';
import classes from './MyInput.module.css';

export const MyInput = forwardRef((props: any, ref) => {
    return (
        <input ref={ref} className={classes.myInput} {...props}/>
    );
});

export default MyInput;