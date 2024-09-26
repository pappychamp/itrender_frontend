import { Container } from '@mantine/core';
import WordSearchForm from './components/WordSearchForm.tsx';
import classes from './styles/Search.module.css';
import { useWordTrendData } from './hooks/useWordTrendData.tsx';
import { useFilterWords } from './context/FilterWordsContext.tsx';
import FilterDataContents from './components/FilterDataContents.tsx';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import theme from '@/src/constants/theme.ts';

const Search = () => {
  const { state } = useFilterWords();
  const { filterData, hasSearched, loading, error } = useWordTrendData(
    state.words,
    state.page,
  );

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
  const [message, setMessage] = useState<string>('');
  return (
    <>
      <Container className={`${classes['search-section']}`}>
        <WordSearchForm setMessage={setMessage} mobile={mobile} />
      </Container>
      <Container className={`${classes['contents-section']}`}>
        <FilterDataContents
          data={filterData}
          hasSearched={hasSearched}
          loading={loading}
          error={error}
          message={message}
          mobile={mobile}
        />
      </Container>
    </>
  );
};

export default Search;
