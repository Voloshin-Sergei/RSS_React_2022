import { render, screen, fireEvent } from '@testing-library/react';
import { ItemList } from './ItemList';

const testPersons = [
  {
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
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
  },
];

const testUsers = [
  {
    name: 'testName',
    surname: 'testSurname',
    birthday: '07.04.2022',
    country: 'Belarus',
    gender: 'Female',
    avatar: new File(['(⌐□_□)'], 'test.jpg', { type: 'image/jpeg' }),
  },
  {
    name: 'testName',
    surname: 'testSurname',
    birthday: '07.04.2022',
    country: 'Belarus',
    gender: 'Female',
    avatar: new File(['(⌐□_□)'], 'test.jpg', { type: 'image/jpeg' }),
  },
];

const onClick = jest.fn();
describe('ItemList', () => {
  it('ItemList snapshot witch persons', () => {
    const ItemListComponent = render(<ItemList persons={testPersons} />);
    expect(ItemListComponent).toMatchSnapshot();
  });

  it('ItemList snapshot witch users', () => {
    global.URL.createObjectURL = jest.fn();
    const ItemListComponent = render(<ItemList users={testUsers} />);
    expect(ItemListComponent).toMatchSnapshot();
  });

  it('render PersonCards in ItemList', () => {
    const { container } = render(<ItemList persons={testPersons} />);

    expect(container.getElementsByClassName('person').length).toBe(testPersons.length);
  });

  it('render UserCards in ItemList', () => {
    global.URL.createObjectURL = jest.fn();
    const { container } = render(<ItemList users={testUsers} />);

    expect(container.getElementsByClassName('user').length).toBe(testUsers.length);
  });
});
