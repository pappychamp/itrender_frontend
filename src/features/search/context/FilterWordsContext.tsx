import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Action, reducer, initialState } from './FilterWordsReducer';

// コンテキストの型定義
type FilterWordsContextType = {
  state: typeof initialState;
  dispatch: React.Dispatch<Action>;
};

// コンテキストの作成
const FilterWordsContext = createContext<FilterWordsContextType | undefined>(
  undefined,
);

// コンテキストプロバイダーコンポーネント
const FilterWordsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FilterWordsContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterWordsContext.Provider>
  );
};

// コンテキストのカスタムフック
const useFilterWords = () => {
  const context = useContext(FilterWordsContext);
  if (!context) {
    throw new Error('useFilterWords must be used within a FilterWordsProvider');
  }
  return context;
};
export { FilterWordsProvider, useFilterWords };
