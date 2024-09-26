import { useContext } from 'react';
import { TrendContext } from '../context/TrendContext';

// コンテキストのカスタムフック
const useTrend = () => {
  const context = useContext(TrendContext);
  if (!context) {
    throw new Error('useTrend must be used within a TrendProvider');
  }
  return context;
};

export { useTrend };
