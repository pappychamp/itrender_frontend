import apiClient from '@/src/api/apiClient';
import { ApiData } from '../types/api';

const getFilterWordData = async (
  q: string[],
  page: number,
): Promise<ApiData> => {
  const response = await apiClient.get(`/search`, {
    params: {
      q,
      size: 10,
      page: page,
    },
  });
  return response.data;
};

export { getFilterWordData };
