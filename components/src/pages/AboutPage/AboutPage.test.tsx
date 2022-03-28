import { render, screen } from '@testing-library/react';
import { AboutPage } from './AboutPage';

describe('AboutPage', () => {
  it('AboutPage snapshot', () => {
    const container = render(<AboutPage />);
    expect(container).toMatchSnapshot();
  });

  it('render AboutPage elements', () => {
    const { container } = render(<AboutPage />);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(container.querySelectorAll('p').length).toBe(3);
  });
});
