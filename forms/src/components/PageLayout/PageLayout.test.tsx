import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PageLayout } from './PageLayout';

describe('PageLayout', () => {
  it('render elements in PageLayout', () => {
    const { container } = render(
      <BrowserRouter>
        <PageLayout />
      </BrowserRouter>
    );

    expect(container.querySelector('header')).toBeInTheDocument();
    expect(container.querySelector('main')).toBeInTheDocument();
    expect(container.querySelector('footer')).toBeInTheDocument();
  });
});
