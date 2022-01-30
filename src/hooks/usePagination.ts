import { useMemo, useState } from 'react';

import { DEFAULT_LIMIT_POSTS, DEFAULT_START_PAGE } from 'components/API/PostService';

const INCREMENT = 1;
const DEFAULT_TOTAL_COUNT_VALUE = 0;

export const usePagination = (): any => {
  const [page, setPage] = useState(DEFAULT_START_PAGE);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [limit, setLimit] = useState(DEFAULT_LIMIT_POSTS);

  const [totalPages, setTotalPages] = useState(DEFAULT_TOTAL_COUNT_VALUE);

  const getPageCount = (currentTotalCount: number, currentLimit: number): number =>
    Math.ceil(currentTotalCount / currentLimit);

  const getPagesArray = (currentTotalPages: number): number[] => {
    const pagesArray: number[] = [];

    for (let i = 0; i < currentTotalPages; i += INCREMENT) {
      pagesArray.push(i + INCREMENT);
    }
    return pagesArray;
  };

  const pageCount = useMemo(() => getPageCount(totalPages, limit), [totalPages, limit]);
  const pagesArray = useMemo(() => getPagesArray(pageCount), [pageCount]);

  return { pagesArray, page, limit, setTotalPages, setPage };
};
