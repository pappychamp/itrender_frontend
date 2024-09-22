import { Box } from '@mantine/core';
import DateForm from './TrendSearchForm/DateForm.tsx';
import SiteForm from './TrendSearchForm/SiteForm.tsx';
import classes from '../styles/TrendSearchForm.module.css';
import { useEffect, useState } from 'react';
import { getPastDates } from '../utils/date/dateFormatter.ts';
import { siteOptions } from '../../../constants/selectOptions';

const TrendSearchForm = () => {
  const [date, setDate] = useState<string[] | null>(null);
  useEffect(() => {
    const getDate = getPastDates(2, 6);
    setDate(getDate);
  }, []);

  return (
    <>
      <Box className={`${classes['main-section']}`}>
        <Box className={`${classes['form-section']}`}>
          <SiteForm siteOptions={siteOptions} />
        </Box>
        <Box className={`${classes['form-section']}`}>
          {date && <DateForm date={date} />}
        </Box>
      </Box>
    </>
  );
};

export default TrendSearchForm;
