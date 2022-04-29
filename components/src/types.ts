export interface Person {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface User {
  id?: number;
  name: string;
  surname: string;
  birthday: string;
  country: string;
  gender: string;
  avatar: File;
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface PersonsResponse {
  info: Info;
  results: Person[];
}

export interface ErrorType {
  error: string;
}
