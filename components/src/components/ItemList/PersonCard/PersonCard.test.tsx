import { render, screen } from '@testing-library/react';
import { PersonCard } from './PersonCard';

const testPerson = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
  ],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};

describe('PersonCard', () => {
  it('PersonCard snapshot', () => {
    const personCardComponent = render(<PersonCard person={testPerson} />);
    expect(personCardComponent).toMatchSnapshot();
  });

  it('render elements in PersonCard with data test', () => {
    render(<PersonCard person={testPerson} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(testPerson.name)).toBeInTheDocument();
  });
});
