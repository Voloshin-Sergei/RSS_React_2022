import { render, screen } from '@testing-library/react';
import { UserCard } from './UserCard';

const testUser = {
  name: 'testName',
  surname: 'testSurname',
  birthday: '07.04.2022',
  country: 'Belarus',
  gender: 'Female',
  avatar: new File(['(⌐□_□)'], 'test.jpg', { type: 'image/jpeg' }),
};

describe('UserCard', () => {
  it('UserCard snapshot', () => {
    global.URL.createObjectURL = jest.fn();
    const titleComponent = render(<UserCard user={testUser} />);
    expect(titleComponent).toMatchSnapshot();
  });

  it('render UserCard component with data test', () => {
    global.URL.createObjectURL = jest.fn();
    render(<UserCard user={testUser} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(`${testUser.name} ${testUser.surname}`)).toBeInTheDocument();
    expect(screen.getByText(testUser.birthday)).toBeInTheDocument();
    expect(screen.getByText(testUser.country)).toBeInTheDocument();
    expect(screen.getByText(testUser.gender)).toBeInTheDocument();
  });
});
