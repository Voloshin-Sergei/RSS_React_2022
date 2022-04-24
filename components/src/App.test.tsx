import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { App } from './App';

describe('App', () => {
  it('App rendering on the "Home" page', () => {
    render(<App />, { wrapper: MemoryRouter });

    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });

  test('After clicking the "About us" link, the "About" page opens', () => {
    render(<App />, { wrapper: MemoryRouter });
    userEvent.click(screen.getByTestId('about'));
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  test('After clicking the "Users" link, the "Users" page opens', () => {
    render(<App />, { wrapper: MemoryRouter });
    userEvent.click(screen.getByTestId('users'));
    expect(screen.getByText('Add new user')).toBeInTheDocument();
  });

  test('landing on a "404" page', () => {
    const history = createMemoryHistory();
    history.push('/some/bad/route');
    render(
      <MemoryRouter initialEntries={['/ddddd']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
