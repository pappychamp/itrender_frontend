import { useEffect, useState } from 'react';
import { SiteItem, SiteKey } from '../../../types/trendData';
import { getSiteTrendData } from '../api/getSiteTrendData';

const useSiteTrendData = (site: SiteKey | '', date: string) => {
  const [trendData, setTrendData] = useState<SiteItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // stateのdateとsiteのvalueがどちらかでも空の場合は何もしない
    if (!date || !site) {
      setTrendData([]);
      return;
      // それ以外はgetSiteTrendData処理
    }
    const fetchSiteTrendData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getSiteTrendData(site, date);
        setTrendData(data);
      } catch (error) {
        setError(error as Error);
        setTrendData([]);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSiteTrendData();
  }, [site, date]);
  return { trendData, loading, error };
};

export { useSiteTrendData };
