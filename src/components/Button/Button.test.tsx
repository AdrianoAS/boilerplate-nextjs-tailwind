import Button from './index';

import { render, screen } from '@testing-library/react';

describe('<Button />', () => {
  it('Shoulbe render corretly', () => {
    render(<Button label="button" />);

    expect(screen.getByText(/button/i)).toBeInTheDocument();
  });
});
