import apiClient from '../../../api/apiClient';
import { ApiData } from '../types/api';

const getFilterWordData = async (
  q: string[],
  page: number,
): Promise<ApiData> => {
  try {
    const response = await apiClient.get(`/search`, {
      params: {
        q,
        size: 10,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('error', error);
    throw error;
  }
};

export { getFilterWordData };
