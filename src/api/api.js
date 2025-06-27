import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${API_URL}/posts`, {
      params: { _page: page, _limit: limit },
    });
    return response.data;
  } catch {
    throw new Error('Failed to fetch posts');
  }
};