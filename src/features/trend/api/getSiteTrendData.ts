import apiClient from '../../../api/apiClient';

const getSiteTrendData = async (site: string, date: string) => {
  try {
    const response = await apiClient.get(`/trend/${site}`, {
      params: {
        filter_date: date,
      },
    });
    return response.data;
  } catch (error) {
    console.error('error', error);
    throw error;
  }
};

export { getSiteTrendData };
