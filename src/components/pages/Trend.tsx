import Header from '../templates/Header.tsx';
import { Button, Container } from '@mantine/core';
import classes from '../../styles/trend/Trend.module.css';
import Footer from '../templates/Footer.tsx';
import TrendSearchForm from '../templates/TrendSearchForm.tsx';
import TrendContents from '../templates/TrendContents.tsx';

const Trend = () => {
  return (
    <>
      <Header />
      <Container className={`${classes['form-section']}`}>
        <TrendSearchForm />
      </Container>
      <Container className={`${classes['button-section']}`}>
        <Button
          variant="filled"
          color="violet"
          className={`${classes['button']}`}
        >
          検索
        </Button>
      </Container>
      <Container className={`${classes['contents-section']}`}>
        <TrendContents />
      </Container>
      <Footer />
    </>
  );
};

export default Trend;
