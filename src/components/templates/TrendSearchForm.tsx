import { Container } from '@mantine/core';
import DateForm from '../organisms/DateForm';
import TrendForm from '../organisms/TrendForm';
import classes from '../../styles/trend/TrendSearchForm.module.css';
import { useEffect, useState } from 'react';
import { getPastDates } from '../../utils/dateFormatter';
import { siteOptions } from '../../utils/selectOptions';

const TrendSearchForm = () => {
  const [date, setDate] = useState<string[] | null>(null);
  const [defaultDateOption, setDefaultDateOption] = useState('');
  useEffect(() => {
    const getDate = getPastDates(5);
    setDate(getDate);
    setDefaultDateOption(getDate[0]);
  }, []);

  return (
    <>
      <Container className={`${classes['main-section']}`}>
        <Container className={`${classes['form-section']}`}>
          <TrendForm site={siteOptions} />
        </Container>
        <Container className={`${classes['form-section']}`}>
          {date && <DateForm date={date} defaultValue={defaultDateOption} />}
        </Container>
      </Container>
    </>
  );
};

export default TrendSearchForm;
