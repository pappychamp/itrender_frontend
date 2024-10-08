import { useEffect, useState } from 'react';
import { SiteData } from '@/src/types/trendData';
import { getLatestTrendData } from '../api/getLatestTrendData';
import { trendDataFormat } from '../utils/format/dataFormatter';
import * as Sentry from '@sentry/react';

const useLatestTrendData = () => {
  const [latestTrendData, setLatestTrendData] = useState<SiteData>({});
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
        setLatestTrendData(trendDataFormat(trendData));
      } catch (error) {
        setError(error as Error);
        setLatestDate('');
        setLatestTrendData({});
        Sentry.captureException(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSiteTrendData();
  }, []);
  return { latestTrendData, latestDate, loading, error };
};

export { useLatestTrendData };
