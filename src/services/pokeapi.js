import axios from 'axios';

const BASE_API_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async (limit = 40) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/pokemon?limit=${limit}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    throw error;
  }
};

export const fetchPokemonDetail = async (id) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Pokemon detail for ID ${id}:`, error);
    throw error;
  }
};
