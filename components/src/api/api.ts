import { AxiosResponse } from 'axios';
import { request } from './config';
import { Person, PersonsResponse } from '../types';

export const api = {
  getAllPersons: async () => {
    const response = await request.get('/character');
    return response.data;
  },

  getPersons: async (name: string) => {
    const response = await request.get('/character', {
      params: {
        name: name,
      },
    });
    return response.data;
  },

  getPerson: async (id: number): Promise<AxiosResponse<Person>> => {
    const response = await request.get(`/character/${id}`);
    return response;
  },
};
