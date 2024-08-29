import Header from '../templates/Header.tsx';
import { Container } from '@mantine/core';
import classes from '../../styles/trend/Trend.module.css';
import Footer from '../templates/Footer.tsx';
import TrendSearchForm from '../templates/TrendSearchForm.tsx';
import TrendContents from '../templates/TrendContents.tsx';
import { useTrend } from '../../context/TrendContext.tsx';
import { getSiteTrendData } from '../../api/dataFetcher.ts';
import { useEffect, useState } from 'react';

const Trend = () => {
  const { state } = useTrend();
  const [trendData, setTrendData] = useState([]);
  useEffect(() => {
    // stateのdateとsiteのvalueがどちらかでも空の場合は何もしない
    if (!state.date || !state.site) {
      return;
      // それ以外はgetSiteTrendData処理
    }
    const fetchSiteTrendData = async () => {
      try {
        const siteTrendData = await getSiteTrendData(
          state.site.toLowerCase(),
          state.date,
        );
        setTrendData(siteTrendData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSiteTrendData();
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
