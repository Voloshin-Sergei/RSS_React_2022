import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from './Search';

describe('Search', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  const testOnclick = jest.fn();

  it('Search snapshot', () => {
    const searchComponent = render(<Search onClick={testOnclick} />);
    expect(searchComponent).toMatchSnapshot();
  });

  it('render input element', () => {
    render(<Search onClick={testOnclick} />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('input element focus', () => {
    render(<Search onClick={testOnclick} />);
    const input = screen.getByRole('textbox');
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });

  it('value input element may be changed', () => {
    render(<Search onClick={testOnclick} />);
    fireEvent.change(screen.getByPlaceholderText(/search/i), {
      target: { value: 'test value' },
    });
    screen.debug();
  });

  it('render button element', () => {
    render(<Search onClick={testOnclick} />);
    expect(screen.getByRole('button')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button'));
    expect(testOnclick).toHaveBeenCalled();
  });

  it('Should call localStorage getItem on render', () => {
    render(<Search onClick={testOnclick} />);
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
  });
});
