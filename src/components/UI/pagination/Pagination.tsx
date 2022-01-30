import React, { FC } from 'react';

type PaginationPropsType = {
  pagesArray: number[];
  page: number;
  changePage: (pageNumber: number) => void;
};

const Pagination: FC<PaginationPropsType> = ({ pagesArray, page, changePage }) => (
  <div className="page__wrapper">
    {pagesArray.map(p => (
      <span
        role="presentation"
        key={p}
        onClick={() => changePage(p)}
        className={page === p ? 'page page__current' : 'page'}
      >
        {p}
      </span>
    ))}
  </div>
);

export default Pagination;
