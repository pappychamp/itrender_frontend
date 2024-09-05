import { Container } from '@mantine/core';
import TrendSearchForm from '../TrendSearchForm.tsx';
import TrendContents from '../TrendContents.tsx';
import { useTrend } from '../../context/TrendContext.tsx';
import { useEffect, useState } from 'react';
import fetchSiteTrendData from '../../api/fetchSiteTrendData.ts';
import { SiteItem } from '../../../../types/trendApi.ts';
import classes from '../../styles/Trend.module.css';

const Trend = () => {
  const { state } = useTrend();
  const [trendData, setTrendData] = useState<SiteItem[]>([]);
  useEffect(() => {
    // stateのdateとsiteのvalueがどちらかでも空の場合は何もしない
    if (!state.date || !state.site) {
      setTrendData([]);
      return;
      // それ以外はgetSiteTrendData処理
    }
    fetchSiteTrendData(state.site, state.date, setTrendData);
  }, [state]);

  return (
    <>
      <Container className={`${classes['form-section']}`}>
        <TrendSearchForm />
      </Container>
      <Container className={`${classes['contents-section']}`}>
        {trendData && <TrendContents items={trendData} />}
      </Container>
    </>
  );
};

export default Trend;
