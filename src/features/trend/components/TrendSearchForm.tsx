import { Container } from '@mantine/core';
import DateForm from '../../../components/organisms/DateForm';
import SiteForm from '../../../components/organisms/SiteForm';
import classes from '../styles/TrendSearchForm.module.css';
import { useEffect, useState } from 'react';
import { getPastDates } from '../../../utils/date/dateFormatter';
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
          <SiteForm site={siteOptions} />
        </Container>
        <Container className={`${classes['form-section']}`}>
          {date && <DateForm date={date} />}
        </Container>
      </Container>
    </>
  );
};

export default TrendSearchForm;
