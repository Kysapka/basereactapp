import { useState } from 'react';

import { AxiosError } from 'axios';

type ReturnUseFetchingType = [
  fetching: (currentLimit: number, currentPage: number) => Promise<void>,
  isLoading: boolean,
  error: string,
];

export const useFetching = (callback): ReturnUseFetchingType => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async (...args): Promise<any> => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e: any) {
      const typedError = e as AxiosError;
      const errorMessage = typedError.message;
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
