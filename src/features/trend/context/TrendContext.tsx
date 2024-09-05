import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { State, Action, reducer, initialState } from './TrendReducer';

// コンテキストの型定義
type TrendContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

// コンテキストの作成
const TrendContext = createContext<TrendContextType | undefined>(undefined);

// コンテキストプロバイダーコンポーネント
const TrendProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TrendContext.Provider value={{ state, dispatch }}>
      {children}
    </TrendContext.Provider>
  );
};

// コンテキストのカスタムフック
const useTrend = () => {
  const context = useContext(TrendContext);
  if (!context) {
    throw new Error('useTrend must be used within a TrendProvider');
  }
  return context;
};
export { TrendProvider, useTrend };
