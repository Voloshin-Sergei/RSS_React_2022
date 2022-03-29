import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('Footer snapshot', () => {
    const footerComponent = render(<Footer />);
    expect(footerComponent).toMatchSnapshot();
  });

  it('render link elements', () => {
    render(<Footer />);
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
});
