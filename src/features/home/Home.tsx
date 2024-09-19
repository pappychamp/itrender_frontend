import { Container, Text } from '@mantine/core';
import HomeContents from './components/HomeContents.tsx';
import classes from './styles/Home.module.css';
import { useLatestTrendData } from './hooks/useLatestTrendData.tsx';

const Home = () => {
  const { latestTrendData, latestDate, loading, error } = useLatestTrendData();

  return (
    <>
      {/* <Box className={`${classes['eyecatch-section']}`}>
        <Eyecatch />
      </Box> */}
      <Container className={`${classes['date-section']}`}>
        <Text className={`${classes['date-text']}`}>
          最終更新日:{latestDate}
        </Text>
      </Container>
      <Container className={`${classes['contents-section']}`}>
        <HomeContents data={latestTrendData} loading={loading} error={error} />
      </Container>
    </>
  );
};

export default Home;
