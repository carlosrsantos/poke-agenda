import axios from 'axios';

export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

// https://pokeapi.co/api/v2/pokemon?offset=20&limit=20