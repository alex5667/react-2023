// import React from 'react';
// import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Pagination from './Pagination';

// describe('Pagination component', () => {
//   const totalPages = 10;
//   const page = 5;
//   const changePage = jest.fn();

//   it('renders the correct number of pages and calls the changePage function when a page is clicked', () => {
//     const { getByText } = render(
//       <Pagination totalPages={totalPages} page={page} changePage={changePage} />
//     );

//     for (let i = 1; i <= totalPages; i++) {
//       expect(getByText(i.toString())).toBeInTheDocument();
//     }

//     const nextPage = page + 1;
//     const nextPageButton = getByText(nextPage.toString());
//     userEvent.click(nextPageButton);
//     expect(changePage).toHaveBeenCalledWith(nextPage);
//   });
// });
