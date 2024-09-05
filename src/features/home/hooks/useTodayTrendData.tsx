import { useEffect, useState } from 'react';
import { SiteData } from '../../../types/trendApi';
import { getAllTrendData } from '../api/getAllTrendData';

const useTodayTrendData = (date: string) => {
  const [todayTrendData, setTodayTrendData] = useState<SiteData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSiteTrendData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getAllTrendData(date);
        setTodayTrendData(data);
      } catch (error) {
        setError(error as Error);
        setTodayTrendData(null);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSiteTrendData();
  }, [date]);
  return { todayTrendData, loading, error };
};

export { useTodayTrendData };
