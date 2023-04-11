import React, { FC } from 'react';
import { getPagesArray } from 'utils/pages';
import './Pagination.scss';

interface Props {
  totalPages: number;
  page: number;
  changePage: (p: number) => void;
}

export const Pagination: FC<Props> = ({ totalPages, page, changePage }) => {
  const pagesArray = getPagesArray(totalPages);

  return (
    <div className="pagination">
      {pagesArray.map((p) => (
        <span
          className={page === p ? `pages pages-current` : `pages`}
          onClick={() => changePage(p)}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
