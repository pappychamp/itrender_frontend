import Header from '../templates/Header.tsx';
import { Container } from '@mantine/core';
import classes from '../../styles/home/Home.module.css';
import HomeContents from '../templates/HomeContents.tsx';
import Eyecatch from '../templates/Eyecatch.tsx';
import Footer from '../templates/Footer.tsx';
import { useEffect, useState } from 'react';
import { getALLTrendData } from '../../api/dataFetcher.ts';
import { SiteData } from '../../types/trendApi.ts';
import { currentDate } from '../../utils/date/dateFormatter.ts';
import { trendDataFormat } from '../../utils/format/dataFormatter.ts';

const Home = () => {
  const [trend, setTrend] = useState<SiteData | null>(null);

  useEffect(() => {
    const fetchTrendData = async () => {
      try {
        const date = currentDate();
        const trendData = await getALLTrendData(date);
        const formattedData = trendDataFormat(trendData);
        setTrend(formattedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendData();
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
