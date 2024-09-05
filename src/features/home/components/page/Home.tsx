import Header from '../../../../components/layout/Header.tsx';
import { Container } from '@mantine/core';
import HomeContents from '../HomeContents.tsx';
import Eyecatch from '../Eyecatch.tsx';
import Footer from '../../../../components/layout/Footer.tsx';
import { useEffect, useState } from 'react';
import { SiteData } from '../../../../types/trendApi.ts';
import { currentDate } from '../../../../utils/date/dateFormatter.ts';
import fetchAllTrendData from '../../api/fetchAllTrendData.ts';
import classes from '../../styles/Home.module.css';

const Home = () => {
  const [trend, setTrend] = useState<SiteData | null>(null);

  useEffect(() => {
    const date = currentDate();
    fetchAllTrendData(date, setTrend);
  }, []);

  return (
    <>
      <Header></Header>
      <Container className={`${classes['eyecatch-section']}`}>
        <Eyecatch />
      </Container>
      <Container className={`${classes['contents-section']}`}>
        {trend && <HomeContents data={trend} />}
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Home;
