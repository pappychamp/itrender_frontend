import React, { createContext, useReducer, ReactNode } from 'react';
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

export { FilterWordsProvider, FilterWordsContext };
