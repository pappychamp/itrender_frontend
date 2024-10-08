import { useEffect, useState } from 'react';
import { SiteItem, SiteKey } from '@/src/types/trendData';
import { getSiteTrendData } from '../api/getSiteTrendData';
import * as Sentry from '@sentry/react';

const useSiteTrendData = (site: SiteKey | '', date: string) => {
  const [trendData, setTrendData] = useState<SiteItem[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // stateのdateとsiteのvalueがどちらかでも空の場合は何もしない
    if (!date || !site) {
      setHasSearched(false);
      setTrendData([]);
      return;
      // それ以外はgetSiteTrendData処理
    }
    const fetchSiteTrendData = async () => {
      setHasSearched(true);
      setLoading(true);
      setError(null);
      try {
        const data = await getSiteTrendData(site, date);
        setTrendData(data);
      } catch (error) {
        setError(error as Error);
        setTrendData([]);
        Sentry.captureException(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSiteTrendData();
  }, [site, date]);
  return { trendData, hasSearched, loading, error };
};

export { useSiteTrendData };
