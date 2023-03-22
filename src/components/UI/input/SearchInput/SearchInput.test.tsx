import React from 'react';
import { render } from '@testing-library/react';

import Search from './index';

describe('input', () => {
  it(' render with the correct className', () => {
    const { container } = render(<Search />);
    expect(container.firstChild).toHaveClass('searchInput');
  });
});
