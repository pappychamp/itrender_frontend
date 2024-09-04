import Header from '../templates/Header.tsx';
import { Container } from '@mantine/core';
import classes from '../../styles/trend/Trend.module.css';
import Footer from '../templates/Footer.tsx';
import TrendSearchForm from '../templates/TrendSearchForm.tsx';
import TrendContents from '../templates/TrendContents.tsx';
import { useTrend } from '../../context/TrendContext.tsx';
import { useEffect, useState } from 'react';
import fetchSiteTrendData from '../../utils/api/fetchSiteTrendData.ts';
import { SiteItem } from '../../types/trendApi.ts';

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
      <Header />
      <Container className={`${classes['form-section']}`}>
        <TrendSearchForm />
      </Container>
      <Container className={`${classes['contents-section']}`}>
        {trendData && <TrendContents items={trendData} />}
      </Container>
      <Footer />
    </>
  );
};

export default Trend;
