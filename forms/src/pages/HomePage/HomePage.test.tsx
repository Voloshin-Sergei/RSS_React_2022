import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('HomePage snapshot', () => {
    const container = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });

  it('render HomePage elements', () => {
    render(<HomePage />);
    expect(screen.getByText(/Persons/i)).toBeInTheDocument();
  });
});
