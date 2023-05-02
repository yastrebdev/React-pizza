import React from 'react';
import mod from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';
import { removeListener } from 'process';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={mod.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={2}
      forcePage={currentPage - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};