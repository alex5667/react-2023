import React, { FC } from 'react';
import { getPagesArray } from 'utils/pages';
import './Pagination.scss';
import { useAppSelector } from 'hooks/redux';
import { useActions } from 'hooks/useActions';

export const Pagination: FC = () => {
  const { totalPages, page } = useAppSelector((state) => state.homeSlice);
  const { setPage } = useActions();
  const pagesArray = getPagesArray(totalPages);

  const changePage = (page: number) => {
    setPage(page);
  };
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
