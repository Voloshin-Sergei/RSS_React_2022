import { render, screen } from '@testing-library/react';
import { NotFoundPage } from './NotFoundPage';

describe('NotFoundPage', () => {
  it('NotFoundPage snapshot', () => {
    const container = render(<NotFoundPage />);
    expect(container).toMatchSnapshot();
  });

  it('render NotFoundPage elements', () => {
    render(<NotFoundPage />);
    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Sorry, page not found/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
