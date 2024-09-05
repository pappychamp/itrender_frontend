import { Container } from '@mantine/core';
import HomeContents from '../HomeContents.tsx';
import Eyecatch from '../Eyecatch.tsx';
import classes from '../../styles/Home.module.css';
import { useTodayTrendData } from '../../hooks/useTodayTrendData.tsx';
import { currentDate } from '../../utils/date/dateFormatter.ts';

const Home = () => {
    const date = currentDate();
  const { todayTrendData, loading, error } = useTodayTrendData(date);

  return (
    <>
      <Container className={`${classes['eyecatch-section']}`}>
        <Eyecatch />
      </Container>
      <Container className={`${classes['contents-section']}`}>
        {trend && <HomeContents data={trend} />}
      </Container>
    </>
  );
};

export default Home;
