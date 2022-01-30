import { useState } from 'react';

import { AxiosError } from 'axios';

type ReturnUseFetchingType = [
  fetching: () => Promise<void>,
  isLoading: boolean,
  error: string,
];

export const useFetching = (callback: Function): ReturnUseFetchingType => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e: any) {
      const typedError = e as AxiosError;
      setError(typedError.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
