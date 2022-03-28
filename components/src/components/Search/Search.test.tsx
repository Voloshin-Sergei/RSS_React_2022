import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from './Search';

describe('Search', () => {
  it('Search snapshot', () => {
    const searchComponent = render(<Search />);
    expect(searchComponent).toMatchSnapshot();
  });

  it('render input element', () => {
    render(<Search />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('input element focus', () => {
    render(<Search />);
    const input = screen.getByRole('textbox');
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });

  it('value input element may be changed', () => {
    render(<Search />);
    fireEvent.change(screen.getByPlaceholderText(/search/i), {
      target: { value: 'test value' },
    });
    screen.debug();
  });

  it('render button element', () => {
    render(<Search />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
