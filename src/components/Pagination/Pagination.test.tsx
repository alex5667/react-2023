import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Pagination from './Pagination';
import { useAppSelector } from 'hooks/redux';
import { useActions } from 'hooks/useActions';

jest.mock('hooks/redux', () => ({
  useAppSelector: jest.fn(),
}));

jest.mock('hooks/useActions', () => ({
  useActions: jest.fn(),
}));

const mockStore = configureMockStore();

describe('Pagination', () => {
  const totalPages = 3;
  const page = 1;
  const setPage = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useAppSelector as jest.Mock).mockReturnValue({ totalPages, page });
    (useActions as jest.Mock).mockReturnValue({ setPage });
  });

  it('should render page numbers and call setPage when clicked', () => {
    render(
      <Provider store={mockStore()}>
        <Pagination />
      </Provider>
    );

    const page1Button = screen.getByText('1');
    const page2Button = screen.getByText('2');
    const page3Button = screen.getByText('3');

    expect(page1Button).toBeInTheDocument();
    expect(page2Button).toBeInTheDocument();
    expect(page3Button).toBeInTheDocument();

    userEvent.click(page2Button);
    expect(setPage).toHaveBeenCalledWith(2);

    userEvent.click(page3Button);
    expect(setPage).toHaveBeenCalledWith(3);

    userEvent.click(page1Button);
    expect(setPage).toHaveBeenCalledWith(1);
  });
});
