import React from 'react';

import st from './Loader.module.css';

import { ReturnComponentType } from 'components/types';

export const Loader = (): ReturnComponentType => <div className={st.loader} />;
