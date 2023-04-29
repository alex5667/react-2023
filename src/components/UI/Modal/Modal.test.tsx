import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './index';

describe('Modal component', () => {
  test('should close the modal when close button is clicked', () => {
    const setVisible = jest.fn();
    render(
      <Modal visible={true} setVisible={setVisible}>
        <div>Modal content</div>
      </Modal>
    );

    const closeButton = screen.getByRole('button');
    userEvent.click(closeButton);

    expect(setVisible).toHaveBeenCalledWith(false);
  });
});
