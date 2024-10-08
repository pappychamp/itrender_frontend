import apiClient from '@/src/api/apiClient';
import { ApiData } from '../types/api';

const getLatestTrendData = async (): Promise<ApiData> => {
  const response = await apiClient.get('/trend');
  return response.data;
};

export { getLatestTrendData };
