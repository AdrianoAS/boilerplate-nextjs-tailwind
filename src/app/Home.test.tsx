import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('<Home />', () => {
  it('Shoulbe render corretly', () => {
    render(<Home />);

    expect(screen.getByText(/Hello world/i)).toBeInTheDocument();
  });
});
