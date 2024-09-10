import { Container } from '@mantine/core';
import DateForm from './TrendSearchForm/DateForm.tsx';
import SiteForm from './TrendSearchForm/SiteForm.tsx';
import classes from '../styles/TrendSearchForm.module.css';
import { useEffect, useState } from 'react';
import { getPastDates } from '../utils/date/dateFormatter.ts';
import { siteOptions } from '../../../constants/selectOptions';

const TrendSearchForm = () => {
  const [date, setDate] = useState<string[] | null>(null);
  useEffect(() => {
    const getDate = getPastDates(5);
    setDate(getDate);
  }, []);

  return (
    <>
      <Container className={`${classes['main-section']}`}>
        <Container className={`${classes['form-section']}`}>
          <SiteForm siteOptions={siteOptions} />
        </Container>
        <Container className={`${classes['form-section']}`}>
          {date && <DateForm date={date} />}
        </Container>
      </Container>
    </>
  );
};

export default TrendSearchForm;
