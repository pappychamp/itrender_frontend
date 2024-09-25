import { useEffect, useState } from 'react';
import { getFilterWordData } from '../api/getFilterWordData';
import { ApiData } from '../types/api';

const useWordTrendData = (filterWords: string[], page: number) => {
  const [filterData, setFilterData] = useState<ApiData | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // filterWordsが空の場合は何もしない
    if (filterWords.length === 0) {
      setHasSearched(false);
      setFilterData(null);
      return;
    }
    // それ以外はgetSiteTrendData処理
    const fetchSiteTrendData = async () => {
      setHasSearched(true);
      setLoading(true);
      setError(null);
      try {
        const data = await getFilterWordData(filterWords, page);
        setFilterData(data);
      } catch (error) {
        setError(error as Error);
        setFilterData(null);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSiteTrendData();
  }, [filterWords, page]);
  return { filterData, hasSearched, loading, error };
};

export { useWordTrendData };
