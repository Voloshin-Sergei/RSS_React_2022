import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  it('Header snapshot', () => {
    const footerComponent = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(footerComponent).toMatchSnapshot();
  });

  it('render link elements', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });

  it('render navigation elements', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
