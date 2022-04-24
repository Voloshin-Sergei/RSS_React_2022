import { render, screen } from '@testing-library/react';
import { Title } from './Title';

const testTitle = 'This is test Title';

describe('Title', () => {
  it('Title snapshot', () => {
    const titleComponent = render(<Title text={testTitle} />);
    expect(titleComponent).toMatchSnapshot();
  });

  it('render Title component', () => {
    render(<Title text={testTitle} />);
    expect(screen.getByText(testTitle)).toBeInTheDocument;
  });
});
