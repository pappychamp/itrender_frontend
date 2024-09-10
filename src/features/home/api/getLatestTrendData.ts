import apiClient from '../../../api/apiClient';

const getLatestTrendData = async () => {
  try {
    const response = await apiClient.get('/trend');
    return response.data;
  } catch (error) {
    console.error('error', error);
    throw error;
  }
};

export { getLatestTrendData };
