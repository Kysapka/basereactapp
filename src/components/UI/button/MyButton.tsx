import React, { FC } from 'react';

import classes from './MyButton.module.css';

import { MyButtonProps } from 'components/UI/button/types';

export const MyButton: FC<MyButtonProps> = ({ children, ...props }) => (
  <button type="button" {...props} className={classes.myBtn}>
    {children}
  </button>
);
