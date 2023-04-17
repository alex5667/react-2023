import React from 'react';
import { getByText, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormCheckBox from './index';

describe('FormCheckBox component', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(
      <FormCheckBox label="Test checkbox" name="test" type="checkbox" error={undefined} />
    );
    const checkbox = getByLabelText('Test checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it('handles change event correctly', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <FormCheckBox
        label="Test checkbox"
        name="test"
        type="checkbox"
        onChange={onChange}
        error={undefined}
      />
    );
    const checkbox = getByLabelText('Test checkbox');
    expect(checkbox).not.toBeChecked();
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('should render the error message when an error is provided', () => {
    const { getByText } = render(
      <FormCheckBox label="Test Label" name="test-name" error="Test Error" type="checkbox" />
    );

    expect(getByText('Test Error')).toBeInTheDocument();
  });
  it('should not render the error message when no error is provided', () => {
    const { queryByText } = render(
      <FormCheckBox label="Test Label" name="test-name" error={undefined} type="checkbox" />
    );

    expect(queryByText('Test Error')).toBeNull();
  });
});
