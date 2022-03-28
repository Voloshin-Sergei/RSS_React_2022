import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
describe('App', () => {
  it('render App component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    screen.debug();
    expect(screen.getByText(/Persons/i)).toBeInTheDocument();
  });
});
