import apiClient from '@/src/api/apiClient';
import { SiteItem } from '@/src/types/trendData';

const getSiteTrendData = async (
  site: string,
  date: string,
): Promise<SiteItem[]> => {
  const response = await apiClient.get(`/trend/${site}`, {
    params: {
      filter_date: date,
    },
  });
  return response.data;
};

export { getSiteTrendData };
