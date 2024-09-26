import { useContext } from 'react';
import { FilterWordsContext } from '../context/FilterWordsContext';

// コンテキストのカスタムフック
const useFilterWords = () => {
  const context = useContext(FilterWordsContext);
  if (!context) {
    throw new Error('useFilterWords must be used within a FilterWordsProvider');
  }
  return context;
};

export { useFilterWords };
