import React, { FC, SyntheticEvent } from 'react';

import classes from './MyModal.module.css';

import { ReturnComponentType } from 'components/types';

type MyModalPropsType = {
  visible: boolean;
  setVisible: (value: boolean) => void;
  children: ReturnComponentType;
};

export const MyModal: FC<MyModalPropsType> = ({
  children,
  visible,
  setVisible,
}): ReturnComponentType => {
  const rootClasses = [classes.myModal];
  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div
      role="presentation"
      className={rootClasses.join(' ')}
      onClick={() => setVisible(false)}
    >
      <div
        role="presentation"
        className={classes.myModalContent}
        onClick={(e: SyntheticEvent<HTMLElement>) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
