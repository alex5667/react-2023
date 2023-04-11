import React from 'react';
import { render } from '@testing-library/react';
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
});
