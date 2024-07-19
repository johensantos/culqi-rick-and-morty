import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (name: string) => {
  try {
    const response = await axios.get(`${API_URL}/character`, {
      params: { name }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};
