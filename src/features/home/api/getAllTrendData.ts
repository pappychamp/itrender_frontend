import apiClient from '../../../api/apiClient';

const getAllTrendData = async (date: string) => {
  try {
    const response = await apiClient.get('/trend', {
      params: {
        // filter_date: '2024-08-15',
        filter_date: date,
      },
    });
    return response.data;
  } catch (error) {
    console.error('error', error);
    throw error;
  }
};

export { getAllTrendData };
