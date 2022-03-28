import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  it('render App component', () => {
    render(<App />);
    screen.debug();
    expect(screen.getByText(/Persons/i)).toBeInTheDocument();
  });
});
