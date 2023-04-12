// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import FilterProducts from './index';

// describe('FilterProducts', () => {
//   const filter = {
//     sort: '',
//     query: '',
//   };
//   const setFilter = jest.fn();

//   beforeEach(() => {
//     render(<FilterProducts filter={filter} setFilter={setFilter} />);
//   });

//   it('should update the filter sort value', async () => {
//     const select = screen.getByRole('combobox');
//     await waitFor(() => {
//       userEvent.selectOptions(select, 'price');
//       expect(setFilter).toHaveBeenCalledWith({
//         sort: 'price',
//         query: '',
//       });
//     });
//   });

//   it('should update the filter query value', async () => {
//     const input = screen.getByRole('searchbox');
//     const button = screen.getByRole('button');
//     await waitFor(() => {
//       userEvent.type(input, 'test');
//       userEvent.click(button);
//       expect(setFilter).toHaveBeenCalledWith({
//         sort: '',
//         query: 'test',
//       });
//     });
//   });
// });
