import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
  it('Loader snapshot', () => {
    const loaderComponent = render(<Loader />);
    expect(loaderComponent).toMatchSnapshot();
  });

  it('render Loader component', () => {
    render(<Loader />);
    expect(screen.getByTestId('loader')).toBeInTheDocument;
  });
});
