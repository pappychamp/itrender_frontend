import { useEffect, useState } from 'react';
import { SiteData } from '../../../types/trendApi';
import { getLatestTrendData } from '../api/getLatestTrendData';

const useLatestTrendData = () => {
  const [latestTrendData, setLatestTrendData] = useState<SiteData | null>(null);
  const [latestDate, setLatestDate] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSiteTrendData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getLatestTrendData();
        const latestDate = Object.keys(data)[0];
        const trendData = data[latestDate];
        setLatestDate(latestDate);
        setLatestTrendData(trendData);
      } catch (error) {
        setError(error as Error);
        setLatestTrendData(null);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSiteTrendData();
  }, []);
  return { latestTrendData, latestDate, loading, error };
};

export { useLatestTrendData };
