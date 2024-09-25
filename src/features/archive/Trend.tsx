import { Container } from '@mantine/core';
import TrendSearchForm from './components/TrendSearchForm.tsx';
import TrendContents from './components/TrendContents.tsx';
import { useTrend } from './context/TrendContext.tsx';
import classes from './styles/Trend.module.css';
import { useSiteTrendData } from './hooks/useSiteTrendData.tsx';

const Trend = () => {
  const { state } = useTrend();
  const { trendData, hasSearched, loading, error } = useSiteTrendData(
    state.site,
    state.date,
  );
  return (
    <>
      <Container className={`${classes['form-section']}`}>
        <TrendSearchForm />
      </Container>
      <Container className={`${classes['contents-section']}`}>
        <TrendContents
          items={trendData}
          hasSearched={hasSearched}
          loading={loading}
          error={error}
        />
      </Container>
    </>
  );
};

export default Trend;
