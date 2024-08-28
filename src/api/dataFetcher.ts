import apiClient from './apiClient';

const getTrendData = async (site: string, date: string) => {
  try {
    const response = await apiClient.get('/trend', {
      params: {
        site: site,
        // filter_date: '2024-08-15',
        filter_date: date,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('error', error);
    throw error;
  }
};

export { getTrendData };
