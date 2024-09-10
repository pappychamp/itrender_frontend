import apiClient from '../../../api/apiClient';
import { ApiData } from '../types/api';

const getLatestTrendData = async (): Promise<ApiData> => {
  try {
    const response = await apiClient.get('/trend');
    return response.data;
  } catch (error) {
    console.error('error', error);
    throw error;
  }
};

export { getLatestTrendData };
